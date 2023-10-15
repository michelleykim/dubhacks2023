import React from "react";
import LandingLinkInput from "../src/frontend/LandingLinkInput";
import { useRouter } from "next/router";
import { useState } from "react";

const Landing = () => {
  const router = useRouter();
  const [link, setLink] = useState("");

  const onChange = (e) => {
    setLink(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/home?link=${link}`);
  };

  return (
    <div className={`App w-screen h-screen dark overflow-hidden`}>
      <div
        className="px-[5vw] h-full w-full flex flex-row items-center text-black dark:text-white bg-white dark:bg-black"
        id="main-content"
      >
        <div className="flex flex-col mx-auto w-1/3 relative z-10 mt-[-100px]"> {/* <-- Added mt-[-20] here */}
          <p className="my-2 drop-shadow-['0px 0px 22px rgba(123, 159, 174, 0.70)] text-[#F2F4FB] text-[128px] leading-[8rem] font-semibold font-['Syne']">synthesis</p>
          <p className="my-2 bg-gradient-to-r from-[#D7FFF0] to-[#7BFFCF] font-['Syne'] bg-clip-text text-transparent text-[55px] font-semibold">where curiosity thrives.</p>
          <p className="my-2 text-[#B0D5E1] text-[22px] mb-8">reimagining the video learning experience, empowering you to master any topic on the web.</p>
          <LandingLinkInput onChange={onChange} value={link} onSubmit={onSubmit} />
          </div>
          <img src="/assets/bird.svg" className="absolute bottom-[30%] right-[20%] w-[10vw] h-[10vw] object-contain" alt="bird" />
      </div>
      <img className="absolute bottom-0 z-0 w-full h-full" src="assets/landingBackground.png"></img>
    </div>
  );
};

export default Landing;
