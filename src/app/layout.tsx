import "./globals.css";
import { generalSans } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={generalSans.variable}>
      <body>{children}</body>
    </html>
  );
}
