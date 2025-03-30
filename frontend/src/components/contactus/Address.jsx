import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import SlideIn from "../slidein/SlideIn";


export default function Address(){
    return(
        <SlideIn direction="up">
            <div className="flex flex-row justify-center my-15 md:my-20">
                <div className="shadow-xl rounded-xl p-4 md:p-8 bg-gray-100">
                    <SlideIn direction="down" delay={200}>
                        <h1 className="text-4xl font-medium mb-5">Address</h1>
                    </SlideIn>
                    <SlideIn direction="down" delay={400}>
                        <div className="flex flex-row mb-3 md:mb-5 gap-2">
                            <FaLocationDot className="h-5 w-5 md:h-6 md:w-6"/>
                            <p> Department of Physics, SVNIT<br/>Ichchhanath, Surat 395007<br/>Gujarat, INDIA</p>
                        </div>
                    </SlideIn>
                    <SlideIn direction="down" delay={600}>
                        <div className="flex flex-row mb-3 md:mb-5 gap-2">
                            <MdCall className="h-5 w-5 md:h-6 md:w-6"/>
                            <p>+91-261-220-1542</p>
                        </div>
                    </SlideIn>
                    <SlideIn direction="down" delay={800}>
                        <div className="flex flex-row gap-2">
                            <IoIosMail className="h-5 w-5 md:h-6 md:w-6"/>
                            <p>office@phy.svnit.ac.in</p>
                        </div>
                    </SlideIn>
                </div>
            </div>
        </SlideIn>
    )
}