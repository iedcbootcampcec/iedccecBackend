
import Card from '../components/Card'
import React ,{useEffect} from 'react'
import "aos/dist/aos.css"
import AOS from "aos"
import{motion, spring} from 'framer-motion'
import { firestore } from "@/utils/firebase"









export async function getServerSideProps() {
  try {
    const AnnouncementSnapshot = await firestore
      .collection("Announcement")
      .get()
    const AnnouncementData = AnnouncementSnapshot.docs.map(doc => doc.data())

   
    return {
      props: {
        AnnouncementData,
        
      },
    }
  } catch (error) {
    console.error("Error fetching data from Firestore:", error)

    return {
      props: {
        AnnouncementData: [],
      },
    }
  }
}



function Events({AnnouncementData}) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const openEvents = AnnouncementData.filter((item) => item.link !== "closed");
  const closedEvents = AnnouncementData.filter((item) => item.link === "closed");

  return (
    <motion.div  className="bg-white flex flex-col justify-start items-center h-fit w-full mt-20 mb-10 ml-3">
      <div className="font-bold text-[50px]" data-aos="fade-up" >Events</div>
      <div className="flex flex-wrap justify-center items-start gap-10 w-full mt-5 mx-[300px]">
        {openEvents.map((item) =>
          (
            <Card key={item.title} {...item} />
          )
        )}
        {closedEvents.map((item) =>
          (
            <Card key={item.title} {...item} />
          )
        )}
      </div>
    </motion.div>
  );
}

export default Events