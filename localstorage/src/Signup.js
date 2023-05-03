import React, { useState, useEffect } from "react";

function Signup() {
const [formData,setFormData] = useState({
   name: "",
   email: "",
   address: "",
})
const [list,setList] = useState([])

useEffect(()=>{
  localStorage.setItem("formData",JSON.stringify(list))
},[list])

 useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData"));
    
    if (data) {
      setList(data);
    }
  }, []);
  console.log("====",list)
const handleInputChange= (event) =>{
const {name,value} = event.target;
setFormData((prev)=>({...prev,[name]: value}))
}
const handleSubmit = (event)=>{
  event.preventDefault()
  setList((prevList) => ([...prevList,formData]))
  setFormData({name: "", email:"",address:""})
}
  const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };
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
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
            />
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter Address"
            />
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
           {list.map((contact, index) => (
             <tr className=" border-b-2 text-slate-50" key={index}>
               <td className="px-6 py-4 font-medium">{contact.name}</td>
               <td className="px-6 py-4 font-medium">{contact.email}</td>
               <td className="px-6 py-4 font-medium">{contact.address}</td>
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
                  <button className="font-medium bg-red-600  rounded-lg text-white  p-1 hover:outline hover:outline-1"
                  onClick={()=>handleDelete(index)}>
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
           ))}
         </tbody>
          </table>
        </div>
      </div>
    </>
  );
}



export default Signup;
