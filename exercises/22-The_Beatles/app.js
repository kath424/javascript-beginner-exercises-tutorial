function sing(){
 let coro = "let it be, "
 let string2 = "there will be an answer, "
 let string3 = "whisper words of wisdom, let it be"
 let resultado = ""
 for(let i = 0; i <= 3; i++){
   resultado = resultado + coro;
 }
   resultado = resultado + string2;

 for(let i = 0; i <= 4; i++){
   resultado = resultado + coro;
 }

 resultado = resultado + string3;

 return resultado

}

//Your code above ^^^

console.log(sing());