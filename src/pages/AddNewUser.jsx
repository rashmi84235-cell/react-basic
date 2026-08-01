import { useState } from "react";
import axios from "axios";
function AddNewUser() {
 const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
  function signupSubmit(e) {
   
  e.preventDefault();

  const userData = {
    email,
    username,
    password,
    name: {
      firstname,
      lastname,
    },
  };

  axios
    .post("https://fakestoreapi.com/users", userData)
    .then((response) => {
      alert("User created successfully");
      console.log(response.data);
    })
    .catch((error) => {
      alert("Signup failed");
      console.log(error);
    });
}

  const [open, setOpen] = useState(false);

  return (
    <div className="page">

      <h1>Add a new user</h1>

      <p className="description">
        Create a new user.
      </p>


      <div className="endpoint">
        <span className="method post">POST</span>
        /users
      </div>


      <h2>Request Body</h2>

      <div className="schema-box">

        <h3>application/json</h3>

        <p><b>email</b> &nbsp; string</p>
        <p><b>username</b> &nbsp; string</p>
        <p><b>password</b> &nbsp; string</p>
        <p><b>name</b> &nbsp; object</p>

      </div>


      <h2>Responses</h2>


      <div
        className="response success"
        onClick={() => setOpen(!open)}
      >
        <h3>200 Success</h3>
      </div>


      {open && (
        <div className="schema">

          <h4>Response Schema: application/json</h4>

          <p>Object</p>

          <p><b>id</b> &nbsp; integer</p>
          <p><b>email</b> &nbsp; string</p>
          <p><b>username</b> &nbsp; string</p>
          <p><b>password</b> &nbsp; string</p>

        </div>
      )}


      <div className="response error">
        <h3>400 Bad request</h3>
      </div>
<form onSubmit={signupSubmit}>
  <input
  className="input-box"
  type="text"
  placeholder="Enter last name"
  onChange={(e) => setLastname(e.target.value)}
/>

<input
  className="input-box"
  type="email"
  placeholder="Enter email"
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  className="input-box"
  type="text"
  placeholder="Enter username"
  onChange={(e) => setUsername(e.target.value)}
/>

<input
  className="input-box"
  type="password"
  placeholder="Enter password"
  onChange={(e) => setPassword(e.target.value)}
/>

  <button className="login-btn" type="submit">
  Sign Up
</button>
</form>

    </div>
  );
}

export default AddNewUser;