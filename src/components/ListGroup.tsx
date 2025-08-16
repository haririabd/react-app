function ListGroup() {
  const items = [
    'New York',
    'SanFrancisco',
    'Tokyo',
    'London',
    'Paris'
];
  return (
    // Empty angle bracket is telling react to use fragments to the children
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
