export default function ContactUs(){
    return(
        <div className="text-center h-80">
            <h1 className="text-2xl font-bold mt-10 mb-5">Contact Us</h1>
            <form className="grid grid-cols-2 gap-5 px-70">
                <input type="text" className="border h-10 pl-3" placeholder="Name"/>
                <input type="email" className="border h-10 pl-3" placeholder="Email"/>
                <input type="text" className="border h-30 pl-3 col-span-2" placeholder="Meassage"/>
                <button className="col-span-2 border-2 h-8 hover:bg-black hover:text-white hover:font-medium cursor-pointer">Submit</button>
            </form>
        </div>
    )
}