"use client";

import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";

type CloudLayerProps = {
  src: string;
  className?: string;
  motionProps?: MotionProps;
};

export default function CloudLayer({
  src,
  className,
  motionProps,
}: CloudLayerProps) {
  return (
    <motion.img
      src={src}
      alt=""
      className={className}
      aria-hidden="true"
      {...motionProps}
    />
  );
}
