let num1 = +prompt("enter a number 1");
let num2 = +prompt("enter a number 2");

if(isNaN(num1)|| isNaN(num2)){
    throw new Error ("this is not a number")
}

if(num2<num1){
  let temp= num1;
  num1=num2;
  num2=temp;
}
 
let nNum1=num1;
let nNum2=num2;

    while(num1<num2){
        console.log(num1);
        num1++;
    }

    while(nNum2>=nNum1){
        console.log(nNum2);
        nNum2--;
    }


