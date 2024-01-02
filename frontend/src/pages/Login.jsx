import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:8081/login', { login, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login">login</label>
            <input
              type="text"
              placeholder="Enter login"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
