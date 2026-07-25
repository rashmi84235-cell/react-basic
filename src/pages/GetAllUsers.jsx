import { useState } from "react";

function GetAllUsers() {

  const [open, setOpen] = useState(false);

  return (
    <div className="page">

      <h1>Get all users</h1>

      <p className="description">
        Retrieve a list of all users.
      </p>


      <div className="endpoint">
        <span className="method get">GET</span>
        /users
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

          <p>Array</p>

          <p><b>id</b> &nbsp; integer</p>
          <p><b>email</b> &nbsp; string</p>
          <p><b>username</b> &nbsp; string</p>
          <p><b>password</b> &nbsp; string</p>

        </div>
      )}


      <div className="response error">
        <h3>400 Bad request</h3>
      </div>


    </div>
  );
}

export default GetAllUsers;