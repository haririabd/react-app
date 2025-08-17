import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void (this is a fn with no parameters)
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // Empty angle bracket is telling react to use fragments to the children
    <>
      <h1>{heading}</h1>
      {/* If the item length is 0, show the statement. Otherwise, the statemnt is false so nothing will be rendered */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/* below is how we loop the data above to be rendered in li */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index // if this is true, then:
                ? "list-group-item active" // if true
                : "list-group-item" // if false
            }
            key={item}
            onClick={()  => { 
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
