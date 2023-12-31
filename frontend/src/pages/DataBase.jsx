import React, { useState, useEffect } from 'react'

function DataBase() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  })
  return (
    <div>
      <thead>
        <th>ID</th>
        <th>FirstName</th>
        <th>Name</th>
        <th>Login</th>
        <th>Password</th>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i}>
            <td>{d.id}</td>
            <td>{d.firstname}</td>
            <td>{d.name}</td>
            <td>{d.login}</td>
            <td>{d.password}</td>
          </tr>
        ))}
      </tbody>
    </div>
  )
}

export default DataBase