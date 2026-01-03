"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";

type ScaledFrameProps = {
  children: ReactNode;
};

export default function ScaledFrame({ children }: ScaledFrameProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const targetScale = 2;
      const scaleBoost = 1.4;
      const maxScale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080,
      );
      const next = Math.min(targetScale, maxScale * scaleBoost);
      setScale(Number.isFinite(next) ? next : 1);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const style = { "--scale": scale } as CSSProperties;

  return (
    <div className="design-scale mx-auto" style={style}>
      <div className="design-frame">{children}</div>
    </div>
  );
}
