import './globals.css'
import { Montserrat } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  weight: '300',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'David Castro | Software developer',
  description: 'Soy un desarrollador de software mexicano, las tecnologias que utilizo son: python, javascript, react, next js.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className={montserrat.className}>
      <body className='bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r'>
        {children}
        <script defer src='https://kit.fontawesome.com/a654d59b05.js' crossorigin='anonymous' />
      </body>
    </html>
  )
}
