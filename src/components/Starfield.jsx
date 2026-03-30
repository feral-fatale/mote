"use client";
import { use, useEffect, useRef } from "react";

// ─── PIXEL STAR CANVAS BACKGROUND ────────────────────────────────────────────
const StarField = () => {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() < 0.2 ? 2 : 1,
    delay: Math.random() * 3,
  }), []);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: "#ff69b4",
            imageRendering: "pixelated",
            animation: `twinkle 2s ${s.delay}s infinite alternate`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;