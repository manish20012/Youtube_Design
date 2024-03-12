

const ChatMessage = ({name , message}) => {
  return (
    <div className=" flex items-center p-1 ">
       <img 
       className="h-10"
        alt="user" 
          src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
        />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
    
  )
}

export default ChatMessage
