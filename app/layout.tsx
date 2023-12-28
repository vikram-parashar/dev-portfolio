import "@/global.css";

export const metadata = {
  title: 'Vikram Parashar',
  description: 'Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
