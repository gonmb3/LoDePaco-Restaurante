import {MdOutlinePlace} from "react-icons/md"
import { FaInstagram} from "react-icons/fa"
import {ImFacebook} from "react-icons/im"



const TopBar = () => {


  return (
    <div className="hidden md:fixed md:flex  bg-black text-white m-auto w-full sm:px-3 md:px-18  lg:px-20 py-2 z-20">
        <div className=" w-full flex items-center place-content-end text-[12.5px] gap-6">
            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-500/80 duration-300">
                <MdOutlinePlace size={20}/>
                <h4>LO DE PACO: SAN JOSE 1080 - TEL..(+598) 093 999 666</h4>
            </div>
                {/*SOCIAL ICONS*/}
            <div className="flex items-center gap-2 cursor-pointer">
            <ImFacebook className="hover:text-yellow-500/80 duration-300" size={15}/>
            <FaInstagram className="hover:text-yellow-500/80 duration-300" size={16}/>
            </div>
        </div>
    </div>
  )
}

export default TopBar