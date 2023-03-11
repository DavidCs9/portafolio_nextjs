'use client'

import { Chat } from '../../componentes/Chat'
import Nav from '../../componentes/Nav'

export default function AsistentePage () {
  return (
    <>
      <Nav />
      <div className=' bg-black text-white'>
        <Chat />
      </div>
    </>
  )
}
