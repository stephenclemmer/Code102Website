let usersPokemon = prompt("Guess my favorite Pokemon?")
if (usersPokemon == null){
    console.log("What? You don't want to guess?! Okay, you're officially no fun.");
}
if (usersPokemon.toLowerCase() == "pikachu"){
    console.log("You got it! I find pikachu electrifying!");
} else {
    console.log("That's a great pokemon, but that's not my favorite. Try again! (Hint: Sometimes they are sweet and sometimes they are downright shocking.");
}
