import { useState } from "react";
import "./App.css";
import Accordian from "./components/Accordian";
import { Data } from "./DummyData";
function App() {
  const [data, setData] = useState(Data);
  return (
    <div className="App">
       <h1>Accordian </h1>
      {data.map((item) => {
        return <Accordian data={item} {...item} />;
      })}
    </div>
  );
}

export default App;
