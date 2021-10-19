import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, handleMoreSushi, emptyPlates, setEmptyPlates, setBalance, balance}) {


  return (
    <div className="belt">
      {sushi.map(sushix => <Sushi 
      key={sushix.id} 
      sushi={sushix}
      emptyPlates={emptyPlates}
      setEmptyPlates={setEmptyPlates}
      setBalance={setBalance}
      balance={balance}
      />)}
      <MoreButton handleMoreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
