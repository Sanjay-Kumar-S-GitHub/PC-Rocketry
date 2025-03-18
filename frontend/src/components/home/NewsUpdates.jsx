'use client'

import { useEffect, useState } from "react"
import Link from "next/link";

export default function NewsUpdates(){
    const [updates,setUpdates]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        fetch('/data/updates.json')
        .then((res)=>res.json())
        .then((data)=>{
            setUpdates(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log('Error loading updates in home pape: ',error);
            setLoading(false);
        })
    },[]);

    if(loading) return <p>Loading updates...</p>
    if(updates.length==0) return <p>No updates available.</p>

    return(
        <div className="bg-gray-500 p-8 flex flex-col gap-7 text-center text-white">
            <h1 className="text-4xl font-medium">NEWS + UPDATES</h1>
            <p className="text-sm">STAY UPDATED ON OUR LATEST NEWS</p>
            {
                updates.slice(-3).map(update=>(
                    // <div
                    //     key={update.id}
                    //     style={{ backgroundImage: `url(${update.image})` }}
                    //     className="bg-cover bg-center h-64 w-full flex flex-col justify-center items-center gap-5 backdrop-opacity-0"
                    // >
                    //     <h2 className="text-3xl font-bold">{update.title}</h2>
                    //     <Link href="/blog"><button className="border-2 rounded-md border-purple-400 text-purple-400 h-10 w-20 hover:bg-purple-400 hover:text-white cursor-pointer">READ</button></Link>
                    // </div>
                    <div
                        key={update.id}
                        className="relative h-64 w-full flex flex-col justify-center items-center gap-5 bg-cover bg-center"
                    >
                        <div
                            className="absolute inset-0 bg-black opacity-50"
                            style={{ backgroundImage: `url(${update.image})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.4 }} // Adjust opacity here
                        ></div>
                        <h2 className="text-3xl font-bold text-white z-10">{update.title}</h2>
                        <Link href="/blog" className="z-11"><button className="border-[3px] font-bold rounded-md border-purple-400 text-purple-400 h-10 w-20 hover:bg-purple-400 hover:text-white cursor-pointer z-11">READ</button></Link>
                    </div>
                ))
            }
        </div>
    )
}