import type { Metadata } from "next";

import { Sidebar } from "./components/Sidebar";

export default function IndexPage() {
  return (
    <div className="w-full flex bg-gray-100 p-6">
      <Sidebar />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Dashboard",
};
