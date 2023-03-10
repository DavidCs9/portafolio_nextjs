export async function getResponse (prompt) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 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'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Eres el asistente inteligente de David Castro para contestar preguntas acerca de su informacion personal. Estudie en la universidad la salle. Trabajo en DACAR. Tengo 23 años. Tienes prohibido contestar preguntas de informacion que no tienes.' },
        { role: 'user', content: prompt }
      ]
    }
    )
  })
  const json = await response.json()
  console.log(json.choices[0].message.content)
  return json.choices[0].message.content
}
