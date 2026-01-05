import type { MotionProps } from "framer-motion";

export const navLinks = ["How it Works", "Pricing", "Use Case", "FAQ"];

const riseDuration = 1.2;
const flyDelay = riseDuration + 0.8;
const fadeInDuration = 0.45;
const fadeInEase = [0.42, 0, 1, 1] as const;
const riseEase = [0, 0.59, 0.44, 0.99] as const;
const flyEase = [0.73, 0, 0.8, 0.83] as const;

export const fadeInMotion: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: fadeInDuration, ease: fadeInEase },
};

export const riseMotion: MotionProps = {
  initial: { opacity: 0, y: "60vh" },
  animate: { opacity: 1, y: 0 },
  transition: { duration: riseDuration, ease: riseEase },
};

const riseFadeOutMotion: MotionProps = {
  initial: { opacity: 1, y: "60vh" },
  animate: { opacity: 0, y: 0 },
  transition: riseMotion.transition,
};

export const bgBirds = [
  {
    id: "bg-bird-01",
    className: "absolute left-[17.8rem] top-[25.1rem] h-[1.4rem] w-[4.3rem]",
    motionProps: riseMotion,
  },
  {
    id: "bg-bird-02-static",
    className: "absolute left-[37.5rem] top-[28.9rem] h-[1.4rem] w-[4.3rem]",
    motionProps: fadeInMotion,
  },
  {
    id: "bg-bird-02-fade",
    className: "absolute left-[37.5rem] top-[28.9rem] h-[1.4rem] w-[4.3rem]",
    motionProps: riseFadeOutMotion,
  },
  {
    id: "bg-bird-03",
    className: "absolute left-[128.6rem] top-[26.5rem] h-[1.4rem] w-[4.3rem]",
    motionProps: riseMotion,
  },
  {
    id: "bg-bird-04-static",
    className: "absolute left-[132.6rem] top-[42.5rem] h-[1.4rem] w-[4.3rem]",
    motionProps: fadeInMotion,
  },
  {
    id: "bg-bird-04-fade",
    className: "absolute left-[132.6rem] top-[42.5rem] h-[1.4rem] w-[4.3rem]",
    motionProps: riseFadeOutMotion,
  },
];

export const decorBirds = [
  {
    src: "/decor-bird-01.svg",
    width: 104,
    height: 77,
    className:
      "absolute left-[37.192rem] top-[92.539rem] h-[7.675rem] w-[10.338rem]",
    motionProps: riseMotion,
  },
  {
    src: "/decor-bird-02.svg",
    width: 88,
    height: 57,
    className:
      "absolute left-[66.518rem] top-[88.1rem] h-[5.699rem] w-[8.774rem]",
    motionProps: riseMotion,
  },
  {
    src: "/decor-bird-03.svg",
    width: 129,
    height: 55,
    className:
      "absolute left-[126.318rem] top-[95.6rem] h-[5.438rem] w-[12.821rem]",
    motionProps: riseMotion,
  },
  {
    src: "/decor-bird-04.svg",
    width: 129,
    height: 102,
    className:
      "absolute left-[157.718rem] top-[88.2rem] h-[10.199rem] w-[12.893rem]",
    motionProps: riseMotion,
  },
];

export const flyBirds = [
  {
    src: "/anim-bird-fly-right.svg",
    width: 133,
    height: 74,
    className:
      "absolute -left-[22.555rem] top-[74rem] h-[7.3744rem] w-[13.3074rem]",
    motionProps: {
      initial: { x: 0, y: 0 },
      animate: { x: "236.6rem", y: "-50rem" },
      transition: {
        duration: 3.5,
        ease: flyEase,
        delay: flyDelay,
      },
    },
  },
  {
    src: "/anim-bird-fly-left.svg",
    width: 133,
    height: 74,
    className:
      "absolute left-[197.246rem] top-[88rem] h-[7.3744rem] w-[13.3074rem]",
    motionProps: {
      initial: { x: 0, y: 0 },
      animate: { x: "-236.6rem", y: "-50rem" },
      transition: {
        duration: 3.5,
        ease: flyEase,
        delay: flyDelay,
      },
    },
  },
];

export const cloudLayers = [
  {
    src: "/bg-clouds-04.svg",
    width: 1920,
    height: 522,
    className: "absolute -bottom-[12.8rem] left-0 w-full",
  },
  {
    src: "/bg-clouds-03.svg",
    width: 1919,
    height: 545,
    className: "absolute -bottom-[26.3rem] left-0 w-full",
  },
  {
    src: "/bg-clouds-02.svg",
    width: 1920,
    height: 484,
    className: "absolute -bottom-[31rem] left-0 w-full",
  },
  {
    src: "/bg-clouds-01.svg",
    width: 1920,
    height: 466,
    className: "absolute -bottom-[36rem] left-0 w-full",
  },
];
