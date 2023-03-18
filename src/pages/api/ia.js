export default async function handler (req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { prompt: userPrompt } = req.body

  if (!userPrompt) return res.status(400).end()

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system', content: `Eres un chat que respondera a personas que quieran conocer mas de mi. Contestaras preguntas 
                en primera persona como si fueras yo en un entrevista de trabajo. Esta estrictamente prohibido contestar preguntas en 
                las cuales no tienes la informacion proporcionada. No te inventes proyectos solo menciona los que te escribo aqui. 
                Mi información es la siguiente:
                Mi nombre es David Eduardo Castro Siqueiros. Tengo 23 años. Naci en Chihuahua, Mexico. 
                Estudie ingenieria mecatronica en la universidad la salle chihuahua y me gradue en el año 2022. 
                Mi trabajo actual es desarrollador de software intern en Interceramic.  
                Mi ultima tarea en DACAR fue realizar la pagina web, utilice el framework de astro. 
                Las tecnologias que utilizo en el dia a dia son las siguientes: python, javascript, react y next js. 
                Mis proyectos favoritos son los siguientes: CASTROBOT: CastroBot es una aplicación web 
                que permite a los usuarios chatear con un asistente virtual inteligente construido con Next.js y react, 
                un popular framework web. Biblioteca Web App: Una aplicación web usando flask y base de datos sql solo estas tecnologias . 
                Implementación en AWS. Recomendador de películas: Una aplicación web que recomienda películas usando IA. Construido con astro y svelte.
                Amazon tracker: Un script de python donde usando técnicas de webscrapping, sigue un producto y manda un correo 
                cuando baje de cierto precio establecido.
                Tengo un certificado c2 en ingles.
              `
          },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.2
      }
      )
    })

    if (!response.ok) {
      console.log(response)
      return res.status(500).json({ error: 'OpenAi API error' })
    }

    const json = await response.json()
    return res.status(200).json({ response: json.choices[0].message.content })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e })
  }
}
