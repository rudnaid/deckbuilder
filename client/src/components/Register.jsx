import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", result.token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form key="register" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
