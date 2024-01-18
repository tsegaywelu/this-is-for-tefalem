import React, { useEffect, useState } from "react";
import { useContextData } from "../context/provider";
import { Await, useNavigate } from "react-router-dom";
import { deleteStudent, fetchAll, searchStudent } from "../utils/json-server";
import { fetchStudent } from "../utils/backend.utils";
function Search() {
  const [data, setData] = useState([]);
  const { dispatch } = useContextData();
  const [searchparam, setsearchparam] = useState("");
  const navg = useNavigate();
  const editHandler = (student) => {
    dispatch({ type: "setEditMode", payload: student });
    navg("/admin/addoredit");
  };
  const deleteHandler = async (id) => {
    try {
      await deleteStudent(id);
      const filteredusers = data.filter((student) => student.id != id);
      setData(filteredusers);
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await fetchStudent(searchparam);
      const student = response.data;
      setData((prevStudents) => [...prevStudents, { ...student }]); //thy are equal setData(filteredusers);
    } catch (error) {}
  };

  /* useEffect(() => {
    const loadStudents = async () => {
      try {
        const response = await fetchAll();
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadStudents();
  }, []); */

  return (
    <div className="mt-3 md:mt-0">
      
      <form className="flex relative rounded-md w-full px-4 max-w-xl mx-auto mb-4" onSubmit={searchHandler}>
          <input type="text" name="q" id="query" placeholder="Insert Student's ID Number"
              value={searchparam}
              onChange={(e) => setsearchparam(e.target.value)}
              className="w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none " />
          <button
              className="inline-flex items-center gap-2 bg-teal-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
              <span>search</span>
              <span className="hidden md:block">
                  
              </span>
          </button>
      </form>
      <table
        className={`${
          !data.length ? "hidden" : ""
        } table mx-auto mt-6 w-3/4 text-sm text-left rtl:text-right text-gray-500`}
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 table-header-group">
          <tr className=" table-row">
            <td>id</td>
            <td>name</td>
            <td>middle</td>
            <td>last</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((student) => {
            return (
              <tr key={student.id || Math.random()}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.middlename}</td>
                <td>{student.lastname}</td>
                <td>
                  <button
                    className=" mr-3 text-yellow-600"
                    onClick={() => editHandler(student)}
                  >
                    edit
                  </button>
                  <button
                    onClick={() => deleteHandler(student.id)}
                    className=" text-red-600"
                  >
                    delete
                  </button>
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
