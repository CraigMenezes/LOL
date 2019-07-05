//Write a program that prints the numbers from 1 to 100 Fizz,Buzz and FizzBuzz
for(i=1;i<101;i++){
if((i % 3 == 0) && (i % 5 == 0)){
    console.log("FizzBuzz")
}
else if(i % 3 == 0){
    console.log("Fizz")
}
else if(i % 5 == 0){
    console.log("Buzz")
}
else{
    console.log(i)
}

}

