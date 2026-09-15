//Change bindingSize for different sized grids
let bindingSize = 8;
let stringFirst = " #";
let stringSecond = "# ";

for (let number = bindingSize++; number > 0; number--){
    if(number % 2 == 0){
        console.log(stringFirst.repeat(bindingSize/2))
    }else{
        console.log(stringSecond.repeat(bindingSize/2))
    }
}