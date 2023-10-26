import './../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Equal Perspectives',
  description: 'A Parallax Journey Through Gender Equity on Men',
}

export default function DiscussionForumLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
