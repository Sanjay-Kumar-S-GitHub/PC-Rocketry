'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';

export default function Updates(){
    const [updates, setUpdates]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        fetch('/data/updates.json')
        .then((res)=>res.json())
        .then((data)=>{
            setUpdates(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log('Error loading updates: ',error);
            setLoading(false);
        });
    },[]);
    
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % updates.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + updates.length) % updates.length);
    };

    if (loading) return <p>Loading updates...</p>;
    if (updates.length === 0) return <p>No updates available.</p>;

    return (
        <div className="flex flex-col justify-center items-center my-20">
            <h1 className="text-7xl">UPDATES</h1>
            <div className="relative">
                {(index>0) && (<button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-4xl"
                >
                    ◀
                </button>
                )}

                <div className="overflow-hidden w-full flex justify-center items-center gap-14 h-80 px-5">
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="text-lg text-start shadow-xl h-60"
                    >
                        <img src={updates[index]?.image} className="h-40 w-85"/>
                        <div className="mt-3 ml-3">
                            <h1>{updates[index+2]?.title}</h1>
                            <p className="text-base">{updates[index+2]?.date}</p>
                        </div>
                    </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={index+1}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="text-lg text-start shadow-xl h-60"
                    >
                        <img src={updates[index+1]?.image} className="h-40 w-85"/>
                        <div className="mt-3 ml-3">
                            <h1>{updates[index+2]?.title}</h1>
                            <p className="text-base">{updates[index+2]?.date}</p>
                        </div>
                    </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={index+2}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="text-lg text-start shadow-xl h-60"
                    >
                        <img src={updates[index+2]?.image} className="h-40 w-85"/>
                        <div className="mt-3 ml-3">
                            <h1>{updates[index+2]?.title}</h1>
                            <p className="text-base">{updates[index+2]?.date}</p>
                        </div>
                    </motion.div>
                    </AnimatePresence>
                </div>

                {(index<updates.length-3) && (<button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-4xl"
                >
                    ▶
                </button>
                )}
            </div>
        </div>
    );
}