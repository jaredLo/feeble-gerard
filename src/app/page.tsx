import Image from "next/image";

const navLinks = ["How it Works", "Pricing", "Use Case", "FAQ"];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#EAF4FF] via-[#EAF4FF] to-[#D8E9FF] text-[#1D2026]">
      <header className="relative z-30 mx-auto mt-[40px] flex h-[81px] w-[1200px] items-center justify-between rounded-[200px] bg-white py-[20px] pl-[24px] pr-[20px] shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
        <div className="flex items-center gap-2">
          <Image src="/icon-coup.svg" alt="Coup" width={107} height={34} />
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-4 text-[16px] font-[500] text-[#8C97A8]">
            {navLinks.map((item) => (
              <li key={item} className="flex items-center gap-2 px-3 py-2">
                <a
                  href="#"
                  className="leading-[22px] transition-colors hover:text-[#1D2026]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="inline-flex items-center gap-[6.98px] rounded-[43.62px] bg-[#007AFF] px-[18px] py-[11px] text-[16px] font-[500] leading-[19px] tracking-tight2 text-white">
          Contact Sales
        </button>
      </header>

      <main className="relative z-30 mx-auto flex w-[min(100%-2rem,880px)] flex-col items-center pb-[420px] pt-[64px] text-center sm:pt-[64px]">
        <div className="inline-flex h-[28px] items-center gap-2 rounded-[200px] bg-white px-2 py-1 text-[16px] font-[500] leading-[1.2] tracking-tight2 text-[#006FE8] shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
          <Image src="/icon-ellipsis.svg" alt="" width={32} height={17} />
          <span>#1 iMessage Automation Tool</span>
        </div>

        <h1 className="mt-[41px] text-[40px] font-bold leading-[1.2] tracking-tight2 text-[#1D2026] sm:text-[52px] lg:text-[64px]">
          <span className="text-[#007AFF]">iMessage</span> Automation
          <br />
          for Teams and AI
          <br />
          Workflows.
        </h1>

        <p className="mt-[43px] max-w-[560px] text-[18px] font-[400] leading-[1.3] tracking-tight2 text-[#1D2026]/75">
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>

        <div className="mt-[53px] flex w-[414px] flex-col items-center gap-[12px] sm:flex-row">
          <button className="rounded-[50px] bg-[#007AFF] px-[20px] py-[12px] text-[18px] font-[500] leading-[1.2] tracking-tight2 text-white shadow-[0_8px_16px_rgba(0,122,255,0.3)]">
            Get Started
          </button>
          <button className="inline-flex w-[266px] items-center justify-center gap-[12px] rounded-[50px] border-[0.7px] border-[#6C788F] bg-white px-[20px] py-[12px] text-[18px] font-[500] leading-[1.2] tracking-tight2 text-[#1D2026] shadow-[0_6px_16px_rgba(15,23,42,0.06)]">
            <Image
              src="/icon-apple.svg"
              alt=""
              width={18}
              height={22}
              className="h-[22px] w-[18.43px] shrink-0"
            />
            <span
              className="inline-block h-[18px] w-[0.5px] shrink-0 bg-[#6C788F]"
              aria-hidden="true"
            />
            <span className="whitespace-nowrap">Download the Mac app</span>
          </button>
        </div>
      </main>

      <div className="pointer-events-none absolute inset-0 z-10">
        <Image
          src="/bg-bird.svg"
          alt=""
          width={43}
          height={14}
          className="absolute left-[10%] top-[38%] w-10 opacity-80"
          aria-hidden="true"
        />
        <Image
          src="/bg-bird.svg"
          alt=""
          width={43}
          height={14}
          className="absolute left-[20%] top-[46%] w-8 opacity-70"
          aria-hidden="true"
        />
        <Image
          src="/bg-bird.svg"
          alt=""
          width={43}
          height={14}
          className="absolute right-[18%] top-[40%] w-10 opacity-80"
          aria-hidden="true"
        />
        <Image
          src="/bg-bird.svg"
          alt=""
          width={43}
          height={14}
          className="absolute right-[28%] top-[54%] w-9 opacity-70"
          aria-hidden="true"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        <Image
          src="/decor-bird-01.svg"
          alt=""
          width={104}
          height={77}
          className="absolute bottom-[140px] left-[10%] w-24"
          aria-hidden="true"
        />
        <Image
          src="/decor-bird-02.svg"
          alt=""
          width={88}
          height={57}
          className="absolute bottom-[200px] left-[36%] w-20"
          aria-hidden="true"
        />
        <Image
          src="/decor-bird-03.svg"
          alt=""
          width={129}
          height={55}
          className="absolute bottom-[150px] right-[26%] w-28"
          aria-hidden="true"
        />
        <Image
          src="/decor-bird-04.svg"
          alt=""
          width={129}
          height={102}
          className="absolute bottom-[150px] right-[6%] w-28"
          aria-hidden="true"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[560px]">
        <img
          src="/bg-clouds-04.svg"
          alt=""
          className="absolute bottom-0 left-0 w-full"
        />
        <img
          src="/bg-clouds-03.svg"
          alt=""
          className="absolute bottom-0 left-0 w-full"
        />
        <img
          src="/bg-clouds-02.svg"
          alt=""
          className="absolute bottom-0 left-0 w-full"
        />
        <img
          src="/bg-clouds-01.svg"
          alt=""
          className="absolute bottom-0 left-0 w-full"
        />
      </div>

      <div className="pointer-events-none absolute bottom-[27px] left-1/2 z-30 flex w-[645px] -translate-x-1/2 flex-col items-center text-center text-[18px] font-[500] leading-[1.3] tracking-tight2 text-[#1D2026]">
        <span className="h-[23px]">Scroll to learn more</span>
        <div className="mt-[17px]">
          <Image src="/arrow-down.svg" alt="" width={32} height={32} />
        </div>
      </div>
    </div>
  );
}
