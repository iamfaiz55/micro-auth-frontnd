import React, {  useState } from 'react';
import { useLoginMutation } from './redux/authApi';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [login, {isSuccess}]= useLoginMutation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const navigate = useNavigate()


  // Handle mouse enter for sprinkle effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const sprinkleElement = document.createElement('div');
    sprinkleElement.classList.add('sprinkle-effect');
    sprinkleElement.style.position = 'absolute';
    sprinkleElement.style.left = `${e.clientX}px`;
    sprinkleElement.style.top = `${e.clientY}px`;
    sprinkleElement.style.pointerEvents = 'none';

    document.body.appendChild(sprinkleElement);

    setTimeout(() => {
      sprinkleElement.remove();
    }, 1500); // Match the animation duration
  };

  if(isSuccess){
    navigate("/todo")
  }
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-blue-100 to-white flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background "Sprinkle" Animation */}
      <div className="absolute inset-0 z-0 bg-blue-100 opacity-60"></div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm transform transition-all duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6" onMouseMove={handleMouseMove}>Login</h2>
    
          <div className="mb-4">
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

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="******"
            />
          </div>

          <button
            type="button"
            onClick={()=> login({email:email,password: password})}
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Login
          </button>
 
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <Link  to="/auth/register" className="text-indigo-600 hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
