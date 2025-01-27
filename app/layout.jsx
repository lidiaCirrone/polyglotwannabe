import '@/styles/globals.css'
import { Providers } from './providers'

// styles
import { nunito } from "@/styles/font";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      <div id="modal-root" />
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  )
}