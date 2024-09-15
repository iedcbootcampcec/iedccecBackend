import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import loading from "../images/circleLoader.svg";
import Image from "next/image";

//i used chatGPT to convert my css to tailwindcss 💀 oh well it works

function PitchAnIdea() {
  const [pitch, setPitch] = useState("");
  const [isJudged, setIsJudged] = useState(false);

  const PitchForm = (props) => {
    const [pitch, setPitch] = useState("");

    return (
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-2xl mb-4 font-poppins">Pitch an idea!!!!</h1>
        <textarea
          className="w-4/5 min-h-[80%] mb-4 resize-none outline-none border-none p-2 text-base text-gray-600 font-poppins"
          placeholder="Tell me about your idea and what problem it fixes...."
          value={pitch}
          onChange={(e) => setPitch(e.target.value)}
        />
        <button
          className="w-1/2 h-[20%] bg-black text-white text-base border-none rounded-2xl font-poppins p-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 md:w-[70%]"
          onClick={() => {
            if (pitch.trim() === "") return;
            props.setPitch(pitch);
            props.setIsJudged(true);
          }}
        >
          Submit
        </button>
      </div>
    );
  };

  const Judgement = ({ pitch, setIsJudged, setPitch }) => {
    const [rating, setRating] = useState("0/10");
    const [judgement, setJudgement] = useState("");
    const [comment, setComment] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = async () => {
      try {
        const response = await responeGen(pitch);
        setRating(
          response
            .split("**IdeaRate:")[1]
            .split("**Judgment:**")[0]
            .split("**")[1]
            .trim()
        );
        setJudgement(
          response
            .split("**Judgment:")[1]
            .split("**Comment:**")[0]
            .trim()
            .split("**")[1]
        );
        setComment(response.split("**Comment:")[1].trim().split("**")[1]);
      } catch (e) {
        setComment("");
        setJudgement("please provide a valid entry");
        setRating("N/A");
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    const genAI = new GoogleGenerativeAI(
      "AIzaSyA6QQ5LB53cEzPeVADKZ8tQcVwJZ9ZSakA"
    );

    async function responeGen(idea) {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [
              {
                text: "you are a virtual investor and you will be given an idea your job is to rate that out of /10 give a judgement about how good it is and stuff and also give a short comment on it about 200 characters also act professionly and motivate, give in order **ideaRate:** **Judgment:** **Comment:**",
              },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 100,
        },
      });

      const msg = idea;

      const result = await chat.sendMessage(msg);
      return await result.response.text();
    }

    useEffect(() => {
      handleSubmit();
    }, [pitch]);

    return (
      <>
        {isLoading ? (
          <Image src={loading} alt="loading" width={"100%"} height={"100%"} />
        ) : (
          <>
            <div className="text-base font-bold font-poppins">{rating}</div>
            <div className="flex flex-col items-center justify-center w-full mb-4">
              <h2 className="text-xl mb-2 font-poppins">{judgement}</h2>
              <p className="text-base font-poppins text-gray-600">{comment}</p>
            </div>
            <button
              className="w-1/2 h-[20%] bg-black text-white text-base border-none rounded-2xl font-poppins p-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 md:w-[70%]"
              onClick={() => {
                setIsJudged(false);
                setPitch("");
                setJudgement("");
                setComment("");
                setRating(0);
                setIsLoading(true);
              }}
            >
              Go Back
            </button>
          </>
        )}
      </>
    );
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col items-center justify-center min-h-[35%] w-full p-2 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:w-[70%]">
        {isJudged ? (
          <Judgement
            pitch={pitch}
            setIsJudged={setIsJudged}
            setPitch={setPitch}
          />
        ) : (
          <PitchForm setPitch={setPitch} setIsJudged={setIsJudged} />
        )}
      </div>
    </div>
  );
}

export default PitchAnIdea;
