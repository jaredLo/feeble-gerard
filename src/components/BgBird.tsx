"use client";

import Image from "next/image";
import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";

type BgBirdProps = {
  className?: string;
  motionProps?: MotionProps;
};

export default function BgBird({
  className,
  motionProps,
}: BgBirdProps) {
  return (
    <motion.div className={className} {...(motionProps ?? {})}>
      <Image
        src="/bg-bird.svg"
        alt=""
        width={42}
        height={14}
        className="h-full w-full"
        aria-hidden="true"
      />
    </motion.div>
  );
}
