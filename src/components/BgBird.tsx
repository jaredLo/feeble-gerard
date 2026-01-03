"use client";

import Image from "next/image";
import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";

type BgBirdProps = {
  className?: string;
  animateFromBottom?: boolean;
  fadeOutOnArrival?: boolean;
  delay?: number;
  motionProps?: MotionProps;
};

export default function BgBird({
  className,
  animateFromBottom = false,
  fadeOutOnArrival = false,
  delay = 0,
  motionProps,
}: BgBirdProps) {
  const fallbackMotionProps = animateFromBottom
    ? {
        initial: { opacity: fadeOutOnArrival ? 1 : 0, y: "60vh" },
        animate: { opacity: fadeOutOnArrival ? 0 : 1, y: 0 },
        transition: { duration: 1.2, ease: "easeInOut", delay },
      }
    : {};

  const resolvedMotionProps = motionProps ?? fallbackMotionProps;

  return (
    <motion.div className={className} {...resolvedMotionProps}>
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
