import SlideIn from "../slidein/SlideIn";
import Image from "next/image";

export const dynamic = "force-static";

async function getProjects(){
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    try{
        const res = await fetch(`${baseUrl}/data/upcomingProjects.json`);
        if(!res.ok) throw new Error("Failed to fetch upcoming projects");

        const data = await res.json();
        console.log("Fetched upcoming projects data: ", data);
        return Array.isArray(data)? data : [];
    } catch(error){
        console.log("Error fetching upcoming projects data: ",error);
        return [];
    }
}

const UpcomingProjects=async()=>{
    const projects = await getProjects();

    if(!projects.length){
        return <p>No previous projects to display</p>
    }

    return(
        <div className="pb-15 md:pb-20 pt-5 w-full max-w-full">
            <SlideIn direction="down" delay={200}>
                <h1 className="text-center text-5xl md:text-7xl font-medium py-10">YET TO BE LAUNCHED</h1>
            </SlideIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 mx-10 md:mx-15">
                {
                    projects.map((project)=>(
                        <SlideIn direction="up" key={project.id}>
                            <div className="shadow-xl">
                                <Image src={project.image} alt="project image" width={650} height={1200}/>
                                <div className="p-5">
                                    <h2 className="text-2xl font-medium">{project.title}</h2>
                                    <p className="text-sm">{project.description}</p>
                                </div>
                            </div>
                        </SlideIn>
                    ))
                }
            </div>
        </div>
    )
}

export default UpcomingProjects;