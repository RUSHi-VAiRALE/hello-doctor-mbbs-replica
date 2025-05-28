import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BotpressBot from '@/components/BotpressBot'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clatians - Best CLAT Coaching Institutes in Patna',
  description: 'Expert guidance for CLAT, AILET, CUET, AIL, and other law entrance exams',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Reddit+Sans:wght@200..900&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css" rel="stylesheet" />
        <link rel="icon" href="https://clatwallah.netlify.app/images/logo.png" type="image/png" />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <BotpressBot />
      </body>
    </html>
  )
}
