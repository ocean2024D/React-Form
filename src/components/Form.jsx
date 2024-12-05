import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { TbLockPassword } from "react-icons/tb";

function Form() {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const usernameRegex = /^[a-zA-Z][a-zA-Z ]{3,19}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

  const validateField = (name, value) => {
    if (name === "name" && !usernameRegex.test(value)) {
      setError((prevError) => ({
        ...prevError,
        [name]: "Invalid name. Only letters, spaces, apostrophes are allowed.",
      }));
    } else if (name === "lname" && !usernameRegex.test(value)) {
      setError((prevError) => ({
        ...prevError,
        [name]:
          "Invalid Last name. Only letters, spaces, apostrophes are allowed.",
      }));
    } else if (name === "password" && !passwordRegex.test(value)) {
      setError((prevError) => ({
        ...prevError,
        [name]:
          "Password is invalid. It must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      }));
    } else if (name === "repPassword" && value !== form.password) {
      setError((prevError) => ({
        ...prevError,
        [name]: "Passwords do not match.",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        [name]: "",
      }));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isFormValid = true;

    const requiredFields = [
      "name",
      "lname",
      "email",
      "password",
      "repPassword",
    ];

    for (const field of requiredFields) {
      if (!form[field]) {
        isFormValid = false;
        alert(`Please fill in the ${field} field!`);
        break;
      }
    }

    if (isFormValid()) {
      alert("Form submitted successfully!");
    } else {
      alert("There are errors in the form.");
    }
  };

  const labelClasses =
    "flex justify-evenly gap-10 m-5 items-center text-left text-xl text-zinc-600";

  const notRequiredClasses =
    "m-30 text-2xl h-10 mt-2 rounded-2xl items-center border-2 border-slate-600 spacing-4 bg-transparent";

  return (
    <body className="relative h-screen flex justify-center items-center backdrop-blur-lg bg-transparent bg-[url('/image.png')] bg-cover bg-fixed bg-center">
      <form
        onSubmit={handleSubmit}
        className="w-[600px] sm:h-auto md:h-[900px] overflow-y-auto bg-black opacity-80 backdrop-blur-md flex flex-col items-center justify-center shadow-lg rounded-3xl p-3"
      >
        <div>
          <h2 className="title text-4xl text-gray-400 text-center items-center">
            Register Form
          </h2>
        </div>

        <label className={`${labelClasses}`}>
          <h2>*Name:</h2>

          <div className="relative">
  <input
    type="text"
    value={form.name || ""}
    onChange={handleChange}
    name="name"
    className={`m-30 text-2xl h-10 mt-2 rounded-2xl pl-12 ${ 
      error.name
        ? "bg-red-500 text-white text-center"
        : error.name === ""
        ? "bg-green-500 text-black text-center"
        : "border-2 border-slate-600 spacing-4 bg-transparent"
    }`}
  />
  <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
</div>
        </label>

        {error.name && <p className="text-red-500">{error.name}</p>}

        <label className={`${labelClasses}`}>
          <h2>*Last Name:</h2>
          <input
            className={`m-30 text-2xl h-10 mt-2 rounded-2xl items-center ${
              error.lname
                ? "bg-red-500 text-white"
                : error.lname === ""
                ? "bg-green-500 text-black"
                : "border-2 border-slate-600 spacing-4 bg-transparent"
            }`}
            type="text"
            value={form.lname || ""}
            onChange={handleChange}
            name="lname"
          />
        </label>
        {error.lname && (
          <p className="text-red-500 text-lg mt-2">{error.lname}</p>
        )}

        <label className={`${labelClasses}`}>
          <h2>Age:</h2>
          <input
            className={`${notRequiredClasses}`}
         
            type="date"
            value={form.age || ""}
            onChange={handleChange}
            name="age"
          />
        </label>

        <label className={`${labelClasses}`}>
  <h2>*Email:</h2>
  <div className="relative">
    <input
      className={`${notRequiredClasses} pl-12 text-xl sm:text-2xl`} 
      type="email"
      value={form.email || ""}
      onChange={handleChange}
      name="email"
    />
    <MdOutlineEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl sm:text-2xl pointer-events-none" />
  </div>
</label>

        <label className={`${labelClasses}`}>
  <h2>Phone Number:</h2>
  <div className="relative">
    <input
      className={`${notRequiredClasses} pl-12 text-lg sm:text-xl`}
      type="text"
      value={form.phone || ""}
      onChange={handleChange}
      name="phone"
    />
    <CiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-lg sm:text-xl" />
  </div>
</label>

        <label className={`${labelClasses}`}>
          <h2>Username:</h2>
          <input
            className={`${notRequiredClasses}`}
            type="text"
            value={form.username || ""}
            onChange={handleChange}
            name="username"
          />
        </label>

        <label className={`${labelClasses}`}>
  <h2>*Password:</h2>
  <div className="relative">
    <input
      className={`m-4 text-2xl h-10 mt-2 rounded-2xl pl-12 ${
        error.password
          ? "bg-red-500 text-white"
          : error.password === ""
          ? "bg-green-500 text-black"
          : "border-2 border-slate-600 spacing-4 bg-transparent"
      }`}
      type="password"
      value={form.password || ""}
      onChange={handleChange}
      name="password"
    />
    <TbLockPassword className="absolute left-6 top-1/2 transform -translate-y-1/2 text-xl pointer-events-none" />
  </div>
</label>

        {error.password && (
          <p className="text-red-500 text-lg mt-2">{error.password}</p>
        )}

<label className={`${labelClasses}`}>
  <h2>*Repeat Password:</h2>
  <div className="relative">
    <input
      className={`m-4 text-2xl h-10 mt-2 rounded-2xl pl-12 ${
        error.repPassword
          ? "bg-red-500 text-white"
          : error.repPassword === ""
          ? "bg-green-500 text-black"
          : "border-2 border-slate-600 spacing-4 bg-transparent"
      }`}
      type="password"
      value={form.repPassword || ""}
      onChange={handleChange}
      name="repPassword"
    />
    <TbLockPassword className="absolute left-6 top-1/2 transform -translate-y-1/2 text-xl pointer-events-none" />
  </div>
</label>

        {error.repPassword && (
          <p className="text-red-500 text-lg mt-2">{error.repPassword}</p>
        )}

        <input
          type="submit"
          value="submit"
          className="text-center bg-amber-600 w-48 h-16 rounded-full"
        />
      </form>
    </body>
  );
}

export default Form;
