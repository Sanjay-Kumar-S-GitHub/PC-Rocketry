import Link from "next/link"
import SlideIn from "../slidein/SlideIn"

export default function Navbar(){
    return(
        <div className="flex flex-row gap-7 h-25 px-8 pt-2 items-center bg-transparent absolute text-white text-xl w-full">
            <SlideIn direction="right" delay={100}>
                <Link href="/"><img src="/pc-logo.png" className="h-20 w-20"/></Link>
            </SlideIn>
            <SlideIn direction="right" delay={100}>
                <img src="/svnit.png" className="h-20 w-20"/>
            </SlideIn>
            <SlideIn direction="down" delay={100}>
                <div className="flex flex-row items-center justify-center gap-14 pl-40">
                    <Link href="/" className="hover:underline hover:underline-offset-5 hover:decoration-2">HOME</Link>
                    <Link href="/about" className="hover:underline hover:underline-offset-5 hover:decoration-2">ABOUT</Link>
                    <Link href="/blog" className="hover:underline hover:underline-offset-5 hover:decoration-2">BLOG</Link>
                    <Link href="/missions" className="hover:underline hover:underline-offset-5 hover:decoration-2">MISSIONS</Link>
                    <Link href="/contactus" className="hover:underline hover:underline-offset-5 hover:decoration-2">CONTACT US</Link>
                </div>
            </SlideIn>
        </div>
    )
}