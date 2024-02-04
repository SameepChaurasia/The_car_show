
import './globals.css'
import { Navbar } from '@/components'
import {Footer} from '@/components'

export const metadata = {
  title: 'The Car Show',
  description: 'This is the only place you need to rent or book your car easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

