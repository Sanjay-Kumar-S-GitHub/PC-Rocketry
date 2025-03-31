import HomeTop from "@/components/home/HomeTop";
import Middle from "@/components/home/Middle";
import ContactUs from "@/components/home/ContactUs";
import NewsUpdates from "@/components/home/NewsUpdates";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <HomeTop/>
      <Middle/>
      <NewsUpdates/>
      <ContactUs/>
    </>
  );
}
