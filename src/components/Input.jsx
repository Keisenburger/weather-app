import { Search, MapPin } from "lucide-react";
export const Input = ({ inputValue }) => {
  return (
    <div className="w-[567px]  flex flex-col   absolute left-10 top-10 z-30">
      <div className="flex items-center h-[80px] rounded-[48px] px-6 py-4  bg-[#FFFFFFBF] gap-4 mb-4">
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
        <div className="py-4 rounded-[20px]  bg-[#FFFFFFBF]">
          {countries?.data &&
            countries.data
              .flatMap((country) =>
                country?.cities?.filter(
                  (city) =>
                    city.toLowerCase().includes(inputValue.toLowerCase()) &&
                    inputValue !== ""
                )
              )
              .slice(0, 4)
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
  );
};
