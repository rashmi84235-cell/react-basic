import { useState } from "react";

function DeleteUser() {

  const [open, setOpen] = useState(false);

  return (
    <div className="page">

      <h1>Delete a user</h1>

      <p className="description">
        Delete a specific user by ID.
      </p>


      <div className="endpoint">
        <span className="method delete">DELETE</span>
        /users/{`{id}`}
      </div>


      <h2>Path Parameters</h2>

      <div className="schema-box">

        <p>
          <b>id</b>
        </p>

        <p>
          required
        </p>

        <p>
          integer
        </p>

      </div>


      <h2>Responses</h2>


      <div
        className="response success"
        onClick={() => setOpen(!open)}
      >
        <h3>200 User deleted successfully</h3>
      </div>


      {open && (
        <div className="schema">

          <h4>Response Schema: application/json</h4>

          <p>Object</p>

          <p><b>id</b> &nbsp; integer</p>
          <p><b>username</b> &nbsp; string</p>
          <p><b>email</b> &nbsp; string</p>

        </div>
      )}


      <div className="response error">
        <h3>400 Bad request</h3>
      </div>


    </div>
  );
}

export default DeleteUser;