import React from 'react';
import { TbSearch } from 'react-icons/tb';
import './search.css';

const Search = ({ city, handleInput, fetchData }) => {
  return (
    <div className="input-search-btn flex items-center justify-center xl:w-2/4 md:w-3/4 w-10/12 my-10 rounded-3xl bg-gray-200 py-1">
      <input
        type="text"
        className="w-full px-5 py-2 rounded-3xl bg-gray-200"
        placeholder="Search your city..."
        value={city}
        onChange={handleInput}
      />
      <div className="rounded-full bg-gray-700 px-2 py-2 text-2xl mx-1" onClick={fetchData}>
        <TbSearch className='text-white'/>
      </div>
    </div>
  );
};

export default Search;