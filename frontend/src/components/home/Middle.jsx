export default function Middle(){
    return(
        <div className="flex flex-row">
        <div className="flex flex-col w-1/2 justify-center text-start gap-1 px-20">
            <h1 className="text-4xl font-bold mb-6">LEARN. BUILD. FLY</h1>
            <h2 className="text-3xl font-medium">Why</h2>
            <p className="mb-5">We believe a thriving global aerospace industry starts with inspiring students to imagine bold possibilities and work tirelessly to turn them into reality.</p>
            <h2 className="text-3xl font-medium">How</h2>
            <p className="mb-5">We inspire the next generation of aerospace engineers by giving them hands-on experience in rocketry and empowering them to bring their ideas to life.</p>
            <h2 className="text-3xl font-medium">What</h2>
            <p className="mb-5">We build rockets! Learn more about us here.</p>
            <div className="flex flex-row justify-end">
                <button className="border-2 rounded-2xl w-30 h-10 text-lg hover:bg-black hover:text-white hover:font-bold cursor-pointer">Learn More</button>
            </div>
        </div>
        <div className="w-1/2 bg-[url('/middle.jpeg')] bg-center bg-cover h-150">
        </div>
    </div>
    )
}