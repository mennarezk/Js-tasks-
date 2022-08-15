let FirstNumber=prompt("FirstNumber")
let SecondNumber=prompt("SecondNumber")

if(FirstNumber>0 && SecondNumber<0)
{
console.log(FirstNumber+" is positive"+" \n"+ SecondNumber+ "is negative")
}

else if (FirstNumber<0 && SecondNumber>0)
{
   console.log( FirstNumber+" is negative"+"\n"+SecondNumber+"is positive")

}
else 
{
   console.log(SecondNumber+"is positive"+"\n"+ FirstNumber+" is positive")
}
