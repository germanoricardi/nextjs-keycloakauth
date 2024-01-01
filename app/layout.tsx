import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from '@/src/context/AuthProvider';
import { getServerSession } from 'next-auth/next';
import { authOptionsConfig } from '../src/lib/auth'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keycloak Auth',
  description: 'Integração de NextJS com Keycloak',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptionsConfig)

  return (
    <html lang="pt-br">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>
        <AuthProvider session={session}>
          {children}
          </AuthProvider>
          </body>
    </html>
  )
}
