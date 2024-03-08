// Your code here: 
let string1 = " bottles of milk on the wall, "
let string2 = " bottles of milk. Take one down and pass it around "
let string3 = "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall."

console.log(window);

for(let i = count; i >= 1 ; i--){
    if(i !== 1){
        console.log(i + string1 + i + string2)
    }else {
        console.log(i + " bottle of milk on the wall " + i + " Take one down and pass it around, no more bottles of milk on the wall.");
    }

}
console.log(string3);
