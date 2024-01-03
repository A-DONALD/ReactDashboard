import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:8081/login', { login, password })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <div className="container mx-auto p-4">
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="mb-4">
                        <label htmlFor="login" className="block text-gray-600 font-semibold">Login</label>
                        <input
                            type="text"
                            placeholder="Enter Login"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={e => setLogin(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 font-semibold">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login