'use client'

import { useEffect, useState } from "react"
import SlideIn from "../slidein/SlideIn";
import Image from "next/image";

export default function UpcomingProjects(){
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('/data/upcomingProjects.json')
        .then((res)=>res.json())
        .then((data)=>{
            setProjects(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log('Error loading projects: ',error);
            setLoading(false);
        });
    },[]);

    if(loading) return <p>Loading projects...</p>;
    if(projects.length === 0) return <p>No projects available.</p>;

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