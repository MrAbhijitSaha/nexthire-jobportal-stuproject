import ThemeProvider from "@/components/Providers/ThemeProvider";
import { geistMono, geistSans } from "@/lib/fonts";
import { LayoutChildrenProps } from "@/lib/types";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextHire | Find Jobs, Hire Talent & Grow Your Career",
  description:
    "NextHire is a modern job portal where job seekers discover opportunities and employers find the right talent. Browse jobs, apply instantly, and build your future with NextHire.",
};

const RootLayout = ({ children }: LayoutChildrenProps) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
