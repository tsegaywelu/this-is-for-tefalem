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
      setData([student]); //thy are equal setData(filteredusers);
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
      
      <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
    <table className="w-full table-fixed">
        <thead>
            <tr className="bg-gray-100">
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">ID</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">School</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Average</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Percentile</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Actions</th>
            </tr>
        </thead>
        <tbody className="bg-white">
        {data?.map((student) => {
            return (
            <tr key={student.id}>
                <td className="py-4 px-6 border-b border-gray-200">{student.id}</td>
                <td className="py-4 px-6 border-b border-gray-200">{student.name} {student.middlename} {student.lastname}</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">{student.schoolName}</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">{student.average}</td>
                <td className="py-4 px-6 border-b border-gray-200">90</td>
                <td className="py-4 px-6 border-b border-gray-200">
                    <button
                    className=" mr-3 text-yellow-600 hover:underline"
                    onClick={() => editHandler(student)}
                  >
                    edit
                  </button>
                  <button
                    onClick={() => deleteHandler(student.id)}
                    className=" text-red-600 hover:underline"
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
    </div>
  );
}

export default Search;
