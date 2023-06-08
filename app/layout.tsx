import './globals.css'
import { Nunito } from 'next/font/google'
import Header from './components/header/Header'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'кофе +',
  description: 'Всё о кофе',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
<Header/>
      {children}
      </body>
    </html>
  )
}
