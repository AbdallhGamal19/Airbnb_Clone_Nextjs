"use client";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import enUS from "date-fns/locale/en-US";
import { useState } from "react";
import FooterDateRange from "./FooterDateRange.tsx";
interface IProps {
  setInput: (value: string) => void;
  searchValue: string;
}
const DateRange = ({ setInput, searchValue }: IProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const handleSelect = async (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  return (
    <>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        locale={enUS}
        minDate={new Date()}
        rangeColors={["#FD5b61"]}
      />
      <FooterDateRange
        setInput={setInput}
        startDate={startDate}
        endDate={endDate}
        searchValue={searchValue}
      />
    </>
  );
};

export default DateRange;
