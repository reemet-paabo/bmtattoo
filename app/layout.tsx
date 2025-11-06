import type { Metadata } from "next";

/**
 * UI Components CSR 
 * __root/app/components/ || ./components/
 */
import Header from "./components/Header";

/**
 * Global Stylesheet
 */
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloody Mess Tattoo Studio",
  description: "Actually Dick Squid Tattoo, But if owner doesn't care, why should you?."
}

export default function RootLayout({ 
  children,
}: Readonly <{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="antialiased">
          <Header />
          {children}
      </body>
    </html>
  )
}