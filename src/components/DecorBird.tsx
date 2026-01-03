"use client";

import Image from "next/image";
import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";

type DecorBirdProps = {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  motionProps?: MotionProps;
};

export default function DecorBird({
  src,
  className,
  width = 129,
  height = 102,
  motionProps,
}: DecorBirdProps) {
  return (
    <motion.div className={className} {...motionProps}>
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className="h-full w-full"
        aria-hidden="true"
      />
    </motion.div>
  );
}
