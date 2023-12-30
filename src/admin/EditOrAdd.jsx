import React, { useEffect, useState } from "react";
import { useContextData } from "../context/provider";
import { registerStudent, updateStudent } from "../utils/json-server";
function EditOrAdd() {
  const { data } = useContextData();
  console.log(data);
  const { isAddMode, EditUser } = data;
  const [student, setStudent] = useState(
    !isAddMode
      ? EditUser
      : {
          name: "",
          middlename: "",
          lastname: "",
          age: "",
          id: "",
          schoolId: "",
          schoolName: "",
          result: {
            eng: 0,
            maths: 0,
            biology: 0,
            tigrigna: 0,
            amharic: 0,
            chemistry: 0,
            physics: 0,
            civic: 0,
            geography: 0,
          },
        }
  );
  useEffect(() => {
    if (EditUser) setStudent(EditUser);
  }, [EditUser]);

  const changeHandler = (e) => {
    if (Object.keys(student.result).includes(e.target.name)) {
      setStudent({
        ...student,
        result: { ...student.result, [e.target.name]: e.target.value },
      });
      return;
    }
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-12 ">
      <h1 className="text-xl text-center py-4">student recored form</h1>
      <form
        onSubmit={submitHandler}
        className="space-x-6 flex flex-col items-center md:flex-row "
      >
        <div className="mx-16  flex flex-col mb-12 space-y-2 shadow-lg">
          <input
            className="border border-r-gray-600 p-1 rounded-md"
            type="text"
            name="name"
            value={student.name}
            onChange={changeHandler}
            placeholder="first name"
          />
          <input
            className="border border-r-gray-600 rounded-md p-1"
            type="text"
            name="middlename"
            value={student.middlename}
            onChange={changeHandler}
            placeholder="middle name"
          />
          <input
            className="border border-r-gray-600 rounded-md p-1"
            type="text"
            name="lastname"
            value={student.lastname}
            onChange={changeHandler}
            placeholder="last name"
          />
          <input
            className="border border-r-gray-600 rounded-md p-1"
            type="text"
            name="id"
            value={student.id}
            onChange={changeHandler}
            placeholder="student id"
          />
          <input
            className="border border-r-gray-600 rounded-md p-1"
            type="text"
            name="schoolName"
            value={student.schoolName}
            onChange={changeHandler}
            placeholder="school name"
          />
          <input
            className="border border-r-gray-600 rounded-md p-1"
            type="text"
            name="schoolId"
            value={student.schoolId}
            onChange={changeHandler}
            placeholder="school id"
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
              value={student.result.tigrigna}
              id=""
              onChange={changeHandler}
            />
            <input
              className="border border-r-gray-600  rounded-md p-3 h-8"
              type="number"
              name="amharic"
              value={student.result.amharic}
              id=""
              placeholder="amarigna"
              onChange={changeHandler}
            />
            <input
              className="border border-r-gray-600  rounded-md p-3 h-8"
              type="number"
              name="eng"
              value={student.result.eng}
              id=""
              placeholder="eng"
              onChange={changeHandler}
            />
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8"
              type="number"
              name="maths"
              value={student.result.maths}
              placeholder="maths"
              id=""
              onChange={changeHandler}
            />
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8"
              type="number"
              placeholder="biology"
              name="biology"
              value={student.result.biology}
              id=""
              onChange={changeHandler}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <input
              className="border border-r-gray-600  rounded-md p-3 h-8"
              type="number"
              name="physics"
              value={student.result.physics}
              id=""
              placeholder="physics"
              onChange={changeHandler}
            />
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8"
              type="number"
              name="chemistry"
              value={student.result.chemistry}
              placeholder="chemistry"
              id=""
              onChange={changeHandler}
            />
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8"
              type="number"
              name="geography"
              value={student.result.geography}
              placeholder="geography"
              id=""
              onChange={changeHandler}
            />
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8"
              type="number"
              name="civic"
              value={student.result.civic}
              placeholder="civic"
              id=""
              onChange={changeHandler}
            />
            <input
              className="border border-r-gray-600 rounded-md p-3 h-8"
              type="number"
              name="amaharic"
              value={student.result.amharic}
              placeholder="civic"
              id=""
              onChange={changeHandler}
            />
          </div>
        </div>
        <input
          type="submit"
          value={isAddMode ? "register" : "edit"}
          className="bg-sky-600 p-1 rounded-md text-gray-50 mt-2 md:mt-0 font-extrabold tracking-wide"
          onClick={() =>
            isAddMode ? registerStudent(student) : updateStudent(student)
          }
        />
      </form>
    </div>
  );
}

export default EditOrAdd;
