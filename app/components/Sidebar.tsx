import Image from "next/image";

const tags: string[] = ["Pantry", "Obsolete", "Blender", "Lightning Deal"];

export function Sidebar() {
  return (
    <div className="w-1/4 h-screen bg-white shadow-lg">
      <SidebarItem />
      <SidebarDetails />
    </div>
  );
}

function SidebarItem() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <Image
        src="/nutribullet.webp"
        alt="logo"
        width={200}
        height={200}
        className="rounded-xl"
      />
      <div className="text-center">
        <h1 className="text-xl font-bold">Shark Ninja</h1>
        <div className="text-center mt-2">
          <p className="text-sm text-gray-400">
            Magic Bullet NutriBullet 12-Piece
          </p>
          <p className="text-sm text-gray-400">
            High-Speed Blender/Mixer System
          </p>
        </div>
      </div>
    </div>
  );
}

function SidebarDetails() {
  return (
    <div className="p-6 border-y border-gray-200">
      <div className="flex items-center flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag text={tag} />
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
