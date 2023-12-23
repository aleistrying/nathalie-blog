import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Playfair_Display, Inter, Lora } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
// import themseStuff from "@/components/themeStuff";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter"
// });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-lora"
});
// const kalnia = localFont({
//   src: [
//     {
//       path: "./fonts/Kalnia-Light.ttf",
//       weight: "300",
//       style: "normal"
//     },
//     {
//       path: "./fonts/Kalnia-Regular.ttf",
//       weight: "400",
//       style: "normal"
//     },
//     {
//       path: "./fonts/Kalnia-Bold.ttf",
//       weight: "700",
//       style: "normal"
//     }
//   ]
// });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const sauce = {
    transform: `scale(${Math.floor(Math.random() * 2) + 1}) 
    rotate(${Math.floor(Math.random() * 720)}deg`,
    backgroundPosition: `${Math.floor(Math.random() * 10) + 5}% ${
      Math.floor(Math.random() * 10) + 5
    }%`,
    backgroundSize: `${Math.floor(Math.random() * 100) + 100}% ${
      Math.floor(Math.random() * 100) + 100
    }%`
  };
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={
        playfair.variable
        // cx(inter.variable, lora.variable)
      }>
      {/* //add special image background  */}

      <body className="relative text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <div className="pointer-events-none fixed left-0 top-0 z-0 h-full w-full">
          <Image
            src="/img/special-bg.jpg"
            alt="special-bg"
            className={
              "special-bg h-full w-full object-cover opacity-20"
            }
            style={sauce}
            width={1920}
            height={1080}
          />
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
