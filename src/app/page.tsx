import Image from "next/image";

const navLinks = ["How it Works", "Pricing", "Use Case", "FAQ"];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#EAF4FF] via-[#EAF4FF] to-[#D8E9FF] text-[#1D2026]">
      <header className="relative z-30 mx-auto mt-8 flex w-[min(100%-2rem,1040px)] items-center justify-between rounded-full bg-white/90 px-6 py-3 shadow-[0_14px_30px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="flex items-center gap-2">
          <Image src="/icon-coup.svg" alt="Coup" width={90} height={28} />
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#7B8694] md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors hover:text-[#1D2026]"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="rounded-full bg-[#007AFF] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_16px_rgba(0,122,255,0.3)]">
          Contact Sales
        </button>
      </header>

      <main className="relative z-30 mx-auto flex w-[min(100%-2rem,880px)] flex-col items-center pb-[420px] pt-16 text-center sm:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#007AFF] shadow-[0_6px_16px_rgba(15,23,42,0.08)]">
          <Image src="/icon-ellipsis.svg" alt="" width={32} height={17} />
          <span>#1 iMessage Automation Tool</span>
        </div>

        <h1 className="mt-6 text-[40px] font-bold leading-[1.2] tracking-tight2 text-[#1D2026] sm:text-[52px] lg:text-[64px]">
          <span className="text-[#007AFF]">iMessage</span> Automation
          <br />
          for Teams and AI
          <br />
          Workflows.
        </h1>

        <p className="mt-4 max-w-[560px] text-sm text-[#1D2026]/75 sm:text-base">
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button className="rounded-full bg-[#007AFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_16px_rgba(0,122,255,0.3)]">
            Get Started
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-[#1D2026]/20 bg-white px-5 py-3 text-sm font-semibold text-[#1D2026] shadow-[0_6px_16px_rgba(15,23,42,0.06)]">
            <Image src="/icon-apple.svg" alt="" width={16} height={18} />
            Download the Mac app
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

      <div className="pointer-events-none absolute bottom-[220px] left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-[#1D2026]">
        <span>Scroll to learn more</span>
        <Image src="/arrow-down.svg" alt="" width={20} height={20} />
      </div>
    </div>
  );
}
