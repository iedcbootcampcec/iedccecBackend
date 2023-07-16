import { About, Achievements, Announcement, Iet, Vanta } from "@/components"
import { firestore } from "@/utils/firebase"

export default function Home({ AnnouncementData, AchievementsData }) {
  return (
    <>
      <Vanta />
      <div className="sm:px-16 px-5 w-full">
        <Iet />
        <Announcement AnnouncementData={AnnouncementData} />
        <Achievements AchievementsData={AchievementsData} />
        <About />
      </div>
    </>
  )
}
//Server side fetching from firebase
//-------------------------------------------------------------------------------------------------------//
export async function getServerSideProps() {
  try {
    const AnnouncementSnapshot = await firestore
      .collection("Announcement")
      .get()
    const AnnouncementData = AnnouncementSnapshot.docs.map(doc => doc.data())

    const AchievementsSnapshot = await firestore
      .collection("Achievements")
      .get()
    const AchievementsData = AchievementsSnapshot.docs.map(doc => doc.data())

    return {
      props: {
        AnnouncementData,
        AchievementsData,
      },
    }
  } catch (error) {
    console.error("Error fetching data from Firestore:", error)

    return {
      props: {
        AnnouncementData: [],
        AchievementsData: [],
      },
    }
  }
}
