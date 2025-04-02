import Image from "next/image";
import SlideIn from "../slidein/SlideIn";

export default function Heads({ teamData}){
    console.log("Team Prop: ", teamData); 

    const headCommittee = teamData.filter((teamMember)=>(teamMember.committee==="head"));
    console.log("headCommittee Prop:", headCommittee);

    const heads = headCommittee[0].members;
    console.log("Heads Prop:", heads);

    return (
        <div className="flex flex-col justify-center items-center my-15 w-full max-w-full">
            <SlideIn direction="down" delay={200}>
                <h1 className="text-4xl md:text-7xl font-medium">HEADS</h1>
            </SlideIn>
            <div className={`${heads.length < 3 ? "flex flex-col md:flex-row justify-around" : "grid md:grid-cols-2 lg:grid-cols-3"}`}>
                {heads.length===0 ? (
                    <p>No heads available</p>
                ):(
                    heads.map((head)=>(
                        <div key={head.id} className={`${heads.length < 3 ? "mx-10 md:mx-25 lg:mx-40 mt-10 md:mt-15 lg:mt-20 text-center" : "mx-10 md:mx-15 mt-10 md:mt-15 lg:mt-20 text-center"}`}>
                            <SlideIn direction="up">
                                <Image src={head.image} alt={head.name} width={275} height={275} className="rounded-xl"/>
                                <h2 className="text-3xl font-medium mt-3">{head.name}</h2>
                                <p className="text-lg font-light">{head.position}</p>
                                <p className="text-md font-light">{head.dept}</p>
                                <a href={head.linkedin} target="_blank"><button className="border-[1px] rounded-sm h-8 w-25 mt-3 hover:text-white hover:bg-black">CONNECT</button></a>
                            </SlideIn>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};