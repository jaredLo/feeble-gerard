import localFont from "next/font/local";

export const generalSans = localFont({
  variable: "--font-general-sans",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
