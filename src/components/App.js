import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Wallet from "./Wallet";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [position, setPosition] = useState(0)
  const [emptyPlates, setEmptyPlates] = useState([])
  const [balance, setBalance] = useState(140)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      setSushi(data)
    })
  },[])

  const sushiToDisplay = sushi.slice(position, position + 4)

  // console.log(sushi.length)

  //console.log(emptyPlates)

  function handleMoreSushi() {
    setPosition(currentPosition => currentPosition + 4)
    if (position >= sushi.length) {
      console.log('no more sushi!')
      setPosition(0)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    // console.log(typeof(e.target.money.value))
    // console.log(typeof(balance))
    const moneyToAdd = parseInt(e.target.money.value)
    setBalance((currBal) => currBal + moneyToAdd)
  }

  return (
    <div className="app">
      <SushiContainer 
      sushi={sushiToDisplay} 
      handleMoreSushi={handleMoreSushi}
      emptyPlates={emptyPlates}
      setEmptyPlates={setEmptyPlates}
      setBalance={setBalance}
      balance={balance}
      />
      <Table plates={emptyPlates} balance={balance} />
      <Wallet handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
