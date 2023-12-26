import React from "react";
import { useContextData } from "../context/provider";
function EditOrAdd() {
  const { data } = useContextData();
  console.log(data);
  const { isAddMode } = data;
  return (
    <div className="mt-12 ">
      <h1 className="text-xl text-center py-4">student recored form</h1>
      <form
        action=""
        className="space-x-6 flex flex-col items-center md:flex-row "
      >
        <div className="mx-16  flex flex-col mb-12 space-y-2 shadow-lg">
          <input
            className="border border-r-gray-600 p-1 rounded-md"
            type="text"
            name="name"
            placeholder="first name"
          />
          <input
            className="border border-r-gray-600 rounded-md p-1"
            type="text"
            name="middlename"
            placeholder="middle name"
          />
          <input
            className="border border-r-gray-600 rounded-md p-1"
            type="text"
            name="lastname"
            placeholder="last name"
          />
          <input
            className="border border-r-gray-600 rounded-md p-1"
            type="text"
            name="stId"
            placeholder="student id"
          />
          <input
            className="border border-r-gray-600 rounded-md p-1"
            type="text"
            name="schoolname"
            placeholder="schoole name"
          />
          <input
            className="border border-r-gray-600 rounded-md p-1"
            type="text"
            name="schoolid"
            placeholder="schoole id"
          />
        </div>

        <div className=" flex flex-col md:flex-row gap-2 mb-4 md:mb-0">
          <div className="flex flex-col gap-y-1">
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8 w-full "
              placeholder="tigrigna "
              type="number"
              min={0}
              max={100}
              name="tigrigna"
              id=""
              onChange={() => {}}
            />
            <input
              className="border border-r-gray-600  rounded-md p-3 h-8"
              type="number"
              name="amarigna"
              id=""
              placeholder="amarigna"
              onChange={() => {}}
            />
            <input
              className="border border-r-gray-600  rounded-md p-3 h-8"
              type="number"
              name="english"
              id=""
              placeholder="english"
              onChange={() => {}}
            />
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8"
              type="number"
              name="maths"
              placeholder="maths"
              id=""
              onChange={() => {}}
            />
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8"
              type="number"
              placeholder="biology"
              name="biology"
              id=""
              onChange={() => {}}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <input
              className="border border-r-gray-600  rounded-md p-3 h-8"
              type="number"
              name="physics"
              id=""
              placeholder="physics"
              onChange={() => {}}
            />
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8"
              type="number"
              name="chemistry"
              placeholder="chemistry"
              id=""
              onChange={() => {}}
            />
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8"
              type="number"
              name="geography"
              placeholder="geography"
              id=""
              onChange={() => {}}
            />
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8"
              type="number"
              name="sivic"
              placeholder="civic"
              id=""
              onChange={() => {}}
            />
          </div>
        </div>
        <input
          type="submit"
          value={isAddMode ? "register" : "edit"}
          className="bg-sky-600 p-1 rounded-md text-gray-50 mt-2 md:mt-0 font-extrabold tracking-wide"
        />
      </form>
    </div>
  );
}

export default EditOrAdd;
