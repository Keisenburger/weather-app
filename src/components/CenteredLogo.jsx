const CenteredLogo = () => {
  return (
    <div className="absolute left-[50%] flex justify-center items-center top-[50%] z-10 place-items-center">
      <div className="size-[940px] rounded-[50%] border border-white  opacity-30 flex justify-center items-center absolute"></div>
      <div className="size-[540px] rounded-[50%] border border-white  opacity-30 flex justify-center items-center absolute"></div>
      <div className="size-[340px] rounded-[50%] border border-white   opacity-30 flex justify-center items-center absolute"></div>
      <div className="size-[140px] bg-[#F3F4F6] absolute z-50 rounded-[50%] flex gap-4 justify-center items-center">
        <img src="logoLeft.png" alt="left side of logo" className="h-[86px]" />
        <img
          src="logoRight.png"
          alt="right side of logo"
          className="h-[86px]"
        />
      </div>
    </div>
  );
};

export default CenteredLogo;
