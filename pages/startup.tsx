import { HTMLAttributes } from "react";
import { SVGProps } from "react";
import dynamic from "next/dynamic";
import React from "react";

// Import ResponsiveBar dynamically and disable SSR
const ResponsiveBar = dynamic(
  () => import("@nivo/bar").then((nivo) => nivo.ResponsiveBar),
  {
    ssr: false,
  }
);

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="w-full px-4 text-center">
        <img
          alt="Northern region of Thailand"
          className="aspect-[2/1] object-cover w-full rounded-lg overflow-hidden mb-4"
          height={300}
          src="https://i.imgur.com/cSiE2hx.jpg"
          width={1200}
        />
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Invest in Sustainable Trout Fish Farming
        </h1>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Join us in revolutionizing the seafood industry and creating a
          sustainable future.
        </p>
      </section>
      <section className="w-full px-4 py-12 md:py-24 lg:py-32 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
          Why Invest With Us
        </h2>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Our approach to trout raising marries traditional knowledge with
          modern aquaculture techniques to create a synergy that not only yields
          high-quality trout but also honors and preserves the natural
          environment.
        </p>
        <div className="grid gap-6 md:grid-cols-3 items-start justify-center mt-8">
          <div className="flex flex-col items-center gap-2">
            <ScalingIcon className="h-8 w-8 text-green-500 dark:text-green-300" />
            <h3 className="text-lg font-semibold">Growing Demand</h3>
            <p className="text-gray-500 dark:text-gray-400">
              The demand for trout fish in Thailand is growing rapidly.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FishIcon className="h-8 w-8 text-blue-500 dark:text-blue-300" />
            <h3 className="text-lg font-semibold">High-Quality Produce</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We produce high-quality trout fish using sustainable farming
              practices.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CurrencyIcon className="h-8 w-8 text-yellow-500 dark:text-yellow-300" />
            <h3 className="text-lg font-semibold">Potential ROI</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Investing in our company offers a potential high return on
              investment.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-12 md:py-24 lg:py-32 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
          Our Farming Process
        </h2>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We have a meticulous farming process that ensures the health and
          quality of our trout fish.
        </p>
        <img
          alt="Farming process"
          className="aspect-[4/3] object-cover w-full rounded-lg overflow-hidden mt-8"
          height={600}
          src="https://i.imgur.com/JRiIdby.jpg"
          width={800}
        />
      </section>
      <section className="w-full px-4 py-12 md:py-24 lg:py-32 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
          Market Potential
        </h2>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          The market for trout fish in Thailand is growing rapidly, with
          increasing demand for high-quality seafood products.
        </p>
        <BarChart className="w-full aspect-[4/3] mt-8" />
      </section>
      <section className="w-full px-4 py-12 md:py-24 lg:py-32 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
          Testimonials
        </h2>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Don&apos;t just take our word for it. Hear what our satisfied
          customers and investors have to say.
        </p>
        <div className="grid gap-6 md:grid-cols-2 items-start justify-center mt-8">
          <blockquote className="p-4 border-l-4 border-blue-500 dark:border-blue-300">
            <p className="text-gray-500 dark:text-gray-400">
              &quot;The quality of the trout fish from this company is
              exceptional. I&apos;m glad I invested in them.&quot;
            </p>
            <footer className="mt-2 text-sm font-semibold">- Investor A</footer>
          </blockquote>
          <blockquote className="p-4 border-l-4 border-blue-500 dark:border-blue-300">
            <p className="text-gray-500 dark:text-gray-400">
              &quot;I&apos;ve seen a significant return on my investment. Highly
              recommend this company.&quot;
            </p>
            <footer className="mt-2 text-sm font-semibold">- Investor B</footer>
          </blockquote>
        </div>
      </section>
      <section className="w-full px-4 py-12 md:py-24 lg:py-32 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
          Ready to Invest?
        </h2>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Contact us today to learn more about investment opportunities.
        </p>
        <div className="mt-8">
          <button className="button-outline-style">Contact Us</button>
        </div>
      </section>
    </main>
  );
}

function BarChart(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          {
            name: "A",
            data: 111,
          },
          {
            name: "B",
            data: 157,
          },
          {
            name: "C",
            data: 129,
          },
          {
            name: "D",
            data: 187,
          },
          {
            name: "E",
            data: 119,
          },
          {
            name: "F",
            data: 22,
          },
          {
            name: "G",
            data: 101,
          },
          {
            name: "H",
            data: 83,
          },
        ]}
        keys={["data"]}
        indexBy="name"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Name",
          legendPosition: "middle",
          legendOffset: 45,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number",
          legendPosition: "middle",
          legendOffset: -45,
          truncateTickAt: 0,
        }}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function CurrencyIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}

function FishIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  );
}

function ScalingIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M21 3 9 15" />
      <path d="M12 3H3v18h18v-9" />
      <path d="M16 3h5v5" />
      <path d="M14 15H9v-5" />
    </svg>
  );
}
