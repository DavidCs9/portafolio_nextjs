'use client'
import { Asistente } from './componentes/asistente/Asistente'
import { Inicio } from './componentes/inicio/Inicio'
import { Proyectos } from './componentes/proyectos/Proyectos'

export default function Home () {
  return (
    <>
      <Inicio />
      <Proyectos />
      <Asistente />
    </>
  )
}
