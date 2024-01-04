import React, { useState } from 'react'
import axios from 'axios'
import validation from '../scripts/LoginValidation'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    console.log(res.data);
                    if (res.data === "Login Succesful") {
                        navigate('/home');
                    } else {
                        alert(res.data);
                    }
                })
                .catch(err => {
                    console.log(err);
                    navigate('/500');
                });
        }
    }

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
                        <input
                            type="text"
                            name='email'
                            placeholder="Enter Email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={handleInput}
                        />
                        {errors.email && <span className='text-red-700'>{errors.email}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 font-semibold">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter Password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={handleInput}
                        />
                        {errors.password && <span className='text-red-700'>{errors.password}</span>}
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
                </form>
                <div className="text-center">
                    <p>Need an account?
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register here
                        </Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login