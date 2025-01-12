const Filters = ({ filters }: { filters: string[] }) => {
  return (
    <>
      {filters.map((filter: string) => (
        <button type="button" className="filter-btn " key={filter}>
          {filter}
        </button>
      ))}{" "}
    </>
  );
};

export default Filters;
