import { AiOutlineMenu } from 'react-icons/ai';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utilis/navSlice';
import { YOUTUBE_SEARCH_API } from '../utilis/contants';
import { cacheResults } from '../utilis/searchSlice';
import { Link } from "react-router-dom";

const Header = () => {

     const [searchQuery , setSeachQuery] = useState("");
     const [suggestions, setSuggestions] = useState([]);
     const [showSuggestions , setShowSuggestions] = useState(false);

     const searchCache =useSelector((store) => store.search);
     const dispatch = useDispatch(); 

     useEffect(()=>{
        const timer = setTimeout(() => {
          if(searchCache[searchQuery]){
             setSuggestions(searchCache[searchQuery]);
          }else{
            getSearchSuggestion();
          }
         } , 200);

        return () =>{
          clearTimeout(timer);
        };

     },[searchQuery]);

     const getSearchSuggestion = async () =>{
      console.log("API Call" + searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);


      dispatch(
        cacheResults({
          [searchQuery] : json[1],
        })
      )
   }


    
  return (
    <div className="mb-2 p-2 grid grid-flow-col sticky top-0  h-20 bg-white">
        <div className="col-span-1 flex">
          <button className="mx-4" onClick={()=>{ dispatch(toggleMenu())}}><AiOutlineMenu className="text-2xl relative top-2"/></button>
          <img  className="mt-2 ml-1 h-16" alt="youtube-logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-700x394.png"/>
       </div>
        
     
           <div className="col-span-2 text-centre mt-2">
            <div >
            <input className="px-8 w-1/2 border border-grey-400 p-2  rounded-l-full " 
              type="text"
              name='Search'
              value={searchQuery}
              onChange={(e) => setSeachQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
             <button className="border border-grey-400 px-5  py-2  rounded-r-full bg-gray-100" >Search</button>
          </div>
        

       { showSuggestions && ( <div className="fixed bg-white  w-[33.5rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
             {suggestions.map((s) => 
             (<li key={s} className="py-2 px-2 shadow-sm hover:bg-gray-100">
              🔍{s}
             </li>
             ))}
          </ul>
         </div>)}
        </div> 


       <div>
       <img 
       className="h-10 col-span-1"
        alt="user" 
          src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
        />
       </div>
    </div>
  )
}

export default Header
