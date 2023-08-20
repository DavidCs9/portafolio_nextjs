/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
import { motion } from "framer-motion";

export function Experiencia() {
  return (
    <motion.section
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.2 }}
      className=" p-3  m-auto"
    >
      <h1 className=" text-3xl text-white text-center">EXPERIENCIA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border border-red-400">
        <div className=" text-white pt-6 text-left">
          <p className=" text-xl text-center text-slate-400">Interceramic</p>
          <p className=" text-center text-cyan-600">
            Desarrollador de software
          </p>
          <p className="pt-4 lg:text-center  text-gray-400 text-sm">
            Responsabilidades
          </p>
          <motion.ul
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }}
            className=" mb-3 text-sm w-9/12 mx-auto pt-1  lg:pt-2"
          >
            <motion.li className="mb-2">
              Creación y mantenimiento de objetos en base de datos ORACLE con
              PL/SQL
            </motion.li>
            <motion.li className="mb-2">
              Creación y mantenimiento de servicios web
            </motion.li>
            <motion.li>
              Investigación para mejoras en procesos enfocados en TI
            </motion.li>
          </motion.ul>
        </div>
        <div className=" text-white pt-6 text-left">
          <p className=" text-2xl text-center text-slate-400">MARCOS DACAR</p>
          <p className=" text-2xl text-center text-cyan-200">
            Desarrollador web
          </p>
          <p className=" text-center text-md pt-4 lg:text-center lg:text-2xl text-cyan-500">
            Responsabilidades
          </p>
          <motion.ul
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }}
            className=" mb-3 text-center text-sm w-9/12 mx-auto pt-1 lg:text-xl lg:pt-2"
          >
            <motion.li className="mb-2">
              Creación y mantenimiento de pagina web
            </motion.li>
            <motion.li className="mb-2">
              Indexación de pagina a motores de busqueda
            </motion.li>
            <motion.li>Puntuacion de 100 en performance y SEO</motion.li>
          </motion.ul>
        </div>
        <div className=" text-white pt-6 text-left">
          <p className=" text-2xl text-center text-slate-400">INTERCERAMIC</p>
          <p className=" text-2xl text-center text-cyan-200">
            Desarrollador de software
          </p>
          <p className=" text-center text-md pt-4 lg:text-center lg:text-2xl text-cyan-500">
            Responsabilidades
          </p>
          <motion.ul
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }}
            className=" mb-3 text-center text-sm w-9/12 mx-auto pt-1 lg:text-xl lg:pt-2"
          >
            <motion.li className="mb-2">
              Creación y mantenimiento de objetos en base de datos ORACLE con
              PL/SQL
            </motion.li>
            <motion.li className="mb-2">
              Creación y mantenimiento de servicios web
            </motion.li>
            <motion.li>
              Investigación para mejoras en procesos enfocados en TI
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
}
