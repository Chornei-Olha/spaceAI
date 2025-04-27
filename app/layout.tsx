import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
// import Script from "next/script";

export const metadata = {
  title: "Space AI",
  description:
    "Space AI — is a Web3.0 platform that combines social networks, artificial intelligence, quantitative analysis, and investment. Space AI provides a complete digital experience and innovative investment opportunities",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <Navbar />
        <div className="max-w-screen-xl mx-auto px-4 py-6">{children}</div>
        <Footer />

        {/* <Script
          strategy="afterInteractive"
          src="https://get.mycounter.ua/counter2.0.js"
        />
        <noscript>
          <a target="_blank" href="https://mycounter.ua/">
            <img
              src="https://get.mycounter.ua/counter.php?id=176849"
              title="MyCounter - лічильник і статистика"
              alt="MyCounter - лічильник і статистика"
              width="88"
              height="51"
              style={{ border: 0 }}
            />
          </a>
        </noscript> */}
      </body>
    </html>
  );
}
