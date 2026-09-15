//Change bindingSize for different sized grids
let bindingSize = 8;
let grid = "";

for (let number1 = 0; number1 < bindingSize; number1++){
    // modulus % is used to see if row+column is even or uneven thus alternates between " " and "#"
    console.log(number1);
    for (let number2 = 0; number2 < bindingSize; number2++){
        if((number1+number2) % 2 == 0){
            grid +=" ";
        }else{
            grid +="#";
        }
    }
    // when a row is finished breaks for a new row
    grid +="\n"
}
console.log(grid);