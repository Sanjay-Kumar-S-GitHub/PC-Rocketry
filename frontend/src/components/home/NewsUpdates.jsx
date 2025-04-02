import Link from "next/link";
import SlideIn from "../slidein/SlideIn";

export default function NewsUpdates({updates}){
    console.log("Updates: ",updates);
    
    return(
        <div className="bg-gray-500 p-4 md:p-8 flex flex-col gap-5 md:gap-7 text-center text-white w-full">
            <h1 className="text-3xl lg:text-4xl font-medium">NEWS + UPDATES</h1>
            <p className="text-xs md:text-sm">STAY UPDATED ON OUR LATEST NEWS</p>
            {updates.length===0 ? (
                <p>No updates available</p>
            ):(
                updates.slice(-3).map(update=>(
                    <SlideIn direction="top" delay={200} key={update.id}>
                        <div
                            className="relative h-50 md:h-64 w-full flex flex-col justify-center items-center gap-5 bg-cover bg-center"
                        >
                            <div
                                className="absolute inset-0 bg-black opacity-50"
                                style={{ backgroundImage: `url(${update.image})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.4 }}
                            ></div>
                            <SlideIn direction="down" delay={400}>
                                <h2 className="text-2xl md:text-3xl font-bold text-white z-10">{update.title}</h2>
                            </SlideIn>
                            <SlideIn direction="up" delay={400}>
                                <Link href="/blog" className="z-11"><button className="border-[3px] font-bold rounded-md border-purple-400 text-purple-400 h-10 w-20 hover:bg-purple-400 hover:text-white cursor-pointer z-11">READ</button></Link>
                            </SlideIn>
                        </div>
                    </SlideIn>
                ))
            )}
        </div>
    )
}