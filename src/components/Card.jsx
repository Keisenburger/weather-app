import { MapPin, House, Heart, User } from "lucide-react";

export const CardDay = ({ weather }) => {
  return (
    <div
      className={`bg-[#F3F4F6] z-10  w-1/2 h-full flex justify-center items-center relative`}
    >
      <img
        src="orangeEclipse.png"
        alt="orangeEclipse"
        className="absolute z-0 w-[128px] top-[10%] left-[25%]"
      />

      <div
        className={`rounded-[48px] w-[434px] p-12 flex flex-col items-center gap-12 absolute  shadow-xl backdrop-blur-md z-30 bg-[#FFFFFFBF] `}
      >
        <div className=" w-full ">
          <p className={` text-lg  font-medium text-[#111827]`}>
            {weather?.forecast?.forecastday[0].date}
          </p>
          <div className="flex justify-between">
            <p className={`  text-5xl font-extrabold text-[#111827]`}>
              {weather?.location?.name}
            </p>
            <MapPin size={32} color={"black"} />
          </div>
        </div>
        <img src={`sun.png`} alt="sun" className="size-[260px] " />
        <div>
          <p
            className={`bg-gradient-to-b bg-clip-text text-[144px]  text-transparent font-extrabold from-[#111827] to-[#6B7280] `}
          >
            {weather?.forecast?.forecastday[0].hour[14].temp_c}°
          </p>
          <p className={`text-[#FF8E27] text-2xl font-extrabold`}>
            {weather?.forecast?.forecastday[0].hour[14].condition.text}
          </p>
        </div>
        <div className=" w-full flex justify-between">
          <House size={32} color={"black"} />
          <MapPin size={32} color="gray" />
          <Heart size={32} color="gray" />
          <User size={32} color="gray" />
        </div>
      </div>
    </div>
  );
};

export const CardNight = ({ weather }) => {
  return (
    <div
      className={
        " bg-[url(/bg.png)] bg-no-repeat bg-center bg-cover w-1/2 h-full flex justify-center items-center relative"
      }
    >
      <img
        src="violetEclipse.png"
        alt="violetEclipse"
        className="absolute z-0 w-[128px] bottom-[10%] right-[25%] "
      />

      <div
        className={
          "rounded-[48px] w-[414px] z-10  bg-[#111827BF] p-12 flex flex-col items-center gap-12 absolute  shadow-xl backdrop-blur-md"
        }
      >
        <div className=" w-full ">
          <p className={` text-lg  font-medium "text-[#9CA3AF]"`}>
            {weather?.forecast?.forecastday[0].date}
          </p>
          <div className="flex justify-between">
            <p className={`  text-5xl font-extrabold text-white `}>
              {weather?.location?.name}
            </p>
            <MapPin size={32} color={"gray"} />
          </div>
        </div>
        <img src={`moon.png`} alt="moon" className="size-[260px] " />
        <div>
          <p
            className={`bg-gradient-to-b bg-clip-text from-[#F9FAFB] to-[#111827] text-[144px]  text-transparent font-extrabold`}
          >
            {weather?.forecast?.forecastday[0].hour[5].temp_c}°
          </p>
          <p className={` text-2xl font-extrabold text-[#777CCE]`}>
            {weather?.forecast?.forecastday[0].hour[5].condition.text}
          </p>
        </div>
        <div className=" w-full flex justify-between">
          <House size={32} color={"white"} />
          <MapPin size={32} color="gray" />
          <Heart size={32} color="gray" />
          <User size={32} color="gray" />
        </div>
      </div>
    </div>
  );
};
