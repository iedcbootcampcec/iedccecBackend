import {
  About,
  Achievements,
  Announcement,
  Iet,
  Team,
  Testimonials,
  Vanta,
  Recomen,
} from "@/components";
import TicTakTo from "@/components/TicTakTo";
import PitchAnIdea from "@/components/PitchAnIdea";
import { firestore } from "@/utils/firebase";
import { useEffect } from "react";

export default function Home({
  AnnouncementData,
  AchievementsData,
  Team24Data,
  SubTeamData,
  TestimonialsData,
  FacultyData,
}) {
  // const teamData = [
  //   {
  //     id: 1,
  //     image:
  //       "Team%2025%2FVimal-Vinod.webp?alt=media&token=df37a48e-afeb-4858-baf2-8e980aff9e70",
  //     linkedin: "",
  //     name: "Vimal Vinod V",
  //     position: "Program Manager",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "Team%2025%2FAbhiRaj.webp?alt=media&token=463b9a78-afcd-4c41-8d64-c7158c2c45a7",
  //     linkedin: "",
  //     name: "Abhi Raj",
  //     position: "Video Editor",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "Team%2025%2FDevika-Lakshmi-M.webp?alt=media&token=a5749802-45f8-4e77-a859-3b0cf35ba1cf",
  //     linkedin: "",
  //     name: "Devika Lakshmi M",
  //     position: "Designer",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "Team%2025%2FM-Aswathy_.webp?alt=media&token=6936c2ae-6a14-4924-9c23-a6fe967d4b91",
  //     linkedin: "",
  //     name: "M Aswathy",
  //     position: "Content Writer",
  //   },
  //   {
  //     id: 5,
  //     image: "Team%2025%2FSanjeev%20S%20Nair%20(1).webp?alt=media&token=20b95d90-e1fa-4141-ba58-f152c1d95c20",
  //     linkedin: "",
  //     name: "Sanjeev S Nair",
  //     position: "Video Editor",
  //   },
  //   {
  //     id: 6,
  //     image:
  //       "Team%2025%2FAnanya-P-Santh.webp?alt=media&token=4b0e06ee-5d79-43ed-96b3-91373b8ff5e1",
  //     linkedin: "",
  //     name: "Ananya P Santh",
  //     position: "Content Writer",
  //   },
  //   {
  //     id: 7,
  //     image:
  //       "Team%2025%2FChristo-Pius_.webp?alt=media&token=01e894c3-e1f1-45ae-b62b-629296bb8d8c",
  //     linkedin: "",
  //     name: "Christo Pius",
  //     position: "Marketing and Social Media Manager",
  //   },
  //   {
  //     id: 8,
  //     image:
  //       "Team%2025%2FGovind-J-S.webp?alt=media&token=1400dab4-edc4-43b7-bfe1-bf88fbe4258f",
  //     linkedin: "",
  //     name: "Govind J S",
  //     position: "Designer",
  //   },
  //   {
  //     id: 9,
  //     image:
  //       "Team%2025%2FAjmal-Ashraf.webp?alt=media&token=aa8c7f36-38b5-4b9a-8ec2-f11cf7c845ce",
  //     linkedin: "",
  //     name: "Ajmal Ashraf",
  //     position: "Designer",
  //   },
  //   {
  //     id: 10,
  //     image:
  //       "Team%2025%2FMahadevan-Reji.webp?alt=media&token=189ee5f7-8c26-4802-82f7-8fab81daed46",
  //     linkedin: "",
  //     name: "Mahadevan Reji",
  //     position: "Web Manager",
  //   },
  // ];

  // useEffect(() => {
  //   const updateTeamCollection = async () => {
  //     try {
  //       const teamCollectionRef = firestore.collection("Team 25");

  //       // Fetch existing documents and delete them
  //       const snapshot = await teamCollectionRef.get();
  //       const deletePromises = snapshot.docs.map((doc) => doc.ref.delete());
  //       await Promise.all(deletePromises);
  //       console.log("Old Team 25 data cleared.");

  //       // Upload new team data
  //       const uploadPromises = teamData.map((member) =>
  //         teamCollectionRef.doc(member.id.toString()).set(member)
  //       );
  //       await Promise.all(uploadPromises);
  //       console.log("New Team 25 data uploaded successfully.");
  //     } catch (error) {
  //       console.error("Error updating Team 25 collection:", error);
  //     }
  //   };

  //   //updateTeamCollection();
  // }, []);

  return (
    <>
      <Vanta />
      <div className="sm:px-16 px-5 w-full">
        <Iet />

        <div className="flex  flex-wrap md:flex-nowrap items-center gap-10 pb-20 mb-20 md:mb-0 pd-0">
          <Announcement AnnouncementData={AnnouncementData} />
          <PitchAnIdea />
        </div>
        <Achievements AchievementsData={AchievementsData} />
        <About />
        <Team title="Faculty" time={4000} TeamData={FacultyData} />
        <Team title="The Team" time={3000} TeamData={SubTeamData} />
        <Team title="The SubTeam" time={4000} TeamData={Team24Data} />
        <Testimonials TestimonialsData={TestimonialsData} />
      </div>
    </>
  );
}
//Server side fetching from firebase
//-------------------------------------------------------------------------------------------------------//
export async function getServerSideProps() {
  try {
    const AnnouncementSnapshot = await firestore
      .collection("Announcement")
      .get();
    const AnnouncementData = AnnouncementSnapshot.docs.map((doc) => doc.data());

    const AchievementsSnapshot = await firestore
      .collection("Achievements")
      .get();
    const AchievementsData = AchievementsSnapshot.docs.map((doc) => doc.data());

    const FacultySnapshot = await firestore.collection("Faculty").get();
    const FacultyData = FacultySnapshot.docs.map((doc) => doc.data());

    const SubTeamSnapshot = await firestore
      .collection("Team 24")
      .orderBy("id")
      .get();
    const SubTeamData = SubTeamSnapshot.docs.map((doc) => doc.data());

    const Team24Snapshot = await firestore
      .collection("Team 25")
      .orderBy("id")
      .get();
    const Team24Data = Team24Snapshot.docs.map((doc) => doc.data());

    const TestimonialsSnapshot = await firestore
      .collection("Testimonials")
      .get();
    const TestimonialsData = TestimonialsSnapshot.docs.map((doc) => doc.data());

    return {
      props: {
        AnnouncementData,
        AchievementsData,
        Team24Data,
        SubTeamData,
        TestimonialsData,
        FacultyData,
      },
    };
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);

    return {
      props: {
        AnnouncementData: [],
        AchievementsData: [],
        Team24Data: [],
        SubTeamData: [],
        TestimonialsData: [],
        FacultyData: [],
      },
    };
  }
}
