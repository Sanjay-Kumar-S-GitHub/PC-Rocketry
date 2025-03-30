import SlideIn from "../slidein/SlideIn";

export default function ContactUs(){
    return(
        <div className="text-center my-10 md:my-20 w-full">
            <SlideIn direction="down" delay={200}>
                <h1 className="text-4xl md:text-5xl font-bold md:mt-10 mb-5">Contact Us</h1>
            </SlideIn>
            <SlideIn direction="up" delay={200}>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10 md:px-30 lg:px-60 w-full">
                    <input type="text" className="border h-10 pl-3" placeholder="Name"/>
                    <input type="email" className="border h-10 pl-3" placeholder="Email"/>
                    <input type="text" className="border h-30 pl-3 md:col-span-2" placeholder="Meassage"/>
                    <button className="md:col-span-2 border-2 h-10 hover:font-bold hover:bg-black hover:text-white cursor-pointer">Submit</button>
                </form>
            </SlideIn>
        </div>
    )
}