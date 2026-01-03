import Image from "next/image";
const navLinks = ["How it Works", "Pricing", "Use Case", "FAQ"];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#EAF4FF] via-[#EAF4FF] to-[#D8E9FF] text-[#1D2026]">
      <div className="relative mx-auto h-[108rem] w-[192rem]">
        <div className="absolute left-[12rem] top-[4rem] flex h-[59.2rem] w-[168rem] flex-col items-center gap-[6.4rem]">
          <header className="relative z-30 flex h-[8.1rem] w-[120rem] items-center justify-between rounded-[20rem] bg-white py-[2rem] pl-[2.4rem] pr-[2rem] shadow-[0_0.1rem_0.4rem_rgba(12,12,13,0.05)]">
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
            <button className="inline-flex items-center gap-[0.698rem] rounded-[4.362rem] bg-[#007AFF] px-[1.8rem] py-[1.1rem] text-[1.6rem] font-[500] leading-[1.9rem] tracking-tight2 text-white">
              Contact Sales
            </button>
          </header>

        <section className="relative z-30 flex h-[44.7rem] w-full items-start justify-center text-center">
          <div className="flex w-[73.6rem] flex-col items-center gap-[4.8rem]">
            <div className="flex w-full flex-col items-center gap-[2.4rem]">
              <div className="inline-flex h-[2.8rem] items-center gap-2 rounded-[20rem] bg-white px-4 py-1 text-[1.6rem] font-[500] leading-[1.2] tracking-tight2 text-[#006FE8] shadow-[0_0.1rem_0.4rem_rgba(12,12,13,0.05)]">
                <Image
                  src="/icon-ellipsis.svg"
                  alt=""
                  width={32}
                  height={17}
                  className="h-[1.7rem] w-[3.2rem]"
                />
                <span>#1 iMessage Automation Tool</span>
              </div>

              <h1 className="text-[4rem] font-bold leading-[1.2] tracking-tight2 text-[#1D2026] sm:text-[5.2rem] lg:text-[6.4rem]">
                <span className="text-[#007AFF]">iMessage</span> Automation
                <br />
                for Teams and AI
                <br />
                Workflows.
              </h1>

              <p className="max-w-[56rem] text-[1.8rem] font-[400] leading-[1.3] tracking-tight2">
                Coup lets you, your team, or AI workflows send iMessages directly
                from your phone number, running securely on your Mac or Mac Mini.
              </p>
            </div>

            <div className="flex w-[41.4rem] items-center justify-center gap-[1.2rem]">
              <button className="rounded-[5rem] bg-[#007AFF] px-[2rem] py-[1.15rem] text-[1.8rem] font-[500] leading-[1.2] tracking-tight2 text-white">
                Get Started
              </button>
              <button className="inline-flex w-[26.6rem] items-center justify-center gap-[1.2rem] rounded-[5rem] border-[0.07rem] border-[#6C788F] px-[2rem] py-[1.15rem] text-[1.8rem] font-[500] leading-[1.2] tracking-tight2 text-[#1D2026]">
                <Image
                  src="/icon-apple.svg"
                  alt=""
                  width={18}
                  height={22}
                  className="h-[2.2rem] w-[1.843rem] shrink-0"
                />
                <span
                  className="inline-block h-[1.8rem] w-[0.05rem] shrink-0 bg-[#6C788F]"
                  aria-hidden="true"
                />
                <span className="whitespace-nowrap">Download the Mac app</span>
              </button>
            </div>
          </div>
        </section>

          <div className="pointer-events-none absolute inset-0 z-10">
            <Image
              src="/bg-bird.svg"
              alt=""
              width={42}
              height={14}
              className="absolute left-[17.8rem] top-[25rem] h-[1.4rem] w-[4.3rem]"
              aria-hidden="true"
            />
            <Image
              src="/bg-bird.svg"
              alt=""
              width={42}
              height={14}
              className="absolute left-[37.5rem] top-[28.8rem] h-[1.4rem] w-[4.3rem]"
              aria-hidden="true"
            />
            <Image
              src="/bg-bird.svg"
              alt=""
              width={42}
              height={14}
              className="absolute left-[128.5rem] top-[26.5rem] h-[1.4rem] w-[4.3rem]"
              aria-hidden="true"
            />
            <Image
              src="/bg-bird.svg"
              alt=""
              width={42}
              height={14}
              className="absolute left-[132.4rem] top-[42.5rem] h-[1.4rem] w-[4.3rem]"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20">
          <Image
            src="/decor-bird-01.svg"
            alt=""
            width={104}
            height={77}
            className="absolute left-[37.192rem] top-[92.539rem] h-[7.675rem] w-[10.338rem]"
            aria-hidden="true"
          />
          <Image
            src="/decor-bird-02.svg"
            alt=""
            width={88}
            height={57}
            className="absolute left-[66.518rem] top-[88.1rem] h-[5.699rem] w-[8.774rem]"
            aria-hidden="true"
          />
          <Image
            src="/decor-bird-03.svg"
            alt=""
            width={129}
            height={55}
            className="absolute left-[126.318rem] top-[95.6rem] h-[5.438rem] w-[12.821rem]"
            aria-hidden="true"
          />
          <Image
            src="/decor-bird-04.svg"
            alt=""
            width={129}
            height={102}
            className="absolute left-[157.718rem] top-[88.2rem] h-[10.199rem] w-[12.893rem]"
            aria-hidden="true"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[56rem] opacity-10">
          <img
            src="/bg-clouds-04.svg"
            alt=""
            className="absolute -bottom-[12.8rem] left-0 w-full"
          />
          <img
            src="/bg-clouds-03.svg"
            alt=""
            className="absolute -bottom-[26.3rem] left-0 w-full"
          />
          <img
            src="/bg-clouds-02.svg"
            alt=""
            className="absolute -bottom-[31rem] left-0 w-full"
          />
          <img
            src="/bg-clouds-01.svg"
            alt=""
            className="absolute -bottom-[36rem] left-0 w-full"
          />
        </div>

        <div className="pointer-events-none absolute left-[63.75rem] top-[94.694rem] z-30 flex h-[6.3rem] w-[64.5rem] flex-col items-center gap-[0.8rem] text-center text-[1.8rem] font-[500] leading-[1.3] tracking-tight2 text-[#1D2026]">
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
