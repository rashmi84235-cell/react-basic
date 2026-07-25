function Carts() {
  return (
    <div className="page">

      <h1>🛒 Carts</h1>

      <p className="description">
        The carts endpoints allow you to manage shopping carts.
      </p>

      <div className="card">
        <h2>Available Endpoints</h2>

        <ul>
          <li>Get all carts</li>
          <li>Add a new cart</li>
          <li>Get a single cart</li>
          <li>Update a cart</li>
          <li>Delete a cart</li>
        </ul>
      </div>

    </div>
  );
}

export default Carts;