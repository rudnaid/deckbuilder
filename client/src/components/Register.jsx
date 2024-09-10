import { Fragment, useState } from "react";
import App from "../App.jsx";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isCancel, setCancel] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      });
      console.log("success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <form key="register" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
      <button>Cancel</button>
    </Fragment>
  );
}
