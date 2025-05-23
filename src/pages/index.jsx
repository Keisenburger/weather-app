import { CardDay, CardNight } from "@/components/Card";
import { Search, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import CenteredLogo from "@/components/CenteredLogo";

const weatherApiKey = "899d9c2c0f5845838dc70138240912";

const WeatherApp = () => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [countries, setCountries] = useState({});
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchWeatherData();
  }, [cityName]);
  useEffect(() => {
    setIsLoading(true);
    fetchCountriesData();
  }, []);

  useEffect(() => {
    let searchResults = [];
    countries?.data &&
      countries.data?.map((country) => {
        return country?.cities?.map((city) => {
          if (city.toLowerCase().includes(searchValue.toLowerCase())) {
            searchResults.push({
              city: city,
              country: country.country,
            });
          }
        });
      });
    setFilteredCountries(searchResults.slice(0, 3));
  }, [searchValue]);

  const fetchWeatherData = () => {
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
  };

  const fetchCountriesData = () => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
    setIsLoading(false);
  };

  const handleCityChange = (city) => {
    setCityName(city);
    setSearchValue("");
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=" w-screen h-screen flex relative bg-[#F3F4F6]">
      <div className="w-[567px]  flex flex-col   absolute left-10 top-10 z-30">
        <div className="flex items-center h-[80px] rounded-[48px] px-6 py-4  bg-[#FFFFFFBF] gap-4 mb-4 shadow-md">
          <Search size={48} color="gray" />
          <input
            type="search"
            className=" w-full h-full focus:outline-0 text-[32px] font-bold"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
        {searchValue !== "" && (
          <div className="py-4 rounded-[20px]  bg-[#FFFFFFBF] shadow-sm">
            {filteredCountries.map((country) => (
              <div
                key={country.city}
                className="flex items-center gap-4 bg-[#FFFFFFBF] hover:bg-[#e2e1e1bf] px-6 py-4  cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => handleCityChange(country.city)}
              >
                <MapPin color="gray" size={40} />
                <p className="font-bold text-[28px]">
                  {country.city}, {country.country}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <CardDay weather={weather} />
      <CenteredLogo />

      <CardNight weather={weather} />
    </div>
  );
};

export default WeatherApp;
