import { useMessageStore } from '@/app/store/message'
import { ChatForm } from './ChatForm'
import { Message } from './Message'
import { DeleteButton } from './Deletebutton'

export function Chat () {
  const messages = useMessageStore(state => state.messages)
  const deletebtn = useMessageStore(state => state.deletebtn)

  return (
    <div
      className='flex flex-col flex-1'
    >
      <ChatForm />
      <div id='chat' className=' mt-10]'>
        {messages.map((entry, index) => (
          <Message key={entry.id} {...entry} index={index} />
        ))}
        {deletebtn
          ? <DeleteButton />
          : ''}
      </div>
    </div>

  )
}
