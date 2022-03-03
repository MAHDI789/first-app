import { useState } from "react";
import { useGlobalContext } from "../context/ContextApi";

const Search = () => {
  const { value, setvalue, FetchApi, exist } = useGlobalContext();
  return (
    <div className="pb-4 pt-4">
      <form action="" onSubmit={FetchApi}>
        <label htmlFor="">Search input : </label>
        <input
          type="text"
          className={`border ml-2 mb-4 px-2 py-2 ${
            exist ? "border-red-300" : "border-slate-300"
          } placeholder-slate-400 rounded-md outline-none w-80 focus:border-sky-500 focus:ring-sky-500`}
          placeholder="Avatar"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <input
          type="submit"
          className="border ml-2 mb-4 px-2 py-2 border-slate-300 rounded-md cursor-pointer bg-sky-400 text-white font-bold outline-none w-40 focus:border-sky-500 focus:ring-sky-500"
          value="Search"
        />
      </form>
    </div>
  );
};
export default Search;
