import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยราชภัฏนครปฐม",
  description: "เว็บไซต์สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยราชภัฏนครปฐม",
  keywords: "วิศวกรรมซอฟต์แวร์, มหาวิทยาลัยราชภัฏนครปฐม, Software Engineering, Nakhon Pathom, se npru, npru se",
  openGraph: {
    title: "สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยราชภัฏนครปฐม",
    description: "เว็บไซต์สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยราชภัฏนครปฐม",
    url: "https://yourdomain.com",
    siteName: "Software Engineering Nakhon Pathom",
    images: [{
      url: "/logo.png",
      width: 1200,
      height: 630,
      alt: "สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยราชภัฏนครปฐม",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยราชภัฏนครปฐม",
    description: "เว็บไซต์สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยราชภัฏนครปฐม",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
        <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="เว็บไซต์สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยราชภัฏนครปฐม" />
        <meta name="keywords" content="วิศวกรรมซอฟต์แวร์, มหาวิทยาลัยราชภัฏนครปฐม, Software Engineering, Nakhon Pathom, se npru, npru se" />
        <link rel="icon" type="image/png" href="/logo.png" priority="true" />
      </head>
      <body
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
