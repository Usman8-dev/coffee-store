import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import Image from "next/image";

export default function Home() {
  const coffeeStores = [
    {
      id: 1,
      name: "Dark Coffee",
      imgUrl: "/static/hero-image.png",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 w-full min-h-screen">
      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 pt-1">
          {/* Left Content */}
          <div className="flex-1">
            <Banner />
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/static/he.png"
              alt="Coffee Banner"
              width={450}
              height={400}
              priority
              loading="eager"
              className="
                w-full
                max-w-md
                lg:max-w-xl
                object-contain
                drop-shadow-2xl
              "
            />
          </div>
        </section>

        {/* Coffee Store Cards */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-white mb-10">Islamabad Stores</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              name="Flat White"
              imgUrl="/static/hero-image.png"
              href="/coffee-store/1"
            />
            <Card
              name="Espresso"
              imgUrl="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
              href="/coffee-store/1"
            />
            <Card
              name="Americano "
              imgUrl="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
              href="/coffee-store/1"
            />
            <Card
              name="Cappuccino "
              imgUrl="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
              href="/coffee-store/1"
            />
            <Card
              name="Latte "
              imgUrl="https://images.unsplash.com/photo-1562447457-579fc34967fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
              href="/coffee-store/1"
            />
            <Card
              name="Macchiato "
              imgUrl="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
              href="/coffee-store/1"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
