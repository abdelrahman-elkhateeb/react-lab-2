import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="my-5">
          <h1>{user.username}</h1>
          <p>{user.email}</p>
          <p>{user.location}</p>
        </li>
      ))}
    </ul>
  );
}

export default Users;
