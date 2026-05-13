import Banner from "@/components/banner.client";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="bg-linear-to-r/hsl from-indigo-500 to-teal-400 w-full h-screen">
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full h-screen">
            <main className="p-15 min-h-screen flex items-start justify-start">
        <Banner />
      </main>
    </div>
  );
}
