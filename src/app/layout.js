// import Nav from '../../componentes/Nav'
import './globals.css'

export const metadata = {
  title: 'David Castro | Software developer',
  description: 'Soy un desarrollador de software mexicano, las tecnologias que utilizo son: python, javascript, react, next js.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <script defer src='https://kit.fontawesome.com/a654d59b05.js' crossorigin='anonymous' />
      </body>
    </html>
  )
}
