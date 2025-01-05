import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Moveout Sale',
  description: 'Find great deals on furniture and more!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <header className="bg-card shadow-md">
            <nav className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
              <h1 className="text-2xl font-bold mb-2 sm:mb-0">Moveout Sale / Giveaways</h1>
              <div className="space-x-4">
                <Link href="/" className="text-primary hover:text-primary/80">Home</Link>
                <Link href="/about" className="text-primary hover:text-primary/80">About</Link>
              </div>
            </nav>
          </header>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

