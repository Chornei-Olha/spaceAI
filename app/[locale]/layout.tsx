import Navbar from "@/components/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Space AI",
  description:
    "Space AI — is a Web3.0 platform that combines social networks, artificial intelligence, quantitative analysis, and investment. Space AI provides a complete digital experience and innovative investment opportunities",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          <div className="max-w-screen-xl mx-auto px-4 py-6">{children}</div>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
