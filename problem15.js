  let FirstNumber=parseFloat(prompt("FirstNumber"))
 let operator=prompt("+,-,/,*")
 let SecondNumber=parseFloat(prompt("SecondNumber"))
 let result;
switch(operator){
   case'+':
    result=FirstNumber+SecondNumber
    console.log(FirstNumber+SecondNumber)
 break;

 case'-':
    result=FirstNumber-SecondNumber
    console.log(FirstNumber-SecondNumber)
    break;

  case'/':
    result=FirstNumber/SecondNumber
    console.log(FirstNumber/SecondNumber)
    break;

  case'*':
    result=FirstNumber*SecondNumber
    console.log(FirstNumber*SecondNumber)
    break;

default:
console.log("Invalid")
break;
}