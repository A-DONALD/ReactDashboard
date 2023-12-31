import React, { useState } from 'react'
import axios from 'axios'

function Register() {
    const [firstname, setFirstName] = useState('')
    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:8081/register', { firstname, name, login, password })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstname">firstname</label>
                        <input type="text" placeholder='Enter firstname'
                            onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" placeholder='Enter name'
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="login">login</label>
                        <input type="text" placeholder='Enter login'
                            onChange={e => setLogin(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password" placeholder='Enter Password'
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register