function init(){
  let attrib= prompt ("enter the attribute you want");
  let num= +prompt ("enter the value (number) you want the car to be less then");
  if(isNaN(num)){
    return;
  }

  let result3= findLessThen(attrib, num, carsForSale);

  console.log(result3);

}


function findLessThen(topic, number, carArray){
  const carsWithLessThen=[];
  for (let index = 0; index < carArray.length; index++) {
    if(carArray[index][topic]<=number){
      carsWithLessThen.push(carArray[index]);
    }
    
  }
  return carsWithLessThen;
}