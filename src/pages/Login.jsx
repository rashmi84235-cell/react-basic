import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  function loginSubmit(e){
 e.preventDefault();
 

const customConfig = { headers: { 'Content-Type': 'application/json' } };
  const credentials = { username: username, password: password };
axios.post('https://fakestoreapi.com/auth/login', credentials,customConfig)
  .then(response => alert("login successfully"))
  .catch(x=>alert("login failed"));
  }

  const [open, setOpen] = useState(false);

  return (
    <div className="page">
<h1>Login</h1>

<p className="description">
  Authenticate a user.
</p>

      <h2>Request Body</h2>

      <div className="schema-box">

        <h3>schema: application/json</h3>

        <p><b>required</b></p>

        <p>
          <b>username</b> &nbsp; string
        </p>

        <p>
          <b>password</b> &nbsp; string
        </p>

      </div>


      <h2>Responses</h2>


      <div
        className="response success"
        onClick={() => setOpen(!open)}
      >
        <h3>200 Login successful</h3>
      </div>


      {open && (
        <div className="schema">
          <h4>Response Schema: application/json</h4>
          <p><b>token</b> &nbsp; string</p>
        </div>
      )}


      <div className="response error">
        <h3>400 Bad request</h3>
      </div>


<form className="login-form" onSubmit={loginSubmit}>

  <input 
    className="input-box"
    placeholder="Enter login id"
    onChange={(e)=>setUsername(e.target.value)}
  />

  <input 
    className="input-box"
    type="password"
    placeholder="Enter password"
    onChange={(e)=>setPassword(e.target.value)}
  />

  <button className="login-btn" type="submit">
    Login
  </button>

</form>
    </div>
  );
}

export default Login;