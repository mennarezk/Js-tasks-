
let FirstNumber=prompt("FirstNumber")
let SecondNumber=prompt("SecondNumber")
let ThirdNumber=prompt("ThirdNumber")

if(FirstNumber < SecondNumber||SecondNumber>ThirdNumber){
    console.log(SecondNumber+" "+ "is largest")
}
else if( SecondNumber < ThirdNumber||SecondNumber>FirstNumber){
    console.log(ThirdNumber+" "+ "is largest")
}
else if (ThirdNumber > FirstNumber||ThirdNumber>SecondNumber){
    console.log(ThirdNumber+" "+ "is largest")}
    else 
    {
        console.log("!!!!!!!!!!!")
    }


