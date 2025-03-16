import Link from "next/link"
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="flex flex-col gap-4 justify-center items-center h-150 bg-gray-500">
            <img src="/pc-logo.png" className="h-35 w-35"/>
            <div className="flex flex-row gap-1 text-sm font-bold underline">
                <Link href="/">ABOUT</Link>
                <p>|</p>
                <Link href="/">BLOG</Link>
                <p>|</p>
                <Link href="/">MISSIONS</Link>
                <p>|</p>
                <Link href="/">SUPPORT US</Link>
            </div>
            <div className="flex flexx-row gap-4">
                <BsTwitterX className="text-2xl"/>
                <FaYoutube className="text-2xl"/>
                <FaLinkedin className="text-2xl"/>
                <FaInstagram className="text-2xl"/>
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