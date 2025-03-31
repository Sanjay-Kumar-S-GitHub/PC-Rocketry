import MissionsTop from "@/components/missions/MissionsTop";
import PreviousProjects from "@/components/missions/PreviousProjects";
import UpcomingProjects from "@/components/missions/UpcomingProjects";

export const dynamic = "force-static";

export default function Missions(){
    return(
        <>
            <MissionsTop/>
            <PreviousProjects/>
            <UpcomingProjects/>
        </>
    )
}