import { useState } from "react";

function DeleteCart() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page">

      <h1>Delete a cart</h1>

      <p className="description">
        Delete a specific cart by ID.
      </p>


      <div className="endpoint">
        <span className="method delete">DELETE</span>
        /carts/{`{id}`}
      </div>


      <h2>Path Parameters</h2>

      <div className="schema-box">

        <p><b>id</b></p>
        <p>required</p>
        <p>integer</p>

      </div>


      <h2>Responses</h2>


      <div
        className="response success"
        onClick={() => setOpen(!open)}
      >
        <h3>200 Cart deleted successfully</h3>
      </div>


      {open && (
        <div className="schema">
          <h4>Response Schema: application/json</h4>

          <p>Object</p>

          <p><b>id</b> &nbsp; integer</p>
          <p><b>userId</b> &nbsp; integer</p>
          <p><b>products</b> &nbsp; Array of objects (Product)</p>

        </div>
      )}


      <div className="response error">
        <h3>400 Bad request</h3>
      </div>


    </div>
  );
}

export default DeleteCart;