import Image from "next/image";
import { useSelector } from "react-redux";

import { RootState } from "@/lib/store";
import { Container } from "./Container";

export function Sidebar() {
  const product = useSelector((state: RootState) => state.product);

  if (!product) return null;

  return (
    <Container className="w-1/4 h-screen">
      <SidebarItem />
      <SidebarDetails />
    </Container>
  );
}

function SidebarItem() {
  const product = useSelector((state: RootState) => state.product);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <Image
        src={product.image}
        alt="logo"
        width={160}
        height={160}
        className="rounded-xl"
      />
      <div className="text-center">
        <h1 className="text-lg font-bold">{product.title}</h1>
        <div className="text-center mt-1">
          <p className="max-w-[250px] text-sm text-gray-400">
            {product.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function SidebarDetails() {
  const tags = useSelector((state: RootState) => state.product.tags);

  return (
    <div className="p-4 border-y border-gray-200">
      <div className="flex items-center flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </div>
  );
}

function Tag(props: { text: string }) {
  return (
    <div className="bg-white rounded border border-gray-200 px-4 py-1 text-sm text-gray-500">
      {props.text}
    </div>
  );
}
