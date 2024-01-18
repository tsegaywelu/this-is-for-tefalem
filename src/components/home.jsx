import React, { useState } from "react";
import { searchStudent } from "../utils/json-server";
import { fetchStudent } from "../utils/backend.utils";

const Home = () => {
  const [id, setid] = useState("");
  const [t, st] = useState({});
  const [error, setError] = useState(null)
  const handlechangeid = (e) => {
    setid(e.target.value);
  };
  const getresult = async(e) => {
    e.preventDefault();
    try {
      const  response = await fetchStudent(id)
         st(response.data)
         setError(null)
    } catch (error) {
      // console.log("some thing wrong", error);
      if(error.response.status === 404) return setError('Student not found')
      setError(error.message)
    }
  };

  return (
    <div className="flex flex-col  mx-auto h-full shadow-lg my-3 p-2  ">
      
      <form className="flex relative rounded-md w-full px-4 max-w-xl mx-auto mb-4" onSubmit={getresult}>
          <input type="number" name="q" id="query" placeholder="Insert your ID Number"
              value={id}
              onChange={handlechangeid}
              className="w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none " />
          <button
              className="inline-flex items-center gap-2 bg-teal-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
              <span>search</span>
              <span className="hidden md:block">
                  
              </span>
          </button>

      </form>
      {error? (<p className=" mt-6 mx-auto text-xl text-red-700 font-semibold">{error}</p>) : ( t.result && <div className="bg-white mx-auto max-w-2xl min-w-[400px] shadow overflow-auto sm:rounded-lg text-center">
        <div className="px-4 py-5  ">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                {t.name} {t.middlename} {t.lastname}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                School: {t.schoolName}
            </p>
        </div>
          <div className="border-t border-gray-200 flex flex-col md:flex-row min-w-xl overflow-auto">
              <dl className=" mx-2 px-2 py-4">
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                          English
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {t.result.eng}
                      </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                          Maths
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {t.result.maths}
                      </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                          Biology
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {t.result.biology}
                      </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                          Chemistry
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {t.result.chemistry}
                      </dd>
                  </div>
                </dl>
                <dl className=" mx-2 px-2 py-4">
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                          Physics
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {t.result.physics}
                      </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                          Civic
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {t.result.civic}
                      </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                          Geography
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {t.result.geography}
                      </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                          Tigrigna
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {t.result.tigrigna}
                      </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                          Amahric
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {t.result.amharic}
                      </dd>
                  </div>
              </dl>
          </div>
    </div>)}
    </div>
  );
};

export default Home;
