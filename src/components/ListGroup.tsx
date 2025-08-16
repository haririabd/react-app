import type { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event)

  return (
    // Empty angle bracket is telling react to use fragments to the children
    <>
      <h1>List</h1>
      {/* If the item length is 0, show the statement. Otherwise, the statemnt is false so nothing will be rendered */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/* below is how we loop the data above to be rendered in li */}
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
