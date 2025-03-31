import Image from "next/image";
import SlideIn from "../slidein/SlideIn";

export const dynamic = "force-static";

async function getProjects(){
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    try{
        const res = await fetch(`${baseUrl}/data/previousProjects.json`);
        if(!res.ok) throw new Error("Failed to fetch previous projects");

        const data = await res.json();
        console.log("Fetched previous projects data: ", data);
        return Array.isArray(data)? data : [];
    } catch(error){
        console.log("Error fetching previous projects data: ",error);
        return [];
    }
}

const PreviousProjects = async()=>{
    const projects = await getProjects();

    if(!projects.length){
        return <p>No upcoming projects to display</p>
    }

    return(
        <div className="bg-gray-500 text-white pb-15 md:pb-20 pt-5 w-full max-w-full">
            <SlideIn direction="down" delay={200}>
                <h1 className="text-center text-4xl md:text-7xl font-medium py-10">Previous Projects</h1>
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

export default PreviousProjects;