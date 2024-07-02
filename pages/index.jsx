// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import '@fontsource/inter/400.css'; // Assumes you use fontsource for fonts
import '@fontsource/inter/700.css'; // Adjust weights as needed
import '/home/runner/work/react_ui/react_ui/styles/globals.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
