import Card from "@/components/Card";
import { Search, MapPin } from "lucide-react";
import { PuffLoader } from "react-spinners";
import { useEffect, useState } from "react";
const WeatherApp = () => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const weatherApiKey = "899d9c2c0f5845838dc70138240912";
  const [countries, setCountries] = useState([]);

  useEffect(
    () => {
      setIsLoading(true);

      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
        })
        .finally(() => {
          setIsLoading(false);
        });

      fetch("https://countriesnow.space/api/v0.1/countries")
        .then((response) => response.json())
        .then((data) => {
          setCountries(data);
        });
    },
    [cityName],
    [countries]
  );

  const changeCity = (city) => {
    setCityName(city);
    setInputValue("");
  };

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
          <PuffLoader color="white" />
        </div>
      </div>
    );
  }
  console.log(countries);

  return (
    <div className=" w-screen h-screen flex relative bg-[#F3F4F6]">
      <div className="w-[567px]  flex flex-col   absolute left-10 top-10 z-30">
        <div className="flex items-center h-[80px] rounded-[48px] px-6 py-4  bg-[#FFFFFFBF] gap-4 mb-4 shadow-md">
          <Search size={48} color="gray" />
          <input
            type="search"
            className=" w-full h-full focus:outline-0 text-[32px] font-bold"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        {inputValue !== "" ? (
          <div className="py-4 rounded-[20px]  bg-[#FFFFFFBF] shadow-sm">
            {countries?.data &&
              countries.data
                .flatMap((country) =>
                  country?.cities?.filter(
                    (city) =>
                      city.toLowerCase().includes(inputValue.toLowerCase()) &&
                      inputValue !== ""
                  )
                )
                .slice(0, 3)
                .map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-4 bg-[#FFFFFFBF] hover:bg-[#e2e1e1bf] px-6 py-4  cursor-pointer transition-all duration-300 ease-in-out"
                    onClick={() => changeCity(city)}
                  >
                    <MapPin color="gray" size={40} />
                    <p className="font-bold text-[28px]">{city}</p>
                  </div>
                ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <Card isDark={false} weather={weather} />
      <div className="absolute left-[50%] flex justify-center items-center top-[50%] z-10 place-items-center">
        <div className="size-[940px] rounded-[50%] border border-white  opacity-30 flex justify-center items-center absolute"></div>
        <div className="size-[540px] rounded-[50%] border border-white  opacity-30 flex justify-center items-center absolute"></div>
        <div className="size-[340px] rounded-[50%] border border-white   opacity-30 flex justify-center items-center absolute"></div>
        <div className="size-[140px] bg-[#F3F4F6] absolute z-50 rounded-[50%] flex gap-4 justify-center items-center">
          <img src="logoLeft.png" alt="" className="h-[86px]" />
          <img src="logoRight.png" alt="" className="h-[86px]" />
        </div>
      </div>

      <Card isDark weather={weather} />
    </div>
  );
};

export default WeatherApp;
