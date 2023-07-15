import { Announcement, Vanta } from "@/components"
import { firestore } from "@/utils/firebase"

export default function Home({team}) {
  return (
    <>
      <Vanta />
      <div className="sm:px-16 px-10 w-full">
        <Announcement />
        {team.map(member => (
          <h1>{member.name}</h1>
        ))}
      </div>
    </>
  )
}
export async function getServerSideProps() {
  try {
    const querySnapshot = await firestore.collection("team").get()
    const fetchedData = querySnapshot.docs.map(doc => doc.data())

    return {
      props: {
        team: fetchedData,
      },
    }
  } catch (error) {
    console.error("Error fetching data from Firestore:", error)

    return {
      props: {
        team: [],
      },
    }
  }
}
