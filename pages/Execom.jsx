import React, { useState, useEffect } from "react";
import { firestore } from "@/utils/firebase";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import user from "../images/user.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

async function fetchData(TeamName) {
  try {
    const TeamSnapshot = await firestore
      .collection(TeamName)
      .orderBy("id")
      .get();
    const TeamsData = TeamSnapshot.docs.map((doc) => doc.data());
    return TeamsData;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    return [];
  }
}

const Execom = ({ TeamsData }) => {
  const [activeYear, setActiveYear] = useState(2023);
  const [noNext, setNoNext] = useState(false);
  const [noPrevious, setNoPrevious] = useState(false);
  const [activeNo, setActiveNo] = useState(23);
  const [slidemove, setSlidemove] = useState("fade-up");
  const [TeamData, setTeamData] = useState(TeamsData);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [activeNo]);

  const handlePrevious = () => {
    if (activeYear > 2017) {
      setActiveYear(activeYear - 1);
      setActiveNo(activeNo - 1);
      setSlidemove("fade-right");
    }
  };

  const handleNext = () => {
    if (activeYear < 2023) {
      setActiveYear(activeYear + 1);
      setActiveNo(activeNo + 1);
      setSlidemove("fade-left");
    }
  };

  useEffect(() => {
    setNoPrevious(activeYear <= 2017);
    setNoNext(activeYear >= 2023);
  }, [activeYear]);

  useEffect(() => {
    const fetchAndUpdateData = async () => {
      try {
        const teamName = `Team ${activeNo}`;
        const newTeamData = await fetchData(teamName);
        setTeamData(newTeamData);
        setIsPending(false);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchAndUpdateData();
  }, [activeNo]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="bg-white flex flex-col justify-start items-center h-full w-full mt-20 mb-10   overflow-hidden"
      style={{ overflow: "hidden" }}
    >
      <div className="w-full h-fit text-center font-bold text-[50px]">
        Execoms
      </div>
      <div className="w-full mt-5 ml-8 text-[25px] flex gap-3">
        <button
          onClick={handlePrevious}
          disabled={noPrevious}
          className={`rounded-[100%] h-10 w-10 flex justify-center items-center transition-all duration-500 ${
            noPrevious ? "opacity-10" : "hover:bg-slate-300 hover:scale-105 "
          }`}
        >
          <GrLinkPrevious className="hover:scale-105" />
        </button>
        <p className="transition-all duration-1000">{activeYear}</p>
        <button
          onClick={handleNext}
          disabled={noNext}
          className={` rounded-[100%] h-10 w-10 flex justify-center items-center transition-all duration-500 ${
            noNext ? "opacity-10" : "hover:bg-slate-300 hover:scale-105 "
          }`}
        >
          <GrLinkNext />
        </button>
      </div>
      <div className="flex flex-wrap gap-4 mt-7 justify-center">
        {loading ? (
          <div className="h-[100vh]  ">loading....</div>
        ) : (
          TeamData &&
          TeamData.map((item) => (
            <div
              key={item.name}
              className="w-56 mx-7 mt-14 mb-14 h-[230px] bg-white border-gray-300 rounded-2xl shadow-xl  transition-all duration-100"
              data-aos={slidemove}
            >
              <div className="p-2 flex flex-col items-center justify-center  transition-all duration-300 ">
                <div className="flex items-center relative top-[-80px] shadow-lg justify-center w-44 h-44 rounded-full ">
                  <div className="w-[150px] h-[150px]">
                    {item.image && (
                      <Image
                        src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${item.image}`}
                        width={150}
                        height={150}
                        objectFit="cover"
                        alt="Circular Image"
                        className="rounded-full w-full h-full object-cover"
                      />
                    )}
                    {!item.image && (
                      <Image
                        src={user}
                        width={150}
                        height={150}
                        objectFit="cover"
                        alt="Circular Image"
                        className="rounded-full w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <div className="text-center mt-[-65px]">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  {/* <p className="text-gray-500 text-xs">{item.pos }</p> */}
                  {item.pos && (
                    <p className="text-gray-500 text-xs">{item.pos}</p>
                  )}
                  {!item.pos && (
                    <p className="text-gray-500 text-xs">{item.position}</p>
                  )}
                </div>
                <div className="w-full h-full text-right items-center justify-start mt-3 mb-2 ml-5 flex gap-4 text-gray-600 text-xs">
                  <a href={`${item.linkedin}`} className="text-blue-500">
                    <BsLinkedin className="h-5 w-5" />
                  </a>
                  {item.port && (
                    <a href="#">
                      <BsLink45Deg className="h-5 w-5 opacity-50 hover:opacity-100 transition-all duration-300" />
                    </a>
                  )}
                  {item.email && (
                    <a href={`${item.email}`}>
                      <MdOutlineEmail className="h-6 w-6 opacity-50 hover:opacity-100 transition-all duration-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Execom;
