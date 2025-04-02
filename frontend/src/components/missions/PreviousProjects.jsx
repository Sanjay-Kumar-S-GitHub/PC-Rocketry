import Image from "next/image";
import SlideIn from "../slidein/SlideIn";

export default function PreviousProjects({previousProjects}) {
    console.log("Previous projects: ",previousProjects)

    return(
        <div className="bg-gray-500 text-white pb-15 md:pb-20 pt-5 w-full max-w-full">
            <SlideIn direction="down" delay={200}>
                <h1 className="text-center text-4xl md:text-7xl font-medium py-10">Previous Projects</h1>
            </SlideIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 mx-10 md:mx-15">
                {previousProjects.length===0 ? (
                    <p className="text-center">No Previous projects to display</p>
                ):(
                    previousProjects.map((previousProject)=>(
                        <SlideIn direction="up" key={previousProject.id}>
                            <div className="shadow-xl">
                                <Image src={previousProject.image} alt="project image" width={650} height={1200}/>
                                <div className="p-5">
                                    <h2 className="text-2xl font-medium">{previousProject.title}</h2>
                                    <p className="text-sm">{previousProject.description}</p>
                                </div>
                            </div>
                        </SlideIn>
                    ))
                )}
            </div>
        </div>
    )
}