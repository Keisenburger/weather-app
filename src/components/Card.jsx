import { MapPin, House, Heart, User } from "lucide-react";

const Card = ({ weather, isDark }) => {
  // console.log("Card", weather?.forecast?.forecastday[0].hour[5].condition.text);

  return (
    <div
      className={
        isDark
          ? " bg-[url(/bg.png)] bg-no-repeat bg-center bg-cover w-1/2 h-full flex justify-center items-center relative"
          : `bg-[#F3F4F6] z-10  w-1/2 h-full flex justify-center items-center relative`
      }
    >
      {isDark ? (
        <img
          src="violetEclipse.png"
          alt="violetEclipse"
          className="absolute z-0 w-[128px] bottom-[10%] right-[25%] "
        />
      ) : (
        <img
          src="orangeEclipse.png"
          alt="orangeEclipse"
          className="absolute z-0 w-[128px] top-[10%] left-[25%]"
        />
      )}

      <div
        className={`w-[414px]  rounded-[48px] p-12 flex flex-col items-center gap-12 absolute  shadow-xl backdrop-blur-md ${
          isDark ? "z-10  bg-[#111827BF] " : "z-30 bg-[#FFFFFFBF]"
        } `}
      >
        <div className=" w-full ">
          <p
            className={` text-lg  font-medium ${
              isDark ? "text-[#9CA3AF]" : "text-[#111827]"
            }`}
          >
            {weather?.forecast?.forecastday[0].date}
          </p>
          <div className="flex justify-between">
            <p
              className={`  text-5xl font-extrabold ${
                isDark ? "text-white" : "text-[#111827]"
              }`}
            >
              {weather?.location?.name}
            </p>
            <MapPin size={32} color={` ${isDark ? "gray" : "black"}`} />
          </div>
        </div>
        <img
          src={`${isDark ? "moon" : "sun"}.png`}
          alt=""
          className="size-[260px] "
        />
        <div className="w-full ">
          <p
            className={`bg-gradient-to-b   bg-clip-text text-[144px]  text-transparent font-extrabold ${
              isDark
                ? "from-[#F9FAFB] to-[#111827]"
                : "from-[#111827] to-[#6B7280]"
            } `}
          >
            {isDark
              ? weather?.forecast?.forecastday[0].hour[5].temp_c
              : weather?.forecast?.forecastday[0].hour[14].temp_c}
          </p>
          <p
            className={`${
              isDark ? "text-[#777CCE]" : "text-[#FF8E27]"
            } text-2xl font-extrabold`}
          >
            {isDark
              ? weather?.forecast?.forecastday[0].hour[5].condition.text
              : weather?.forecast?.forecastday[0].hour[14].condition.text}
          </p>
        </div>
        <div className=" w-full flex justify-between">
          <House size={32} color={` ${isDark ? "white" : "black"}`} />
          <MapPin size={32} color="gray" />
          <Heart size={32} color="gray" />
          <User size={32} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Card;
