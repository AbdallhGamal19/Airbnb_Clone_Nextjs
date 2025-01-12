"use client";
import { SearchIcon } from "@heroicons/react/solid";
import DateRange from "../DateRange/DateRange.tsx";
import { useState } from "react";
import { placeholder } from "../../../types/index.ts";
const SearchBar = ({ placeholder }: placeholder) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className=" flex  items-center md:border-2 md:shadow-sm rounded-full py-2 ">
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        type="text"
        placeholder={placeholder || "Staet Your Search"}
        className="  text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
      />
      <SearchIcon className="hidden md:mx-2 md:inline-flex  cursor-pointer p-2 rounded-full text-white bg-red-400 h-8 " />
      <div className="mt-3 absolute top-full left-1/2 -translate-x-1/2">
        {searchInput && (
          <>
            <DateRange searchValue={searchInput} setInput={setSearchInput} />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
