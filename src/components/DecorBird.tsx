import Image from "next/image";

type DecorBirdProps = {
  src: string;
  className?: string;
};

export default function DecorBird({ src, className }: DecorBirdProps) {
  return (
    <Image
      src={src}
      alt=""
      width={129}
      height={102}
      className={className}
      aria-hidden="true"
    />
  );
}
