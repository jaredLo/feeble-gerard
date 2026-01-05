"use client";

import Image from "next/image";
import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";

type CloudLayerProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
  motionProps?: MotionProps;
};

export default function CloudLayer({
  src,
  width,
  height,
  className,
  motionProps,
}: CloudLayerProps) {
  return (
    <motion.div className={className} {...(motionProps ?? {})}>
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className="h-auto w-full"
        sizes="100vw"
        aria-hidden="true"
      />
    </motion.div>
  );
}
