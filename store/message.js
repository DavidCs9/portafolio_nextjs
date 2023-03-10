import { create } from 'zustand'

export const useMessageStore = create((set, get) => ({
  messages: [],
  error: null,
  deleteMessages: () => set({ messages: [] }),

  sendPrompt: async ({ userPrompt }) => {
    const messageIAid = get().messages.length + 1

    // actualizar el estados de los mensajes con el mensaje del usuario
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: state.messages.length,
          ia: false,
          message: userPrompt
        },
        {
          id: state.messages.length + 1,
          ia: true,
          message: '',
          loading: true
        }
      ]
    }))

    // fetching de datos
    try {
      const response = await fetch('/api/hello/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [{
            role: 'system', content: `Eres un asistente que responde a preguntas acerca de mi.
          La información con la que responderas es la siguiente:
          Mi nombre es David Eduardo Castro Siquieros. Tengo 23 años. Nací en Chihuahua México. Soy egresado de la carrera ingeniería mecatrónica. Estudie mi cartera en la universidad La Salle Chihuahua. Los lenguajes de programación que más domino son python y Javascript. También estoy aprendiendo react y nextjs. Tengo un certificado c2 en inglés y mi lenguaje nativo es el español. Mis colores favoritos son el negro y morado. Mi trabajo actual es como asistente general en DACAR, tengo desde 2018 trabajando ahi. Mis pasatiempos son practicar futbol, ver deportes, jugar videojuegos, salir con mis amigos, ver series y peliculas. Mi musica favorita es el rock, rap y regional mexicano. 
          
          Solo contestarás cuando pregunten por está información. Esta estrictamente prohibido contestar preguntas en las cuales no tengas la informacion. `
          },
          { role: 'user', content: 'Donde estudio David?' }]
        })
      })
      const json = await response.json()

      set(state => ({
        messages: state.messages.map(entry => {
          if (entry.id === messageIAid) {
            return {
              ...entry,
              message: json.response,
              loading: false
            }
          }
          return entry
        })
      }))

      //  Actualizar el mesnasje de la IA que esta vacio con el texto completo
    } catch (error) {
      console.error(error)
    }
  }
}))
