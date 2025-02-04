let num= +prompt("enter a number");
let digit=0;
let opposite=0;
let numSave=num;

if(isNaN(num)){
    throw new Error ("this is not a number")
}
while(num>0){
    digit=num%10;
    opposite=opposite*10+digit;
    num=parseInt(num/10);

}

console.log(`the opposite of the number : ${numSave} is the number : ${opposite}`)