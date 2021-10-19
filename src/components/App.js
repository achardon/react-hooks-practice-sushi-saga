import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [position, setPosition] = useState(0)
  const [emptyPlates, setEmptyPlates] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      setSushi(data)
    })
  },[])

  const sushiToDisplay = sushi.slice(position, position + 4)

  function handleMoreSushi() {
    setPosition(currentPosition => currentPosition + 4)
  }

  console.log(emptyPlates)

  return (
    <div className="app">
      <SushiContainer 
      sushi={sushiToDisplay} 
      handleMoreSushi={handleMoreSushi}
      emptyPlates={emptyPlates}
      setEmptyPlates={setEmptyPlates}
      />
      <Table plates={emptyPlates} />
    </div>
  );
}

export default App;
