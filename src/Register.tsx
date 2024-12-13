import React, { useEffect, useState } from "react";
import { useRegisterMutation } from "./redux/authApi";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Register = () => {
const [register, {isSuccess}]= useRegisterMutation()
    
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
  
    await  register({name:username, email, password})
  };
  const navigate = useNavigate()
useEffect(() => {
 if(isSuccess){
 navigate("/auth/")
 }
}, [isSuccess])

  
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        >
          <source
            src="https://media.istockphoto.com/id/1217612114/video/beautiful-earth-in-space-among-the-stars.mp4?s=mp4-640x640-is&k=20&c=4IDZqTAi3hywayRV8d8P-N8brh7sRCwlRe0v6rai6H4=" // Add a custom background video URL here
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-70 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="youremail@example.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="********"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <Link  to="/auth/" className="text-indigo-600 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
