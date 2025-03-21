import Link from "next/link"
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="flex flex-col gap-4 justify-center items-center h-150 bg-gray-500 text-white">
            <img src="/pc-logo.png" className="h-35 w-35"/>
            <div className="flex flex-row gap-2 text-sm font-bold underline">
                <Link href="/about">ABOUT</Link>
                <p>|</p>
                <Link href="/blog">BLOG</Link>
                <p>|</p>
                <Link href="/missions">MISSIONS</Link>
                <p>|</p>
                <Link href="/contactus">CONTACT US</Link>
            </div>
            <div className="flex flexx-row gap-5">
                <BsTwitterX className="text-2xl  hover:text-black cursor-pointer"/>
                <FaYoutube className="text-2xl  hover:text-black cursor-pointer"/>
                <FaLinkedin className="text-2xl  hover:text-black cursor-pointer"/>
                <FaInstagram className="text-2xl  hover:text-black cursor-pointer"/>
            </div>
            <div className="text-center">
                <h1>PHYSICS CLUB</h1>
                <p>Department of Physics</p>
                <p>SVNIT, Surat</p>
                <p>Gujarat-395007</p>
            </div>
            <p className="text-xs mt-20">© 2025. PHYSICS CLUB. ALL RIGHTS RESERVED</p>
            <hr className="border-t-2 border-gray-300 my-4 w-300 mx-auto" />
        </div>
    )
}