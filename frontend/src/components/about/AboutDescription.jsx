    import Image from "next/image"
import SlideIn from "../slidein/SlideIn"

export default function AboutDescription(){
    return(
        <div className="flex flex-row justify-center items-center my-15 md:my-20 w-full max-w-full">
            <div className="md:w-[800px] mx-10">
                <SlideIn direction="down" delay={200}>
                    <h1 className="font-medium text-5xl md:text-7xl mb-5">WE LAUNCH ROCKETS</h1>
                </SlideIn>
                <div className="flex flex-row gap-5 md:gap-10">
                    <SlideIn direction="right" delay={100}>
                        <div className="">
                            <h2 className="my-5 text-3xl md:text-4xl">OUR VISION</h2>
                            <p className="my-5 text-base">Our vision is to revolutionize rocketry through innovation and teamwork. We aim to break barriers and reach new heights, setting new standards in the field</p>
                        </div>
                    </SlideIn>
                    <SlideIn direction="left" delay={100}>
                        <div className="">
                            <h2 className="my-5 text-3xl md:text-4xl">OUR MISSION</h2>
                            <p className="my-5 text-base">1) To become the center of aerospace learning and passion where students can come to get core hands on learning experience</p>
                            <p className="my-5 text-base">2) To become a name in Indian amateur rocketry circles where we are referred to as pioneers of the industry in India</p>
                        </div>
                    </SlideIn>
                </div>
                <SlideIn direction="up" delay={200}>
                    <Image src="/team.png" width={800} height={150} alt="team image"/>
                </SlideIn>
            </div>
        </div>
    )
}