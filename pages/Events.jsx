
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
        AchievementsData: [],
        TeamData: [],
        SubTeamData: [],
        TestimonialsData: [],
        FacultyData: [],
      },
    }
  }
}

// const items=[
//   {
//     'title': 'Event1',
//     'image': '',
//     'description': "As part of WE_WEEK IEDC We Cell is here with an exciting Design Workshop to aid you to create stunning designs using Figma.Whether you're a beginner or an experienced designer, you'll walk away with skills,  .",
//     'link':"cloniuuion",
//     'Date':'MM/DD/YYYY',
    
//   },
//   {
//     'title': 'Event2',
//     'image': 'http://',
//     'description': "IEDC WE Cell is here with Introduction to JavaScript, 5-day workshop to learn to use JS and create dynamic and interactive web pages. The session will be handled by Nandkishor R(Fullstack web developer, Freelancer).",
//     'link':"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//     'Date':'MM/DD/YYYY',
    
//   },
//   {
//     'title': 'Event3',
//     'image': 'http://',
//     'description': "Get ready to unleash your skills and join us in TechForge the daily challenge by IEDC Bootcamp CEC. Whether you are a hardware enthusiast, a coding whiz, or a design guru, there is something for everyone!",
//     'link':"closed",
//     'Date':'MM/DD/YYYY',
    
//   },
//   {
//     'title': 'Event4',
//     'image': 'http://',
//     'description': "We are excited to introduce the new leadership team, EXECOM 2023-24 of IEDC BOOTCAMP CEC. This dedicated group of members is eager to lead IEDC CEC towards success in innovation and entrepreneurship.",
//     'link':"closed",
//     'Date':'MM/DD/YYYY',
//   },
//   {
//     'title': 'Event5',
//     'image': 'http://',
//     'description': 'dcdhbhwbdhvqwjhcvjevbcjhbjhqevbchvbejecvrvervreververvvfevrtvfvrvtrvevrsdcsdvesbrnthntbefbeagbnerrgwrvdwvergergvergrwgrrgregergr',
//     'link':"closed",
//     'Date':'MM/DD/YYYY',
//   },
//   {
//     'title': 'Event6',
//     'image': 'http://',
//     'description': 'dcdhbhwbdhvqwjhcvjevbcjhbjhqevbchvbejhebesgvergvgrrgvwrgvwrrfqfwefwevevevregyhu6niukmujyhbgvfdcunhtbgvfcds gbfvdc',
//     'link':"closed",
//     'Date':'MM/DD/YYYY',
//   },
//   {
//     'title': 'Event7',
//     'image': 'http://',
//     'description': 'dcdhbhvdfbgmjk,lazwxsedcrvftbgynhumjizwaxsedcrvftbgynhujmiawsedrftyghunjikkjhbvcfxdfcgvbhujjikkok,ledxxfcgv hbjn',
//     'link':"clo",
//     'Date':'MM/DD/YYYY',
//   }
  
// ]



function Events({AnnouncementData}) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const openEvents = AnnouncementData.filter((item) => item.link !== "closed");
  const closedEvents = AnnouncementData.filter((item) => item.link === "closed");

  return (
    <motion.div  className="bg-white flex flex-col justify-start items-center h-fit w-full mt-20 mb-10 ml-3">
      <div className="font-bold text-[50px]" data-aos="fade-up" >Events</div>
      <div className="flex flex-wrap justify-center items-start gap-7 w-full mt-5 mx-[300px]">
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