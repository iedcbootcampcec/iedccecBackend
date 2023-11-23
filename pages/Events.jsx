import Card from "../components/Card"
import React, { useEffect } from "react"
import "aos/dist/aos.css"
import AOS from "aos"
import { motion, spring } from "framer-motion"
import { firestore } from "@/utils/firebase"

export async function getServerSideProps() {
  try {
    const EventsSnapshot = await firestore
      .collection("Events")
      .get()
    const EventsData = EventsSnapshot.docs.map(doc => doc.data())

    return {
      props: {
        EventsData,
      },
    }
  } catch (error) {
    console.error("Error fetching data from Firestore:", error)

    return {
      props: {
        EventsData: [],
      },
    }
  }
}

function Events({ EventsData }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const openEvents = EventsData ? EventsData.filter(item => item.link !== "closed") : [];
  const openEventsSorted = openEvents.sort((a, b) =>a.date < b.date ? 1:-1,); 

  const closedEvents = EventsData ? EventsData.filter(item => item.link === "closed") : [];
  const closedEventsSorted = closedEvents.sort((a, b) =>a.date < b.date ? 1:-1,); 


  return (
    <motion.div
      className="bg-white flex flex-col justify-start items-center h-full w-full mt-20 mb-10 ml-3"
      style={{ overflow: "hidden" }}
    >
      <div className="font-bold text-[50px]" data-aos="fade-up">
        Events
      </div>
      <div className="flex flex-wrap justify-center items-start gap-32 w-full mt-5 mx-[300px]">
        {openEventsSorted.map(item => (
          <Card key={item.title} {...item} />
        ))}
        
        {closedEventsSorted.map(item => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </motion.div>
  )
}

export default Events
