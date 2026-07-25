import { useState } from "react";

function AddNewCart() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page">

      <h1>Add a new cart</h1>

      <p className="description">
        Create a new cart.
      </p>

      <h2>Request Body</h2>

      <div className="schema-box">
        <h3>application/json</h3>

        <p><b>userId</b> &nbsp; integer</p>
        <p><b>products</b> &nbsp; Array of objects (Product)</p>

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
          <p><b>userId</b> &nbsp; integer</p>
          <p><b>date</b> &nbsp; string</p>
          <p><b>products</b> &nbsp; Array of objects (Product)</p>

        </div>
      )}


      <div className="response error">
        <h3>400 Bad Request</h3>
      </div>

    </div>
  );
}

export default AddNewCart;