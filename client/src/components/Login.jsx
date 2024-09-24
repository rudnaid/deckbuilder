import { Fragment, useState } from "react";
import Register from "./Register";

export function Login(isLogin) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isRegister, setRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      const result = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", result.token);
        setIsValid(true);
        isLogin(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isRegister) {
    return <Register />;
  }

  return (
    <Fragment>
      <form key="login" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
      <button key="toRegister" onClick={() => setRegister(true)}>
        Register
      </button>
    </Fragment>
  );
}
