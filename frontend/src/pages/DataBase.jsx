import { useState, useEffect } from 'react';

function DataBase() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full border bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">FirstName</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Login</th>
            <th className="border p-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td className="border p-2">{d.id}</td>
              <td className="border p-2">{d.firstname}</td>
              <td className="border p-2">{d.name}</td>
              <td className="border p-2">{d.login}</td>
              <td className="border p-2">{d.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataBase;
