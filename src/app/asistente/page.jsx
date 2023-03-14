'use client'

import { Chat } from '../componentes/Chat'
import Nav from '../componentes/Nav'

export default function AsistentePage () {
  return (
    <>
      <Nav />
      <div className=' text-white p-5'>
        <Chat />
      </div>
    </>
  )
}
