import { useState } from "react";

function GetSingleUser() {

  const [open, setOpen] = useState(false);

  return (
    <div className="page">

      <h1>Get a single user</h1>

      <p className="description">
        Retrieve a single user by ID.
      </p>


      <div className="endpoint">
        <span className="method get">GET</span>
        /users/{`{id}`}
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
          <p><b>name</b> &nbsp; object</p>
          <p><b>address</b> &nbsp; object</p>

        </div>
      )}


      <div className="response error">
        <h3>400 Bad request</h3>
      </div>


    </div>
  );
}

export default GetSingleUser;