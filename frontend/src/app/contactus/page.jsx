import Address from "@/components/contactus/Address"
import ContactTop from "@/components/contactus/ContactTop"
import ContactUs from "@/components/home/ContactUs"

export const dynamic = "force-static";

export default function Contact(){
    return(
        <>
            <ContactTop/>
            <Address/>
            <ContactUs/>
        </>
    )
}