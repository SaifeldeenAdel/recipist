import './globals.css'
import { Raleway, Montserrat, Caveat } from 'next/font/google'
import "flowbite"
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["variable"],
  variable: "--montserrat"
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["variable"],
  variable: "--raleway"
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["variable"],
  variable: "--caveat"
})

export const metadata = {
  title: 'Recipist'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${raleway.variable} ${caveat.variable}`}>{children}</body>
    </html>
  )
}
