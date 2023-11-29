import Button from "./button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  useEffect(() => {
    console.log("Call the API...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click here</button>

      {/* <Button onClick={onClick} text={"Continue"} /> */}
    </div>
  );
}

export default App;
