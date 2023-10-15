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
        <div className="flex flex-col mx-auto w-1/3">
          <p>Synthesis</p>

          <LandingLinkInput onChange={onChange} value={link} onSubmit={onSubmit} />
          </div>
      </div>
    </div>
  );
};

export default Landing;
