import React, { useState } from 'react'
import axios from 'axios'
import validation from '../scripts/RegisterValidation'
import { Link, useNavigate } from 'react-router-dom'
import DownloadButton from '../components/DownloadBtn'

function Register() {
    const [values, setValues] = useState({
        firstname: "",
        name: "",
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
        if (errors.firstname === "" && errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/register', values)
                .then(res => {
                    console.log(res.data);
                    navigate('/login');
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="mb-4">
                        <label htmlFor="firstname" className="block text-gray-600 font-semibold">First Name</label>
                        <input
                            type="text"
                            name='firstname'
                            placeholder="Enter First Name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={handleInput}
                        />
                        {errors.firstname && <span className='text-red-700'>* {errors.firstname}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 font-semibold">Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Enter Name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={handleInput}
                        />
                        {errors.name && <span className='text-red-700'>* {errors.name}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
                        <input
                            type="text"
                            name='email'
                            placeholder="Enter Email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={handleInput}
                        />
                        {errors.email && <span className='text-red-700'>* {errors.email}</span>}
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
                        {errors.password && <span className='text-red-700'>* {errors.password}</span>}
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Register</button>
                </form>
                <div className="text-center">
                    <p>Have an account?
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Sign in here
                        </Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register