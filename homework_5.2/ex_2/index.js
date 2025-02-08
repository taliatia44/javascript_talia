function init(){
let result2= avgOfHp(carsForSale);
console.log(result2/carsForSale.length);
}

function avgOfHp(carArray){
  for (let index = 0; index < carArray.length; index++) {
    let sum=sum+carArray[index][Horsepower];
    
  }

  return sum;
}