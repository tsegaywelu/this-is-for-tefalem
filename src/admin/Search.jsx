import React, { useState } from "react";
import { getAll } from "../data.js";
import { useContextData } from "../context/provider";
import { useNavigate } from "react-router-dom";
function Search() {
  const [data, sd] = useState(getAll());
  const { dispatch } = useContextData();
  const navg = useNavigate();
  console.log(data);
  return (
    <div className="mt-3 md:mt-0">
      <form action="">
        <div className="flex space-x-8 justify-center items-center">
          <label htmlFor="search" className="text-slate-500 hidden md:block">
            search student/s
          </label>
          <input
            type="text"
            name=""
            id="search"
            className="border border-slate-600 rounded-md p-1"
            placeholder="student Id"
          />
          <button className="bg-gray-600 text-white p-1 font-bold rounded-md">
            search
          </button>
        </div>
      </form>
      <table className="mx-auto mt-6 w-3/4 text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <td>id</td>
            <td>name</td>
            <td>middle</td>
            <td>last</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.middlename}</td>
                <td>{u.lastname}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: "setEditMode", payload: u });
                      navg("/admin/addoredit");
                    }}
                  >
                    edit
                  </button>
                  <button>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
