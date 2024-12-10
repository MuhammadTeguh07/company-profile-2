import './globals.css'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

import { Inter } from 'next/font/google'
import Particles from "@/components/particles";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammad Teguh',
  description: 'Personal Portfolio',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
      <Particles
          className="fixed inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        {children}
        </body>
    </html>
  )
}
