import React, { useEffect, useState } from "react";
import { useContextData } from "../context/provider";
import { Await, useNavigate } from "react-router-dom";
import { deleteStudent, fetchAll, searchStudent } from "../utils/json-server";
function Search() {
  const [data, setData] = useState([]);
  const { dispatch } = useContextData();
  const [searchparam, setsearchparam] = useState("");
  const navg = useNavigate();
  console.log(data);
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
  const searchstudent = async (id) => {
    try {
      const response = await searchStudent(id);
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchstudent(searchparam);
        }}
      >
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
            value={searchparam}
            onChange={(e) => setsearchparam(e.target.value)}
          />
          <button
            className="bg-gray-600 text-white p-1 font-bold rounded-md"
            type="submit"
          >
            search
          </button>
        </div>
      </form>
      <table
        className={`${
          !data.length ? "hidden" : ""
        } mx-auto mt-6 w-3/4 text-sm text-left rtl:text-right text-gray-500`}
      >
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
