import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Artisanal Cheese
          </h1>
          <p className="max-w-2xl text-gray-500 dark:text-gray-400">
            Our cheese is made from raw unpasteurized milk without the addition
            of artificial citric acid, calcium chloride, or artificial rennet,
            which can cause intestinal problems. Explore our four unique
            varieties.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>

            <Image
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              src="https://i.imgur.com/Opr5HW2.png"
              alt="Description"
              width={200}
              height={200}
              layout="responsive"
            />

            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">Chevre in ashes</h3>
              <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                Aged for 12 months, our Cheddar has a rich, nutty flavor with a
                smooth, firm texture.
              </p>
            </div>
          </div>
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              src="https://i.imgur.com/ak7uKJB.png"
              alt="Description"
              width={200}
              height={200}
              layout="responsive"
            />
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">
                Classic Creamy Chevre
              </h3>
              <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                Our Gouda is a mild, yellow cheese with a slightly sweet, nutty
                flavor that grows more complex with age.
              </p>
            </div>
          </div>
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              src="https://i.imgur.com/6ZAEXyg.png"
              alt="Description"
              width={200}
              height={200}
              layout="responsive"
            />
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">
                Raw Goat Cheese - Brie
              </h3>
              <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                Brie is a soft cheese with a creamy, buttery flavor and a
                smooth, velvety texture.
              </p>
            </div>
          </div>
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              src="https://i.imgur.com/yqNzunT.png"
              alt="Description"
              width={200}
              height={200}
              layout="responsive"
            />
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">Chevre in Black</h3>
              <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                Camembert is a soft, creamy cheese with a bloomy rind, usually
                made from cow&apos;s milk.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold">Try Our Cheese</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          This is currently a demo version. If you&apos;re interested in trying
          out our delicious cheese, you can make a request for samples.
        </p>
        <Link
          href="#"
          className="mt-4 px-12 inline-block bg-primary-500 text-black py-2 rounded-md shadow-lg hover:bg-primary-700 transition"
        >
          Request Cheese
        </Link>
      </div>
    </section>
  );
}
