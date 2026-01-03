import Image from "next/image";

type BgBirdProps = {
  className?: string;
};

export default function BgBird({ className }: BgBirdProps) {
  return (
    <Image
      src="/bg-bird.svg"
      alt=""
      width={42}
      height={14}
      className={className}
      aria-hidden="true"
    />
  );
}
