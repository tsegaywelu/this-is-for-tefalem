import React, { useState } from "react";
import { searchStudent } from "../utils/json-server";

const Home = () => {
  const [id, setid] = useState("");
  const [t, st] = useState({});

  const handlechangeid = (e) => {
    setid(e.target.value);
  };
  const getresult = async (e) => {
    e.preventDefault();
    try {
      async function getr(idd) {
        const response = await searchStudent(idd);
        const studentresult = await response.data;
        return studentresult;
      }
      const re = await getr(id);
      st(re);
      console.log(t);
    } catch (error) {
      console.log("some thing wrong", error);
    }
  };

  return (
    <div className="w-4xl mx-auto h-full shadow-lg my-3 p-2 grid sm:grid-cols-2 grid-cols-1">
      <form
        onSubmit={(e) => getresult(e)}
        className="flex flex-col gap-2 items-center sm:justify-center"
      >
        <div className="w-4/6">
          <label htmlFor="id" className="hidden sm:block">
            Id
          </label>
          <input
            type="text"
            id="id"
            className="border-2 border-teal-800 rounded-md placeholder-slate-500 
            text-center w-full"
            placeholder="enter your Id"
            autoComplete="off"
            value={id}
            onChange={(e) => handlechangeid(e)}
          />
        </div>
        <div className="w-4/6 sm:w-auto">
          <input
            type="submit"
            className=" bg-sky-300 shadow-md p-1 rounded-md  w-full h-18"
          />
        </div>
      </form>
      <div className="result md:mx-3 border border-sky-400 border-dashed">
        {}
      </div>
    </div>
  );
};

export default Home;
