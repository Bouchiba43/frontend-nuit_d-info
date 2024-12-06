"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const LandingPage: NextPage = () => {
  const [playBtnSrc, setPlayBtnSrc] = useState("/playbtn.svg");
  const [playBtnClicked, setPlayBtnClicked] = useState(false);
  const [chatBtnSrc, setChatBtnSrc] = useState("/chatbtn.svg");
  const [chatBtnClicked, setChatBtnClicked] = useState(false);
  const [songBtnSrc, setSongBtnSrc] = useState("/song.svg");

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#015f9d,_#38a6dc_50%,_#cae1f5)] h-[900px] overflow-hidden text-center text-[24px] text-gray font-superstar">
      <div className="absolute top-[219px] left-[228px] w-[167px] h-[70px] overflow-hidden" />
      <Image
        className="absolute top-[192px] left-[13px] w-[210px] h-[212px] object-cover"
        width={210}
        height={212}
        alt=""
        src="/cloud GIF.gif"
      />
      <Image
        className="absolute top-[569px] left-[177px] w-[210px] h-[212px] object-cover"
        width={210}
        height={212}
        alt=""
        src="/cloud GIF.gif"
      />
      <Image
        className="absolute top-[20px] left-[851px] w-[210px] h-[212px] object-cover"
        width={210}
        height={212}
        alt=""
        src="/cloud GIF.gif"
      />
      <Image
        className="absolute top-[751px] left-[414px] w-44 h-[177px] object-cover"
        width={176}
        height={177}
        alt=""
        src="/cloud GIF.gif"
      />
      <Image
        className="absolute top-[622px] left-[781px] w-[175px] h-[177px] object-cover"
        width={175}
        height={177}
        alt=""
        src="/cloud GIF.gif"
      />
      <Image
        className="absolute top-[315px] left-[133px] w-[175px] h-[177px] object-cover"
        width={175}
        height={177}
        alt=""
        src="/cloud GIF.gif"
      />
      <Image
        className="absolute top-[241px] left-[1090px] w-[186px] h-[188px] object-cover opacity-[0.5]"
        width={186}
        height={188}
        alt=""
        src="/cloud GIF.gif"
      />
      <Image
        className="absolute top-[42px] left-[1287px] w-[210px] h-[212px] object-cover opacity-[0.5]"
        width={210}
        height={212}
        alt=""
        src="/cloud GIF.gif"
      />
      <Image
        className="absolute top-[492px] left-[984px] w-[210px] h-[212px] object-cover"
        width={210}
        height={212}
        alt=""
        src="/cloud GIF.gif"
      />
      <Image
        className="absolute top-[38px] left-[298px] w-[212px] h-[212px] object-cover"
        width={212}
        height={212}
        alt=""
        src="/big cloud GIF.gif"
      />
      <Image
        className="absolute top-[703px] left-[70px] w-[212px] h-[212px] object-cover"
        width={212}
        height={212}
        alt=""
        src="/big cloud GIF.gif"
      />
      <Image
        className="absolute top-[418px] left-[466px] w-[212px] h-[212px] object-cover opacity-[0.5]"
        width={212}
        height={212}
        alt=""
        src="/big cloud GIF.gif"
      />
      <Image
        className="absolute top-[659px] left-[1140px] w-[210px] h-[212px] object-cover"
        width={210}
        height={212}
        alt=""
        src="/big cloud GIF.gif"
      />
      <Image
        className="absolute top-[349px] left-[1194px] w-[210px] h-[212px] object-cover"
        width={210}
        height={212}
        alt=""
        src="/big cloud GIF.gif"
      />
      <Image
        className="absolute top-[80px] left-[80px] w-20 h-[41.9px] overflow-hidden"
        width={80}
        height={42}
        alt=""
        src="/logo.svg"
      />
      <Image
        className="absolute top-[538px] left-[calc(50%_-_120px)] w-60 h-[100px] overflow-hidden"
        width={240}
        height={100}
        alt="Play Game"
        src={playBtnSrc}
        onClick={() => {
          if (!chatBtnClicked) {
            setPlayBtnClicked(true);
            setPlayBtnSrc("/playbtn_clicked.svg");
            setTimeout(() => {
              setPlayBtnSrc("/playbtn.svg");
              // Do not reset chatBtnClicked, so onclick works only once
            }, 100);
            setPlayBtnClicked(false);
          }
        }}
      />
      <Image
        className="absolute top-[648px] left-[calc(50%_-_120px)] w-60 h-[100px] overflow-hidden"
        width={240}
        height={100}
        alt="Chatbot"
        src={chatBtnSrc}
        onClick={() => {
          if (!chatBtnClicked) {
            setChatBtnClicked(true);
            setChatBtnSrc("/chatbtn_clicked.svg");
            setTimeout(() => {
              setChatBtnSrc("/chatbtn.svg");
              // Do not reset chatBtnClicked, so onclick works only once
            }, 100);
            setChatBtnClicked(false);
          }
        }}
      />
      <div className="absolute top-[418px] left-[calc(50%_-_299px)] leading-[30px] font-superstar">
        <p className="m-0">
          Pour la Nuit de l'Info, les Strawhats vous font plonger
        </p>
        <p className="m-0">dans un mini-jeu éducatif sur l'océan ! :D</p>
      </div>
      <div className="absolute top-[250px] left-[calc(50%_-_450px)] w-[900px] h-32 overflow-hidden">
        
      <div className="absolute h-[82.66%] w-[97.58%] top-[6.34%] right-[1.25%] bottom-[11%] left-[1.18%] flex justify-center items-center">
          <Image
            className="max-w-full max-h-full"
            width={900}
            height={300}
            alt=""
            src="/oceanbuddy.svg"
          />
        </div>
      </div>
      <Image
        className="absolute h-[6.67%] w-[4.17%] top-[84.44%] right-[90.28%] bottom-[8.89%] left-[5.56%] max-w-full overflow-hidden max-h-full"
        width={60}
        height={60}
        alt=""
        src={songBtnSrc}
        onClick={() => setSongBtnSrc("/nomusic.svg")}
      />
    </div>
  );
};

export default LandingPage;