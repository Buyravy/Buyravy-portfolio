import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buyravy Paheerathan - QA Engineer Portfolio',
  description: 'Detail-oriented Software QA Engineer with expertise in manual testing, test case design, and quality assurance. Specialized in web and mobile testing with Agile methodologies.',
  keywords: ['QA Engineer', 'Software Testing', 'Manual Testing', 'Test Automation', 'Quality Assurance'],
  openGraph: {
    title: 'Buyravy Paheerathan - QA Engineer Portfolio',
    description: 'Software Quality Assurance Engineer specializing in web and mobile testing',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buyravy Paheerathan - QA Engineer',
    description: 'Software Quality Assurance Engineer with expertise in testing methodologies',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-dark-gradient text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
