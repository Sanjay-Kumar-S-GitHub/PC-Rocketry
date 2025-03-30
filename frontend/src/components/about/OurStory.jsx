import Link from "next/link"
import SlideIn from "../slidein/SlideIn"

export default function OurStory(){
    return (
        <SlideIn direction="up">
            <div className="bg-[url('/ourstory.webp')] relative h-60 md:h-90 w-full max-w-full flex flex-col gap-5 justify-center items-center bg-cover bg-center my-10">
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <SlideIn direction="down" delay={400}>
                    <h2 className="text-3xl font-medium text-white z-10">OUR STORY</h2>
                </SlideIn>
                <SlideIn direction="up" delay={400}>
                    <Link href="/timeline" className="z-11"><button className="border-[3px] font-bold rounded-md border-purple-400 text-purple-400 h-10 w-40 hover:bg-purple-400 hover:text-white cursor-pointer z-11">VIEW TIMELINE</button></Link>
                </SlideIn>
            </div>
        </SlideIn>
    )
}