"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import BgBird from "../components/BgBird";
import CloudLayer from "../components/CloudLayer";
import DecorBird from "../components/DecorBird";
import {
  bgBirds,
  cloudLayers,
  decorBirds,
  fadeInMotion,
  flyBirds,
  navLinks,
  riseMotion,
} from "./landingData";

const DESIGN_WIDTH = 3072; // 192rem at 16px base

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (!heroRef.current) return;
      const viewportWidth = document.documentElement.clientWidth;
      const scale = Math.min(1, viewportWidth / DESIGN_WIDTH);
      heroRef.current.style.setProperty("--hero-scale", String(scale));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#EAF4FF] via-[#EAF4FF] to-[#D8E9FF] text-[#1D2026]">
      <div ref={heroRef} className="hero-scale">
        <div className="hero-frame">
          <div className="absolute left-[12rem] top-[4rem] flex h-[59.2rem] w-[168rem] flex-col items-center gap-[6.4rem]">
            <motion.header
              className="relative z-30 flex h-[8.1rem] w-[120rem] items-center justify-between rounded-[20rem] bg-white py-[2rem] pl-[2.4rem] pr-[2rem] shadow-[0_0.1rem_0.4rem_rgba(12,12,13,0.05)]"
              {...fadeInMotion}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/icon-coup.svg"
                  alt="Coup"
                  width={107}
                  height={34}
                  className="h-[3.4rem] w-[10.694rem]"
                />
              </div>
              <nav className="hidden md:flex">
                <ul className="flex h-[3.8rem] w-[39.7rem] items-center gap-[1.65rem] text-[1.6rem] font-[500] text-[#8C97A8]">
                  {navLinks.map((item) => (
                    <li
                      key={item}
                      className="flex h-[3.8rem] items-center gap-[0.8rem] px-[1.2rem] py-[0.8rem]"
                    >
                      <a
                        href="#"
                        className="leading-[2.2rem] transition-colors hover:text-[#1D2026]"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button variant="primary" size="nav" hoverEffect="slide">
                <span className="relative top-[0.05rem] -left-[0.05rem]">
                  Contact Sales
                </span>
              </Button>
            </motion.header>

            <motion.section
              className="relative z-30 flex h-[44.7rem] w-full items-start justify-center text-center"
              {...fadeInMotion}
            >
              <div className="flex w-[73.6rem] flex-col items-center gap-[4.8rem]">
                <div className="flex w-full flex-col items-center gap-[2.4rem]">
                  <div className="inline-flex h-[2.8rem] items-center gap-3 rounded-[20rem] bg-white px-4 py-1 text-[1.6rem] font-[500] leading-[1.2] tracking-tight2 text-[#006FE8] shadow-[0_0.1rem_0.4rem_rgba(12,12,13,0.05)]">
                    <Image
                      src="/icon-ellipsis.svg"
                      alt=""
                      width={32}
                      height={17}
                      className="relative -top-[0.05rem] h-[1.7rem] w-[3.2rem]"
                    />
                    <span className="relative top-[0.1rem]">
                      #1 iMessage Automation Tool
                    </span>
                  </div>

                  <h1 className="text-[4rem] font-bold leading-[1.2] tracking-tight2 text-[#1D2026] sm:text-[5.2rem] lg:text-[6.4rem]">
                    <span className="text-[#007AFF]">iMessage</span> Automation
                    <br />
                    for Teams and AI
                    <br />
                    Workflows.
                  </h1>

                  <p className="max-w-[56rem] text-[1.8rem] font-[400] leading-[1.3] tracking-tight2">
                    <span className="relative top-[0.05rem] block">
                      Coup lets you, your team, or AI workflows send iMessages
                      directly from
                    </span>
                    <span className="block">
                      your phone number, running securely on your Mac or Mac Mini.
                    </span>
                  </p>
                </div>

                <div className="flex w-[41.4rem] items-center justify-center gap-[1.2rem]">
                  <Button variant="primary" size="hero" className="pt-[1.3rem]">
                    Get Started
                  </Button>
                  <Button variant="outline" size="hero" className="pb-[1rem]">
                    <Image
                      src="/icon-apple.svg"
                      alt=""
                      width={18}
                      height={22}
                      className="relative -top-[0.25rem] h-[2.2rem] w-[1.85rem] shrink-0"
                    />
                    <span
                      className="inline-block h-[1.8rem] w-[0.05rem] shrink-0 bg-[#6C788F]"
                      aria-hidden="true"
                    />
                    <span className="whitespace-nowrap">
                      Download the Mac app
                    </span>
                  </Button>
                </div>
              </div>
            </motion.section>

            <div className="pointer-events-none absolute inset-0 z-10">
              {bgBirds.map((bird) => (
                <BgBird
                  key={bird.id}
                  className={bird.className}
                  motionProps={bird.motionProps}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-20">
            {decorBirds.map((bird) => (
              <DecorBird
                key={bird.src}
                src={bird.src}
                width={bird.width}
                height={bird.height}
                className={bird.className}
                motionProps={bird.motionProps}
              />
            ))}
            {flyBirds.map((bird) => (
              <DecorBird
                key={bird.src}
                src={bird.src}
                width={bird.width}
                height={bird.height}
                className={bird.className}
                motionProps={bird.motionProps}
              />
            ))}
          </div>

          {/* Fog decoration - top left blur */}
          <motion.div
            className="pointer-events-none absolute left-[-5.78rem] top-[-14.3rem] z-10 h-[27.61rem] w-[29.45rem] rounded-full bg-white/70 blur-[121px]"
            aria-hidden="true"
            {...fadeInMotion}
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[56rem] opacity-10">
            {cloudLayers.map((layer) => (
              <CloudLayer
                key={layer.src}
                src={layer.src}
                width={layer.width}
                height={layer.height}
                className={layer.className}
                motionProps={riseMotion}
              />
            ))}
          </div>

          <motion.div
            className="pointer-events-none absolute left-[63.75rem] top-[94.694rem] z-30 flex h-[6.3rem] w-[64.5rem] flex-col items-center gap-[0.8rem] text-center text-[1.8rem] font-[500] leading-[1.3] tracking-tight2 text-[#1D2026]"
            {...fadeInMotion}
          >
            <span className="h-[2.3rem]">Scroll to learn more</span>
            <Image
              src="/arrow-down.svg"
              alt=""
              width={32}
              height={32}
              className="h-[3.2rem] w-[3.2rem]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
