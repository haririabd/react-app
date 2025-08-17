
// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }

//   return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
// }

// export default App;

// import Alert from "./components/Alert"

// This msg alert is the children of alert tag, so we need to use children in alert app
// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>world!</span>
//       </Alert>
//     </div>
//   );
// }

// export default App;

import Button from "./components/Button"
import Alert from "./components/Alert"
import { useState } from "react"

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  )
}

export default App