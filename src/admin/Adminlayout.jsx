import React, { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
const AdminPage = () => {
  const [file, setFile] = useState();
  const fr = useRef();
  return (
    <section className=" w-full mt-12 ">
      <nav className="w-full flex space-x-3 justify-end items-center pr-3">
        <a href="#">register</a>
        <a href="#">search</a>
      </nav>
      <form action="" className="">
        <input
          type="file"
          className=""
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      </form>
      <Outlet />
    </section>
  );
};

export default AdminPage;
