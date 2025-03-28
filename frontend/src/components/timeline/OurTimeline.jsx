import Image from "next/image"
import SlideIn from "../slidein/SlideIn";

export const dynamic = "force-static";

async function getTimelineData(){
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    try{
        const res = await fetch(`${baseUrl}/data/timeline.json`);
        if(!res.ok) throw new Error("Failed to fetch timeline data");

        const data = await res.json();
        console.log("Fetched timeline data: ", data);
        return Array.isArray(data)? data : [];
    } catch(error){
        console.log("Error fetching timeline data: ",error);
        return [];
    }
}

const OurTimeline = async()=>{
    const events = await getTimelineData();

    return(
        <div className="relative mx-auto px-30 mt-25 mb-35">
            <SlideIn direction="down" delay={200}>
                <h1 className="font-semibold text-6xl text-center mb-15">WE TIMED THEM</h1>
            </SlideIn>
            <div className="absolute left-1/2 transform -translate-x-1 bg-black w-[2px] h-full">
            </div>
            {events.map((event) => (
            <div key={event.id} className={`mt-15 flex ${event.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 flex justify-center">
                    <SlideIn direction={`${event.id%2==0 ? 'right' : 'left'}`}>
                        <div className="w-[450px]">
                            <p className="text-xl font-light">{event.date}</p>
                            <h2 className="text-4xl font-semibold my-2">{event.title}</h2>
                            <p className="mb-3">{event.description}</p>
                            <Image src={event.image} alt={event.id} width={450} height={200}/>
                        </div>
                    </SlideIn>
                </div>
                <div className="w-1/2">
                </div>
            </div>
            ))}
        </div>
    )
}

export default OurTimeline;