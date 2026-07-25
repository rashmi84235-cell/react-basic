import { useState } from "react";

function GetAllCarts() {

  const [open, setOpen] = useState(false);

  return (
    <div className="page">

      <h1>Get all carts</h1>

      <p className="description">
        Retrieve a list of all available carts.
      </p>

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

          <p><b>id</b> &nbsp;&nbsp; integer</p>
          <p><b>userId</b> &nbsp;&nbsp; integer</p>
          <p><b>products</b> &nbsp;&nbsp; Array of objects (Product)</p>
        </div>
      )}

      <div className="response error">
        <h3>400 Bad Request</h3>
      </div>

    </div>
  );
}

export default GetAllCarts;