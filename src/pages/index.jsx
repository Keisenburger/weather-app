import { Search, MapPin, House, Heart, User } from "lucide-react";
import { PuffLoader } from "react-spinners";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const WeatherApp = () => {
  const { data, error, isLoading } = useSWR(
    `https://countriesnow.space/api/v0.1/countries`,
    fetcher
  );
  console.log(data);
  if (isLoading) {
    return (
      <div className=" w-screen h-screen flex relative bg-[#F3F4F6]">
        <div className="bg-[#F3F4F6] w-1/2 h-full flex justify-center items-center relative z-10 ">
          <PuffLoader />
        </div>
        <div className="absolute left-[50%] flex justify-center items-center top-[50%] z-10 place-items-center">
          <div className="size-[940px] rounded-[50%] border border-white  opacity-30 flex justify-center items-center absolute"></div>
          <div className="size-[540px] rounded-[50%] border border-white  opacity-30 flex justify-center items-center absolute"></div>
          <div className="size-[340px] rounded-[50%] border border-white   opacity-30 flex justify-center items-center absolute"></div>
          <div className="size-[140px] bg-[#F3F4F6] absolute z-50 rounded-[50%] flex gap-4 justify-center items-center">
            <img src="logoLeft.png" alt="" className="h-[86px]" />
            <img src="logoRight.png" alt="" className="h-[86px]" />
          </div>
        </div>
        {/* backside */}
        <div className=" bg-[url(/bg.png)] bg-no-repeat bg-center bg-cover w-1/2 h-full flex justify-center items-center relative ">
          <PuffLoader />
        </div>
      </div>
    );
  }

  return (
    <div className=" w-screen h-screen flex relative bg-[#F3F4F6]">
      <div className="bg-[#F3F4F6] w-1/2 h-full flex justify-center items-center relative z-10 ">
        <img
          src="orangeEclipse.png"
          alt="orangeEclipse"
          className="absolute z-0 w-[128px] top-[10%] left-[25%]"
        />
        <div className="w-[567px] bg-[#FFFFFFBF] h-[80px] rounded-[48px] flex items-center px-6 py-4 gap-4 absolute left-10 top-10">
          <Search size={48} />
          <input
            type="search"
            className=" w-full h-full focus:outline-0 text-[32px] font-bold"
            placeholder="Search"
          />
        </div>
        <div className="w-[414px]  bg-[#FFFFFFBF] rounded-[48px] p-12 flex flex-col items-center gap-12 absolute z-30 shadow-xl backdrop-blur-md">
          <div className=" w-full ">
            <p className=" text-lg text-[#111827] font-medium">
              September 10, 2021
            </p>
            <div className="flex justify-between">
              <p className=" text-[#111827] text-5xl font-extrabold">Kraków</p>
              <MapPin size={32} color="black" />
            </div>
          </div>
          <img src="sun.png" alt="" className="size-[260px] " />
          <div className="w-full ">
            <p className=" bg-gradient-to-b   from-[#111827] to-[#6B7280] bg-clip-text text-[144px]  text-transparent font-extrabold">
              26°
            </p>
            <p className="text-[#FF8E27] text-2xl font-extrabold">Bright</p>
          </div>
          <div className=" w-full flex justify-between">
            <House size={32} color="black" />
            <MapPin size={32} color="gray" />
            <Heart size={32} color="gray" />
            <User size={32} color="gray" />
          </div>
        </div>
      </div>
      <div className="absolute left-[50%] flex justify-center items-center top-[50%] z-10 place-items-center">
        <div className="size-[940px] rounded-[50%] border border-white  opacity-30 flex justify-center items-center absolute"></div>
        <div className="size-[540px] rounded-[50%] border border-white  opacity-30 flex justify-center items-center absolute"></div>
        <div className="size-[340px] rounded-[50%] border border-white   opacity-30 flex justify-center items-center absolute"></div>
        <div className="size-[140px] bg-[#F3F4F6] absolute z-50 rounded-[50%] flex gap-4 justify-center items-center">
          <img src="logoLeft.png" alt="" className="h-[86px]" />
          <img src="logoRight.png" alt="" className="h-[86px]" />
        </div>
      </div>
      {/* backside */}
      <div className=" bg-[url(/bg.png)] bg-no-repeat bg-center bg-cover w-1/2 h-full flex justify-center items-center relative ">
        <div className="w-[414px]  bg-[#111827BF] rounded-[48px] p-12 flex flex-col items-center gap-12 absolute z-10 shadow-xl backdrop-blur-md">
          <div className=" w-full ">
            <p className=" text-lg text-[#9CA3AF] font-medium">
              September 10, 2021
            </p>
            <div className="flex justify-between">
              <p className=" text-white text-5xl font-extrabold">Kraków</p>
              <MapPin size={32} color="gray" />
            </div>
          </div>
          <img src="moon.png" alt="" className="size-[260px]" />
          <div className="w-full">
            <p className=" bg-gradient-to-b  from-[#F9FAFB] to-[#111827] text-transparent bg-clip-text text-[144px] font-extrabold">
              17°
            </p>
            <p className="text-[#777CCE] text-2xl font-extrabold">Clear</p>
          </div>
          <div className=" w-full flex justify-between">
            <House size={32} color="white" />
            <MapPin size={32} color="gray" />
            <Heart size={32} color="gray" />
            <User size={32} color="gray" />
          </div>
        </div>
        <img
          src="violetEclipse.png"
          alt="violetEclipse"
          className="absolute z-0 w-[128px] bottom-[10%] right-[25%] "
        />
      </div>
    </div>
  );
};

export default WeatherApp;
