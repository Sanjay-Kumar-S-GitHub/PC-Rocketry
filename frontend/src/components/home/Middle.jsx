import SlideIn from "../slidein/SlideIn"
import Image from "next/image"
import Link from "next/link"

export default function Middle(){
    return(
        <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 justify-center text-start gap-1 px-10 lg:px-20 py-10 md:py-0">
            <SlideIn direction="right" delay={200}>
                <h1 className="text-3xl lg:text-4xl font-bold mb-6">LEARN. BUILD. FLY</h1>
            </SlideIn>
            <SlideIn direction="right" delay={200}>
                <h2 className="text-2xl lg:text-3xl font-medium">Why</h2>
            </SlideIn>
            <SlideIn direction="left" delay={200}>
                <p className="mb-5">We believe a thriving global aerospace industry starts with inspiring students to imagine bold possibilities and work tirelessly to turn them into reality.</p>
            </SlideIn>
            <SlideIn direction="right" delay={200}>
                <h2 className="text-2xl md:text-3xl font-medium">How</h2>
            </SlideIn>
            <SlideIn direction="left" delay={200}>
                <p className="mb-5">We inspire the next generation of aerospace engineers by giving them hands-on experience in rocketry and empowering them to bring their ideas to life.</p>
            </SlideIn>
            <SlideIn direction="right" delay={200}>
                <h2 className="text-2xl md:text-3xl font-medium">What</h2>
            </SlideIn>
            <SlideIn direction="left" delay={200}> 
                <p className="mb-5">We build rockets! Learn more about us here.</p>
            </SlideIn>
            <SlideIn direction="left" delay={300}>
                <div className="flex flex-row justify-end">
                    <Link href="/about"><button className="border-2 rounded-2xl w-30 h-10 text-lg hover:bg-black hover:text-white hover:font-bold cursor-pointer">Learn More</button></Link>
                </div>
            </SlideIn>
        </div>
        {/* <div className="md:w-1/2 bg-[url('/middle.jpeg')] bg-center bg-cover h-150">
        </div> */}
        <div className="relative w-full md:w-1/2 h-100 md:h-150">
            <Image src='/middle.jpeg' alt="middle component" fill className="object-cover"/>
        </div>
    </div>
    )
}