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
      const data = await fetch("/api/validatelogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      const result = await data.json();
      if (data.status === 200) {
        setIsValid(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isRegister) {
    return <Register />;
  }

  if (isValid) {
    isLogin(true);
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
            type="text"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
      <button key="toRegister" onClick={() => setRegister(true)}>Register</button>
    </Fragment>
  );
}
