import { Announcement, Iet, Vanta } from "@/components"
import { firestore } from "@/utils/firebase"

export default function Home({ AnnouncementData }) {
  return (
    <>
      <Vanta />
      <div className="sm:px-16 px-5 w-full">
        <Iet />
        <Announcement AnnouncementData={AnnouncementData} />
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
