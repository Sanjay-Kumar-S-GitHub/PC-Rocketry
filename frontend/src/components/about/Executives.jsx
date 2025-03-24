import Image from "next/image";

const Executives = ({ teamData = [] }) => {
    console.log("Team Prop:", teamData); 

    if (!teamData.length) {
        return <p>No team members found.</p>;
    }

    const executiveCommittee = teamData.filter((teamMember)=>(teamMember.committee==="executive"));
    console.log("executiveCommittee Prop:", executiveCommittee);

    const executives = executiveCommittee[0].members;
    console.log("Executives Prop:", executives);

    return (
        <div className="flex flex-col justify-center items-center my-30">
            <h1 className="text-5xl font-medium">EXECUTIVES</h1>
            <div className={`${executives.length < 3 ? "flex flex-row justify-around" : "grid grid-cols-3"}`}>
                {
                    executives.map((head)=>(
                        <div key={head.id} className={`${executives.length < 3 ? "mx-40 mt-20 text-center" : "mx-20 mt-20 text-center"}`}>
                            <Image src={head.image} alt={head.name} width={250} height={250} className="rounded-xl"/>
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

export default Executives;
