import React from 'react'

const Details = () => {
     
  return (
    <div >
        <h1 className="px-20 py-3 font-bold">title</h1>
    <div className="grid grid-flow-col px-20">
       
        <div className="flex space-x-6">
       <img alt="channelLogo" src=""/>
       <h1> Name</h1>
       <button className="px-4 py-2 rounded-full  bg-gray-900 text-white">Subscribe</button>
       </div>

       <div className="col-span-1 col-end-13 flex space-x-2">

        <div>
        <button className="  hover:bg-gray-200 px-4 py-1.5 rounded-l-full bg-gray-100">👍</button>
         <button className=" hover:bg-gray-200 px-2 py-1.5 rounded-r-full bg-gray-100">👎</button>
        </div>


          <div className="space-x-2">
           <button className="hover:bg-gray-200 px-5 py-1.5 rounded-full bg-gray-100">Share</button>
           <button className="hover:bg-gray-200 px-4 py-1.5 rounded-full bg-gray-100 ">Download</button>
           <button className="hover:bg-gray-200 px-4 py-1.5 rounded-full bg-gray-100">...</button>
       </div>
     
       </div>
    </div>
    </div>
  )
}

export default Details
