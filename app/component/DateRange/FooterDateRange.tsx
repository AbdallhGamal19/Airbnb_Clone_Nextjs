import { UsersIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";

interface IProps {
  setInput: (value: string) => void;
  searchValue: string;
  startDate: Date;
  endDate: Date;
}

const FooterDateRange = ({
  setInput,
  endDate,
  searchValue,
  startDate,
}: IProps) => {
  const [numOfGuests, setNumOfGuests] = useState<number>(1);

  return (
    <>
      <div className="flex items-center border-b  bg-white p-4">
        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
        <UsersIcon className="h-5" />
        <input
          type="number"
          className="w-12 pl-2 text-lg outline-none text-red-400"
          value={numOfGuests}
          min={1}
          onChange={(e) => setNumOfGuests(Number(e.target.value))}
        />
      </div>
      <div className="flex items-center text-center bg-white p-5">
        <button
          type="button"
          className="flex-grow text-gray-500"
          onClick={() => setInput("")}
        >
          Cancel
        </button>

        <Link
          href={{
            pathname: "search",
            query: `location=${searchValue}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guesNumber=${numOfGuests.toString()}`,
          }}
          className="flex-grow text-red-400"
          onClick={() => setInput("")}
        >
          Search
        </Link>
      </div>
    </>
  );
};

export default FooterDateRange;
