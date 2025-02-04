let tempJul2000=[30,40,35,46,23,12,34,36,37,38,41,38,37,23,24,25,26,27,23,25,27,32,34,33,35,36,37,38,40,42];
let tempJul2001=[39,31,31,46,46,42,34,31,37,38,41,38,37,39,46,45,31,39,38,30,43,32,34,33,31,36,37,38,40,42];

let sum=0;
let avgTemp=0;

for (let i = 0; i < tempJul2000.length; i++) {
   sum=sum+tempJul2000[i];
    
}

avgTemp=sum/tempJul2000.length;

console.log(`the avg temp of jully 2000 is : ${avgTemp}`)

console.log ("the temp of jully 2001 that is above the avg of jully 2000 is below: ")

for (let i = 0; i < tempJul2001.length; i++) {
  if(tempJul2001[i]>avgTemp){
    console.log(`the temp : ${tempJul2001[i]} in day ${i+1}`);
  } 
   
}
