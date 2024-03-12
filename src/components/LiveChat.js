import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utilis/chatSlice';
import { generateRadomName, makemeassge } from '../utilis/helper';

const LiveChat = () => {

    const dispatch = useDispatch();

    const[liveMessage , setLiveMessage] = useState("");

    const chatMessg = useSelector((store)=> store.chat.messages);
      useEffect(()=>{
      const i = setInterval(()=>{

        dispatch(
            addMessage({
            name:generateRadomName(),
            message:makemeassge(20),
        }))
      }, 2000)

        return () => clearInterval(i);
      },[])


  return (
    <>
    <div className="p-4 ml-2 h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div> 
            {chatMessg.map((c , index) => 
            (<ChatMessage key={index}  name={c.name} message={c.message}/>))}
       </div>
    </div>

    <form className=" p-1 ml-2 border border-black flex " 
       onSubmit={(e)=>{
          e.preventDefault();
          dispatch(
            addMessage({
                name:"manish",
                message:liveMessage,
            })
          )
          setLiveMessage("");
          
       }}>
        <input 
        className=" px-2 w-72" 
        type="text"  
        value={liveMessage}
        onChange={(e) =>{
            setLiveMessage(e.target.value);
        }}
        />
        <button className=" px-2 m-2 bg-green-200 ">Send</button>
    </form>
    </>
  )
}

export default LiveChat
