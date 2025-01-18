import Image from "next/image";

export function Header() {
  return (
    <div className="w-full bg-[#00131e] p-6">
      <Image src="/stackline_logo.svg" alt="logo" width={100} height={100} />
    </div>
  );
}
