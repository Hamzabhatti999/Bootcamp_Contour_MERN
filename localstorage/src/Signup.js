import React, { useState, useEffect } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  function handleNameChange(e) {
    setFormData({ ...formData, name: e.target.value });
  }

  function handleEmailChange(e) {
    setFormData({ ...formData, email: e.target.value });
  }
  function handleAddressChange(e) {
    setFormData({ ...formData, address: e.target.value });
  }
  let temp = [formData];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("***temp****", temp);
    if (temp.length !== 0) {
      temp.push(localStorage.setItem("form", JSON.stringify(temp)));
    } else {
      localStorage.setItem("form", JSON.stringify(temp));
    }
  };
  useEffect(() => {
    const savedData = localStorage.getItem("formData");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  return (
    <>
      <div className="flex justify-center gap-10 my-20">
        <div className="container max-w-sm flex flex-col items-center justify-center ">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full border border-sky-800">
            <h1 className="mb-8 text-3xl text-center text-cyan-700 font-semibold">
              Sign up
            </h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              onChange={handleNameChange}
              placeholder="Full Name"
            />
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              onChange={handleEmailChange}
              placeholder="Email Address"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="address"
              onChange={handleAddressChange}
              placeholder="Enter Address"
            />
            {/* <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            /> */}
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white bg-cyan-800 hover:bg-cyan-600 font-semibold "
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </div>
        </div>
        <div className="relative bg-teal-900 overflow-x-auto shadow-md sm:rounded-lg border border-cyan-700">
          <table className="text-sm text-gray-500">
            <thead className="text-md text-white text-center uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Full name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-left text-md">
              <tr className=" border-b-2 text-slate-50">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {formData.name}
                </th>
                <td className="px-6 py-4 font-medium">{formData.email}</td>
                <td className="px-6 py-4 font-medium">{formData.address}</td>
                <td className="px-6 py-4 flex gap-4">
                  <button className="font-medium bg-blue-600 rounded-lg  text-white p-1 hover:outline hover:outline-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                  <button className="font-medium bg-red-600  rounded-lg text-white  p-1 hover:outline hover:outline-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Signup;
