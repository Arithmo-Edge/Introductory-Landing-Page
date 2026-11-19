import React, {useEffect, useRef, useState} from 'react';

interface WebGLHeroCanvasProps {
  accentHex?: string;
  secondaryHex?: string;
  className?: string;
}

function hexToRgbNorm(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((c) => c + c)
          .join('')
      : clean;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return [0.0, 0.94, 1.0];
  return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
}

const VERTEX_SHADER_SRC = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_SRC = `
precision mediump float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform vec3 u_primary;
uniform vec3 u_secondary;

void main() {
  vec2 aspect = vec2(u_res.x / max(u_res.y, 1.0), 1.0);
  vec2 p = (v_uv - 0.5) * aspect;
  vec2 m = (u_mouse - 0.5) * aspect;

  float t = u_time * 0.24;
  float distM = length(p - m);
  float wave1 = sin(p.x * 7.5 + t * 1.4 + sin(p.y * 4.2 - t));
  float wave2 = cos(p.y * 6.8 - t * 1.1 + cos(p.x * 5.0 + t * 0.8));
  float contour = abs(wave1 + wave2);
  float lineGlow = smoothstep(0.22, 0.0, contour) * 0.36;

  // Fine geodesic polar interference grid
  float radius = length(p);
  float ring = smoothstep(0.03, 0.0, abs(fract(radius * 5.5 - t * 0.2) - 0.5) - 0.485);
  float cursorAura = exp(-distM * 3.4) * 0.26;

  vec3 baseObsidian = vec3(0.02, 0.032, 0.068);
  vec3 fieldColor = baseObsidian
    + u_primary * (lineGlow * 0.72 + cursorAura * 0.85 + ring * 0.09)
    + u_secondary * (smoothstep(0.95, 0.0, radius) * 0.14 + wave1 * wave2 * 0.04);

  // Subtle vignette so edge blends cleanly into obsidian background
  float vig = smoothstep(1.25, 0.25, length(v_uv - 0.5));
  gl_FragColor = vec4(fieldColor * (0.68 + 0.32 * vig), 0.92);
}
`;

export const WebGLHeroCanvas: React.FC<WebGLHeroCanvasProps> = ({
  accentHex = '#00F0FF',
  secondaryHex = '#8B5CF6',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      setFallback(true);
      return;
    }

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext('webgl', {
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
      });
    } catch {
      gl = null;
    }

    if (!gl) {
      setFallback(true);
      return;
    }

    const compileShader = (type: number, source: string): WebGLShader | null => {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vert = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SRC);
    const frag = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SRC);
    if (!vert || !frag) {
      setFallback(true);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setFallback(true);
      return;
    }
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setFallback(true);
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_res');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uPrimary = gl.getUniformLocation(program, 'u_primary');
    const uSecondary = gl.getUniformLocation(program, 'u_secondary');

    const primaryRgb = hexToRgbNorm(accentHex);
    const secondaryRgb = hexToRgbNorm(secondaryHex);

    let mouseX = 0.5;
    let mouseY = 0.45;
    let targetMouseX = 0.5;
    let targetMouseY = 0.45;
    let isVisible = true;
    let isTabActive = !document.hidden;
    let rafId = 0;

    const resize = () => {
      if (!gl || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      targetMouseX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      targetMouseY = Math.max(0, Math.min(1, 1 - (e.clientY - rect.top) / rect.height));
    };

    const handleVisibility = () => {
      isTabActive = !document.hidden;
    };

    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              if (entries[0]) isVisible = entries[0].isIntersecting;
            },
            {threshold: 0.01}
          )
        : null;

    io?.observe(canvas);
    resize();

    const startTime = performance.now();
    window.addEventListener('resize', resize, {passive: true});
    window.addEventListener('pointermove', handlePointerMove, {passive: true});
    document.addEventListener('visibilitychange', handleVisibility);

    const renderFrame = (now: number) => {
      rafId = requestAnimationFrame(renderFrame);
      if (!isVisible || !isTabActive || !gl) return;

      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      gl.uniform1f(uTime, (now - startTime) * 0.001);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.uniform3f(uPrimary, primaryRgb[0], primaryRgb[1], primaryRgb[2]);
      gl.uniform3f(uSecondary, secondaryRgb[0], secondaryRgb[1], secondaryRgb[2]);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    rafId = requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(rafId);
      io?.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibility);
      gl?.deleteBuffer(buffer);
      gl?.deleteProgram(program);
      gl?.deleteShader(vert);
      gl?.deleteShader(frag);
    };
  }, [accentHex, secondaryHex]);

  if (fallback) {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${className}`}
        style={{
          background: `radial-gradient(ellipse 75% 55% at 25% 20%, ${accentHex}1A, transparent 60%), radial-gradient(circle at 80% 35%, ${secondaryHex}14, transparent 55%)`,
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
};
