import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from "../utilis/contants";
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Details from './Details';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

   useEffect(() =>{
     getVideos();
   }, [])

   
   const getVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items)
    console.log(json);
   }

  
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (<Link key={video.id} to={"/watch?v=" + video.id}><VideoCard  info={video}/></Link>))}
       
    </div>
  )
}

export default VideoContainer
