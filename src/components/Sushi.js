import React, {useState} from "react";

function Sushi({sushi, emptyPlates, setEmptyPlates, setBalance, balance}) {

  const [isEaten, setIsEaten] = useState(false)
  
  
  function handleEatSushi() {
    //console.log('I have been eaten!')
    if (balance < sushi.price) {
      return false
    }
    setEmptyPlates((currentPlates) => [...currentPlates, sushi])
    setIsEaten(true)
    setBalance((currBalance) => currBalance - sushi.price)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
