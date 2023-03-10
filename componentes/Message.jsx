export default function Message () {
  return (

    <label className='text-gray-700' for='name'>
      <h2>Respuesta:</h2>
      <textarea
        className=' px-4 py-2 text-base text-gray-700 placeholder-gray-400
      bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2
      focus:ring-purple-600 focus:border-transparent' id='response' placeholder='Enter your comment'
        name='comment' rows='3' cols='25'
      />
    </label>

  )
}
