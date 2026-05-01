import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is", email);
    console.log("Password is", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-full px-5 py-3 text-white outline-none placeholder:text-gray-400"
            type="email"
            placeholder="Enter email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-full px-5 py-3 mt-4  text-white outline-none placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 bg-emerald-600 rounded-full px-5 py-3 text-white outline-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
