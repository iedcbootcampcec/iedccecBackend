import {
  About,
  Achievements,
  Announcement,
  Iet,
  Team,
  Testimonials,
  Vanta,
} from "@/components"
import { firestore } from "@/utils/firebase"

export default function Home({
  AnnouncementData,
  AchievementsData,
  Team24Data,
  SubTeamData,
  TestimonialsData,
  FacultyData,
}) {
  return (
    <>
      <Vanta />
      <div className="sm:px-16 px-5 w-full">
        <Iet />
        <Announcement AnnouncementData={AnnouncementData} />
        <Achievements AchievementsData={AchievementsData} />
        <About />
        <Team title="Faculty" time={4000} TeamData={FacultyData} />
        <Team title="The Team" time={3000} TeamData={SubTeamData} />
        <Team title="The SubTeam" time={4000} TeamData={Team24Data} />
        <Testimonials TestimonialsData={TestimonialsData} />
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

    const FacultySnapshot = await firestore.collection("Faculty").get()
    const FacultyData = FacultySnapshot.docs.map(doc => doc.data())

    const SubTeamSnapshot = await firestore.collection("SubTeam").orderBy("id").get()
    const SubTeamData = SubTeamSnapshot.docs.map(doc => doc.data())

    const Team24Snapshot = await firestore.collection("Team 24").orderBy("id").get()
    const Team24Data = Team24Snapshot.docs.map(doc => doc.data())

    const TestimonialsSnapshot = await firestore
      .collection("Testimonials")
      .get()
    const TestimonialsData = TestimonialsSnapshot.docs.map(doc => doc.data())

    return {
      props: {
        AnnouncementData,
        AchievementsData,
        Team24Data,
        SubTeamData,
        TestimonialsData,
        FacultyData,
      },
    }
  } catch (error) {
    console.error("Error fetching data from Firestore:", error)

    return {
      props: {
        AnnouncementData: [],
        AchievementsData: [],
        Team24Data: [],
        SubTeamData: [],
        TestimonialsData: [],
        FacultyData: [],
      },
    }
  }
}
