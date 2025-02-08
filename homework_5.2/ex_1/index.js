function init(){
let result1 =isHaving("USA", 18, carsForSale);

console.log(result1);
}

function isHaving (carOrigin, carMilesPerGallon, carArray){
  const carWithProperties=[];
  for (let index = 0; index < carArray.length; index++) {
    if(carArray[index][Miles_per_Gallon]===carMilesPerGallon && carArray[index][Origin]===carOrigin){
      carWithProperties.push (carArray[index]);
    }
    
  }
  return carWithProperties;
}
