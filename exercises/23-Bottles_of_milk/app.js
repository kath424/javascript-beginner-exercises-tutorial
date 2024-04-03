// Your code here: 
let string1 = " bottles of milk on the wall, "
let string2 = " bottles of milk. Take one down and pass it around, "
let string3 = " bottles of milk on the wall."
let string4 = " bottle of milk on the wall."
let string5 = "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall."

for(let i = 99; i >= 1 ; i--){
    if(i > 2){
        console.log(i + string1 + i + string2 + (i - 1) + string3);
    }
    else if(i == 2){
        console.log(i + string1 + i + string2 + (i - 1) + string4);
    
    }else {
        console.log(i + " bottle of milk on the wall, " + i + " bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
    }

}
console.log(string5);
