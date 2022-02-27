import useSearch from "hooks/useSearch";
import type { FC } from "react";
import { FiSearch } from "react-icons/fi";

const Search: FC<{ label: string }> = ({ label }) => {
  const { search, setSearch } = useSearch();

  return (
    <div className="search">
      {label && <label htmlFor="search">{label}</label>}
      <div className="input-container">
        <input
          id="search"
          placeholder="Search"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <FiSearch className="icon" size={20} />
      </div>
    </div>
  );
};

export default Search;
