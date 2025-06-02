/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shopName: '',
    password: '',
  });

  type Errors = {
    name?: string;
    email?: string;
    shopName?: string;
    password?: string;
  };
  
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState('');

  const validate = () => {
    const newErrors: Errors = {};
    const { name, email, shopName, password } = formData;

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!shopName.trim()) newErrors.shopName = 'Shop name is required';
    if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 8 characters, include one number and one special character';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log(formData);
    return

    try {
      const res = await fetch('http://localhost:5000/api/v1/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        setMessage(data.message || 'Something went wrong');
      } else {
        setMessage('User created successfully');
        setFormData({ name: '', email: '', shopName: '', password: '' });
      }
    } catch (err:any) {
      setMessage('Server error',);
      console.log(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
      {message && <p className="mb-4 text-center text-sm text-red-500">{message}</p>}

      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            type="text"
            name="shopName"
            placeholder="Unique Shop Name"
            value={formData.shopName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.shopName && <p className="text-sm text-red-500 mt-1">{errors.shopName}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>
       <h1 className='mt-4 text-center space-x-1 '>You have an account?
                <Link to="/signup" className="text-indigo-600 hover:text-indigo-500">Sign In</Link>
              </h1>
    </div>
  );
};

export default SignUp;
