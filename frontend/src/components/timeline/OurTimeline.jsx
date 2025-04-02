import Image from "next/image"
import SlideIn from "../slidein/SlideIn";

export default function OurTimeline({events}) {
    console.log("Events: ",events)

    return(
        <div className="relative  pl-15 pr-10 md:px-10 mt-15 md:mt-20 lg:mt-25 mb-35 w-full max-w-full">
            <SlideIn direction="down" delay={200}>
                <h1 className="font-semibold text-6xl text-center mb-10 md:mb-15">WE TIMED THEM</h1>
            </SlideIn>
            <div className="absolute left-10 md:left-1/2 transform -translate-x-1 bg-black w-[2px] h-[calc(100%-100px)]">
            </div>
            {events.length===0 ? (
                <p>No events to display</p>
            ):(
                events.map((event) => (
                <div key={event.id} className={`mt-10 md:mt-15 flex ${event.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="md:w-1/2 flex justify-center">
                        <SlideIn direction={`${event.id%2==0 ? 'right' : 'left'}`}>
                            <div className="md:w-[300px] lg:w-[400px]">
                                <p className="text-xl font-light">{event.date}</p>
                                <h2 className="text-4xl font-semibold my-2">{event.title}</h2>
                                <p className="mb-3">{event.description}</p>
                                <Image src={event.image} alt={event.id} width={450} height={200}/>
                            </div>
                        </SlideIn>
                    </div>
                    <div className="hidden md:block w-1/2 ">
                    </div>
                </div>
                ))
            )}
        </div>
    )
}