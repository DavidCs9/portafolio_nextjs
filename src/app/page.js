"use client";
import { Asistente } from "./componentes/asistente/Asistente";
import Contacto from "./componentes/contacto/Contacto";
import { Experiencia } from "./componentes/experiencia/experiencia";
import { Inicio } from "./componentes/inicio/Inicio";
import { Proyectos } from "./componentes/proyectos/Proyectos";

export default function Home() {
  return (
    <>
      <Inicio />
      <Proyectos />
      <Asistente />
      <Contacto />
    </>
  );
}
