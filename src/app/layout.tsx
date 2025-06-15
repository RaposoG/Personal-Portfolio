import type { Metadata } from "next";
import "./globals.css";
import { Edu_NSW_ACT_Foundation, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

const edu_nsw_act_hand = Edu_NSW_ACT_Foundation({
  subsets: ["latin"],
  variable: "--font-edu-nsw-act-hand",
});

export const metadata: Metadata = {
  title: "Raposo Dev",
  description: "Personal portfolio of Raposo Dev",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={`${locale}`}>
      <body className={`${edu_nsw_act_hand.variable} antialiased font-sans`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
