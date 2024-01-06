import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <section key="1" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <header className="flex items-center justify-between px-4 md:px-6 h-14">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6 text-green-500" />
          <span className="sr-only">Sustainable Green Gold</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#our-products"
          >
            Products
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/startup"
          >
            TroutTech
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about-us"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
          href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Welcome to Our Store
                </h1>
                <p className="text-lg leading-relaxed">
                  We offer a variety of products including cheese, soap, organic
                  pesticides, and aquaponic starters.
                </p>
              </div>
              <div>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert bg-gray-100 pl-28 pr-32 pt-28 pb-28 rounded-lg"
                  src="/logo-gg.svg"
                  alt="sgg logo"
                  width={480}
                  height={67}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section id="our-products" className="w-full py-12 md:py-24 lg:py-32 mx-auto flex justify-center items-center">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Products
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Our Range
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a variety of products to cater to all your needs.
                  Let&apos;s explore them.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Cheese</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our cheese is made from the finest milk, sourced from local
                  farms.
                </p>
                <img
                  alt="Cheese Image"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="https://i.imgur.com/Opr5HW2.png"
                  width="200"
                />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Soap</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our soaps are made from natural ingredients and are free from
                  harmful chemicals.
                </p>
                <img
                  alt="Soap Image"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="https://i.imgur.com/V9gjKHh.jpg"
                  width="200"
                />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Organic Pesticides</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our organic pesticides are safe for your plants and the
                  environment.
                </p>
                <img
                  alt="Pesticides Image"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="https://i.imgur.com/xpI4zN9.png"
                  width="200"
                />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Aquaponic Starters</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Start your own aquaponic garden with our easy-to-use starters.
                </p>
                <img
                  alt="Aquaponic Starters Image"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="https://i.imgur.com/GburyJJ.png"
                  width="200"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about-us" className="w-full py-12 md:py-24 lg:py-32 mx-auto flex justify-center items-center bg-gray-100">
          <div className="container space-y-12 px-4 md:px-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Our Mission
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our mission is to provide high-quality, sustainable products
                that are good for you and the environment.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © Company Name. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </section>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
