import type { NextPage } from "next";
import Image from "next/image";

const Chatbot: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#015f9d,_#38a6dc_50%,_#cae1f5)] h-[900px] overflow-hidden text-left text-lg text-gray font-superstar">
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
        className="absolute h-[6.67%] w-[4.17%] top-[84.44%] right-[90.28%] bottom-[8.89%] left-[5.56%] max-w-full overflow-hidden max-h-full"
        width={60}
        height={60}
        alt=""
        src="/song.svg"
      />
      <Image
        className="absolute top-[calc(50%_-_182px)] left-[calc(50%_-_210px)] w-[420px] h-[421px] object-cover"
        width={420}
        height={421}
        alt=""
        src="/benti GIF 1.svg"
      />
      <div className="absolute top-[192px] left-[716px] w-[299px] h-[67px] overflow-hidden">
        <Image
          className="absolute h-[99.85%] w-full top-[0%] right-[0%] bottom-[0.15%] left-[0%] max-w-full overflow-hidden max-h-full"
          width={299}
          height={67}
          alt=""
          src="/Group.svg"
        />
        <Image
          className="absolute h-[32.24%] w-[6.02%] top-[19.4%] right-[23.41%] bottom-[48.36%] left-[70.57%] max-w-full overflow-hidden max-h-full"
          width={18}
          height={22}
          alt=""
          src="/Group.svg"
        />
        <div className="absolute top-[12px] left-[20px] leading-[30px]">
          Salut je suis Halima :D
        </div>
      </div>
      <div className="absolute top-[716px] left-[calc(50%_-_238px)] w-[476px] h-[54px] overflow-hidden">
        <Image
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          width={476}
          height={54}
          alt=""
          src="/Group.svg"
        />
        <div className="absolute top-[22.22%] left-[4.2%] leading-[30px]">
          posez-moi une questions...
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
