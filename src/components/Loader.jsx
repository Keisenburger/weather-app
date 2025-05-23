import { PuffLoader } from "react-spinners";
const Loader = () => {
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
        <PuffLoader color="white" />
      </div>
    </div>
  );
};

export default Loader;
