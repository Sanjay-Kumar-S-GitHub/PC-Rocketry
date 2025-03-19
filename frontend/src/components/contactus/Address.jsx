import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";


export default function Address(){
    return(
        <div className="flex flex-row justify-center my-20">
            <div className="shadow-xl p-10 bg-gray-100">
                <h1 className="text-4xl font-medium my-5">Address</h1>
                <div className="flex flex-row mb-5 gap-2">
                    <FaLocationDot className="h-6 w-6"/>
                    <p> Department of Physics SVNIT Surat,<br/>Ichchhanath, Surat 395007<br/>Gujarat, INDIA</p>
                </div>
                <div className="flex flex-row mb-5 gap-2">
                    <MdCall className="h-6 w-6"/>
                    <p>+91-261-220-1542</p>
                </div>
                <div className="flex flex-row gap-2">
                    <IoIosMail className="h-6 w-6"/>
                    <p>office@phy.svnit.ac.in</p>
                </div>
            </div>
        </div>
    )
}