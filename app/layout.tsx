import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark,shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Showtime",
  description: "Movie booking app, but better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
      variables: {
        colorPrimary: "#3371FF",
        fontSize: "16px",
      }
    }
    }>

    <html lang="en">
      <body className={`${inter.className} dark min-h-screen min-w-screen`}>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
