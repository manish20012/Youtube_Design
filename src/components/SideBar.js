import {AiOutlineBulb, AiOutlineFire, AiOutlineHome, AiOutlineScissor, AiOutlineShop, AiOutlineShopping, AiOutlineTrophy, AiOutlineVideoCamera} from "react-icons/ai"
import {MdOutlineLibraryAdd, MdOutlineSubscriptions} from "react-icons/md"
import{BiMovie, BiTimeFive} from "react-icons/bi"
import {RiVideoLine} from "react-icons/ri"
import {VscHistory} from "react-icons/vsc"
import { IoMusicalNoteOutline } from "react-icons/io5";
import { TbLivePhoto } from "react-icons/tb";
import { SiYoutubegaming } from "react-icons/si";
import { BsNewspaper } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SideBar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    // this is early return 
    if(!isMenuOpen) return null;


  return (
    <div className="w-full shadow-lg rounded-md m-2 p-2 overflow-y-scroll h-screen sticky top-20 text-md">
        <ul className="py-2">
        <Link to="/"><li className="px-2 rounded-md py-2 w-40  hover:bg-gray-100"><AiOutlineHome className="inline mr-2"/>Home</li></Link>
        <li className="px-2 rounded-md py-2 w-40  hover:bg-gray-100"><AiOutlineVideoCamera className="inline mr-2"/>Shorts</li>
        <li className="px-2 rounded-md py-2 w-40  hover:bg-gray-100"><MdOutlineSubscriptions className="inline mr-2 "/>Subscriptions</li>
        </ul>
        
        <hr/>
        <ul>
            <li className="px-2 rounded-md py-2 w-40  hover:bg-gray-100"><MdOutlineLibraryAdd className="inline mr-2"/>Libary</li>
            <li className="px-2 rounded-md py-2 w-40  hover:bg-gray-100"><VscHistory className="inline mr-2"/>History</li>
            <li className="px-2 rounded-md py-2 w-40  hover:bg-gray-100"><RiVideoLine className="inline mr-2"/>Your Videos</li>
            <li className="px-2 rounded-md py-2 w-40  hover:bg-gray-100"><BiTimeFive className="inline mr-2" />Watch Later</li>
            <li className="px-2 rounded-md py-2 w-40  hover:bg-gray-100"><AiOutlineScissor className="inline mr-2"/>Your Clip</li>
        </ul>
        
        <hr/>
        <ul >
                    <li className="py-2 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineFire className="inline mr-2"/>Trending</li>
                    <li className="py-2 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineShopping className="inline mr-2"/>Shopping</li>
                    <li className="py-2 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><IoMusicalNoteOutline className="inline mr-2"/>Music</li>
                    <li className="py-2 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><BiMovie className="inline mr-2"/>Movies</li>
                    <li className="py-2 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><TbLivePhoto className="inline mr-2"/>Live</li>
                    <li className="py-2 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><SiYoutubegaming className="inline mr-2"/>Gaming</li>
                    <li className="py-2 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><BsNewspaper className="inline mr-2"/>News</li>
                    <li className="py-2 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineTrophy className="inline mr-2"/>Sports</li>
                    <li className="py-2 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineBulb className="inline mr-2"/>Learning</li>
                    <li className="py-2 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineShop className="inline mr-2"/>Fashion & Beauty</li>
                </ul>

    </div>
  )
}

export default SideBar
