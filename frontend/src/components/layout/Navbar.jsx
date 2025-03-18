import Link from "next/link"

export default function Navbar(){
    return(
        <div className="flex flex-row gap-7 h-25 px-8 pt-2 items-center bg-transparent absolute text-white text-xl">
            <Link href="/"><img src="/pc-logo.png" className="h-20 w-20"/></Link>
            <img src="/svnit.png" className="h-20 w-20"/>
            <div className="flex flex-row items-center justify-center gap-14 pl-40">
                <Link href="/" className="hover:underline hover:underline-offset-5 hover:decoration-2">HOME</Link>
                <Link href="/" className="hover:underline hover:underline-offset-5 hover:decoration-2">ABOUT</Link>
                <Link href="/blog" className="hover:underline hover:underline-offset-5 hover:decoration-2">BLOG</Link>
                <Link href="/missions" className="hover:underline hover:underline-offset-5 hover:decoration-2">MISSIONS</Link>
                <Link href="/" className="hover:underline hover:underline-offset-5 hover:decoration-2">SUPPORT US</Link>
            </div>
        </div>
    )
}