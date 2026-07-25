import { useState } from "react";

function AddNewUser() {

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


    </div>
  );
}

export default AddNewUser;