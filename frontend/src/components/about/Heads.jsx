// import Image from "next/image";

import { memo } from "react";

// const Heads=({teamData})=>{

//     const heads=teamData.filter((member)=>member.head===true);

//     return(
//         <>
//             <h1>HEADS</h1>
//             {
//            heads.map((head)=>(
//                 <div key={head.id}>
//                     <Image src={head.image} alt={head.name} width={100} height={100}/>
//                     <h2>{head.name}</h2>
//                     <p>{head.position}</p>
//                     <a href={head.linkedin}><button>CONNECT</button></a>
//                 </div>
//            ))
//         }
//         </>
//     )
// }

// export default Heads;

import Image from "next/image";

const Heads = ({ teamData = [] }) => {
    console.log("Team Prop:", teamData); 

    if (!teamData.length) {
        return <p>No team members found.</p>;
    }

    const headCommittee = teamData.filter((teamMember)=>(teamMember.committee==="head"));
    console.log("headCommittee Prop:", headCommittee);

    const heads = headCommittee[0].members;
    console.log("Heads Prop:", heads);

    return (
        <div className="flex flex-col justify-center items-center my-30">
            <h1 className="text-5xl font-medium">HEADS</h1>
            <div className={`${heads.length < 3 ? "flex flex-row justify-around" : "grid grid-cols-3"}`}>
                {
                    heads.map((head)=>(
                        <div key={head.id} className={`${heads.length < 3 ? "mx-40 mt-15 text-center" : "mx-15 mt-15 text-center"}`}>
                            <Image src={head.image} alt={head.name} width={250} height={250}/>
                            <h2 className="text-3xl font-medium mt-3">{head.name}</h2>
                            <p className="text-lg font-light">{head.position}</p>
                            <p className="text-md font-light">{head.dept}</p>
                            <a href={head.linkedin}><button className="border-[1px] rounded-sm h-8 w-25 mt-3 hover:text-white hover:bg-black">CONNECT</button></a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Heads;
