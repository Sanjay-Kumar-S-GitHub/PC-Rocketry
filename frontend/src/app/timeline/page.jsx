import OurTimeline from "@/components/timeline/OurTimeline";
import TimelineTop from "@/components/timeline/TimelineTop";

export const dynamic = "force-static";

export default function Timeline(){
    return(
        <>
            <TimelineTop/>
            <OurTimeline />
        </>
    )
}