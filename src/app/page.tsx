import Image from "next/image";
import Button from "../components/Button";
import BgBird from "../components/BgBird";
import CloudLayer from "../components/CloudLayer";
import DecorBird from "../components/DecorBird";
const navLinks = ["How it Works", "Pricing", "Use Case", "FAQ"];
const riseMotion = {
  initial: { opacity: 0, y: "60vh" },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeInOut" },
};
const riseFadeOutMotion = {
  initial: { opacity: 1, y: "60vh" },
  animate: { opacity: 0, y: 0 },
  transition: riseMotion.transition,
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#EAF4FF] via-[#EAF4FF] to-[#D8E9FF] text-[#1D2026]">
      <div className="relative mx-auto h-[108rem] w-[192rem]">
        <div className="absolute left-[12rem] top-[4rem] flex h-[59.2rem] w-[168rem] flex-col items-center gap-[6.4rem]">
          <header className="fade-in relative z-30 flex h-[8.1rem] w-[120rem] items-center justify-between rounded-[20rem] bg-white py-[2rem] pl-[2.4rem] pr-[2rem] shadow-[0_0.1rem_0.4rem_rgba(12,12,13,0.05)]">
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
              Contact Sales
            </Button>
          </header>

        <section className="fade-in relative z-30 flex h-[44.7rem] w-full items-start justify-center text-center">
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
                <span className="relative -top-[-0.1rem]">
                  #1 iMessage Automation Tool
                </span>
              </div>

              <h1 className="text-[4rem] font-bold leading-[1.2] tracking-tight2 text-[#1D2026] sm:text-[5.2rem] lg:text-[6.4rem]">
                <span className="text-[#007AFF]">iMessage</span> Automation
                <br />
                for Teams and AI
                <br />
                <span className="inline-block mr-[0.02em]">Workf</span>
                <span className="inline-block translate-x-[-0.01em]">lows.</span>
              </h1>

              <p className="max-w-[56rem] text-[1.8rem] font-[400] leading-[1.3] tracking-tight2">
                <span className="relative -top-[-0.05rem] block">
                  Coup lets you, your team, or AI workflows send iMessages
                  directly from
                </span>
                <span className="block">
                  your phone number, running securely on your Mac or Mac Mini.
                </span>
              </p>
            </div>

            <div className="flex w-[41.4rem] items-center justify-center gap-[1.2rem]">
              <Button variant="primary" size="hero">
                Get Started
              </Button>
              <Button variant="outline" size="hero" className="py-[1.05rem]">
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
                <span className="whitespace-nowrap">Download the Mac app</span>
              </Button>
            </div>
          </div>
        </section>

          <div className="pointer-events-none absolute inset-0 z-10">
            <BgBird
              className="absolute left-[17.8rem] top-[25.1rem] h-[1.4rem] w-[4.3rem]"
              motionProps={riseMotion}
            />
            <BgBird className="absolute left-[37.5rem] top-[28.9rem] h-[1.4rem] w-[4.3rem]" />
            <BgBird
              className="absolute left-[37.5rem] top-[28.9rem] h-[1.4rem] w-[4.3rem]"
              motionProps={riseFadeOutMotion}
            />
            <BgBird
              className="absolute left-[128.6rem] top-[26.5rem] h-[1.4rem] w-[4.3rem]"
              motionProps={riseMotion}
            />
            <BgBird className="absolute left-[132.6rem] top-[42.5rem] h-[1.4rem] w-[4.3rem]" />
            <BgBird
              className="absolute left-[132.6rem] top-[42.5rem] h-[1.4rem] w-[4.3rem]"
              motionProps={riseFadeOutMotion}
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20">
          <DecorBird
            src="/decor-bird-01.svg"
            width={104}
            height={77}
            className="absolute left-[37.192rem] top-[92.539rem] h-[7.675rem] w-[10.338rem]"
            motionProps={riseMotion}
          />
          <DecorBird
            src="/decor-bird-02.svg"
            width={88}
            height={57}
            className="absolute left-[66.518rem] top-[88.1rem] h-[5.699rem] w-[8.774rem]"
            motionProps={riseMotion}
          />
          <DecorBird
            src="/decor-bird-03.svg"
            width={129}
            height={55}
            className="absolute left-[126.318rem] top-[95.6rem] h-[5.438rem] w-[12.821rem]"
            motionProps={riseMotion}
          />
          <DecorBird
            src="/decor-bird-04.svg"
            width={129}
            height={102}
            className="absolute left-[157.718rem] top-[88.2rem] h-[10.199rem] w-[12.893rem]"
            motionProps={riseMotion}
          />
          <DecorBird
            src="/anim-bird-fly-right.svg"
            width={133}
            height={74}
            className="absolute left-[-22.555rem] top-[74rem] h-[7.3744rem] w-[13.3074rem]"
            motionProps={{
              initial: { x: 0, y: 0 },
              animate: { x: "236.6rem", y: "-50rem" },
              transition: {
                duration: 3.2,
                ease: "easeIn",
                delay: 2.2,
              },
            }}
          />
          <DecorBird
            src="/anim-bird-fly-left.svg"
            width={133}
            height={74}
            className="absolute left-[197.246rem] top-[88rem] h-[7.3744rem] w-[13.3074rem]"
            motionProps={{
              initial: { x: 0, y: 0 },
              animate: { x: "-236.6rem", y: "-50rem" },
              transition: {
                duration: 3.3,
                ease: "easeIn",
                delay: 2.5,
              },
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[56rem] opacity-10">
          <CloudLayer
            src="/bg-clouds-04.svg"
            className="absolute -bottom-[12.8rem] left-0 w-full"
            motionProps={riseMotion}
          />
          <CloudLayer
            src="/bg-clouds-03.svg"
            className="absolute -bottom-[26.3rem] left-0 w-full"
            motionProps={riseMotion}
          />
          <CloudLayer
            src="/bg-clouds-02.svg"
            className="absolute -bottom-[31rem] left-0 w-full"
            motionProps={riseMotion}
          />
          <CloudLayer
            src="/bg-clouds-01.svg"
            className="absolute -bottom-[36rem] left-0 w-full"
            motionProps={riseMotion}
          />
        </div>

        <div className="fade-in pointer-events-none absolute left-[63.75rem] top-[94.694rem] z-30 flex h-[6.3rem] w-[64.5rem] flex-col items-center gap-[0.8rem] text-center text-[1.8rem] font-[500] leading-[1.3] tracking-tight2 text-[#1D2026]">
          <span className="h-[2.3rem]">Scroll to learn more</span>
          <Image
            src="/arrow-down.svg"
            alt=""
            width={32}
            height={32}
            className="h-[3.2rem] w-[3.2rem]"
          />
        </div>
      </div>
    </div>
  );
}
