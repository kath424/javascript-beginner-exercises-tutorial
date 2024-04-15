function sing(){
    const lyrics1 = "let it be";
    const lyrics2 = "there will be an answer, ";
    const lyrics3 = "whisper words of wisdom, ";
    let song = ""
    for(let i = 1; i <= 4; i++){
        song += lyrics1 + ", "  
    }
    song += lyrics2
    for(let i = 1; i <= 5; i++){
        song += lyrics1 + ", "
    } 
    song += lyrics3
    song += lyrics1

    return song 
}

//Your code above ^^^

console.log(sing());