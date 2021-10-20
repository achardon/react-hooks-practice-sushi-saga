import React, {useState} from "react";

function Sushi({sushi, emptyPlates, setEmptyPlates, setBalance, balance}) {

  const [isEaten, setIsEaten] = useState(false)
  
  //if sushi has already been eaten, do not render!
  const alreadyEaten = emptyPlates.find(item => item === sushi.id)
 
  function handleEatSushi() {
    //console.log('I have been eaten!')
    if (balance < sushi.price) {
      return false
    }
    if (isEaten === false) {
      setEmptyPlates((currentPlates) => [...currentPlates, sushi.id])
      setIsEaten(true)
      setBalance((currBalance) => currBalance - sushi.price)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten || alreadyEaten ? null : (
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
