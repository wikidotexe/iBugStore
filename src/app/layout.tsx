import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://ibugstore.vercel.app"),
  title: "iBugStore - iPhone Impian Anda Harga Terjangkau",
  description: "Jual beli iPhone bekas dan baru dengan garansi terpercaya.",
  icons: {
    icon: "/logo/IbugStore.png",
  },
  openGraph: {
    title: "iBugStore - iPhone Impian Anda Harga Terjangkau",
    description: "Jual beli iPhone bekas dan baru dengan garansi terpercaya.",
    url: "https://ibugstore.vercel.app",
    siteName: "iBugStore",
    images: [
      {
        url: "/logo/IbugStore.png", // Fallback image if no specific OG image
        width: 800,
        height: 600,
        alt: "iBugStore Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iBugStore - iPhone Impian Anda Harga Terjangkau",
    description: "Jual beli iPhone bekas dan baru dengan garansi terpercaya.",
    images: ["/logo/IbugStore.png"],
  },
};

// ... previous code

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
