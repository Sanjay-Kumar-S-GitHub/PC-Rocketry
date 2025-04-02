import SlideIn from "../slidein/SlideIn";
import Image from "next/image";

export default function UpcomingProjects({upcomingProjects}) {
    console.log("Upcoming projects: ",upcomingProjects)

    return(
        <div className="pb-15 md:pb-20 pt-5 w-full max-w-full">
            <SlideIn direction="down" delay={200}>
                <h1 className="text-center text-4xl md:text-7xl font-medium py-10">YET TO BE LAUNCHED</h1>
            </SlideIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 mx-10 md:mx-15">
                {upcomingProjects.length===0 ? (
                    <p className="text-center">No upcoming projects to display</p>
                ):(
                    upcomingProjects.map((upcomingProject)=>(
                        <SlideIn direction="up" key={upcomingProject.id}>
                            <div className="shadow-xl">
                                <Image src={upcomingProject.image} alt="project image" width={650} height={1200}/>
                                <div className="p-5">
                                    <h2 className="text-2xl font-medium">{upcomingProject.title}</h2>
                                    <p className="text-sm">{upcomingProject.description}</p>
                                </div>
                            </div>
                        </SlideIn>
                    ))
                )}
            </div>
        </div>
    )
}