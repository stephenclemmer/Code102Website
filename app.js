// let usersPokemon = prompt("Guess my favorite Pokemon?")
// if (usersPokemon == null) {
//     console.log("What? You don't want to guess?! Okay, you're officially no fun.");
// } else if (usersPokemon.toLowerCase() == "pikachu") {
//     console.log("You got it! I find pikachu electrifying!");
// } else {
//     console.log("That's a great pokemon, but that's not my favorite. Try again! (Hint: Sometimes they are sweet and sometimes they are downright shocking.");
// }

// Start of First Function

function guessPokemon(){

    let usersPokemon = prompt("Guess my favorite Pokemon?")
    let message;

    if (usersPokemon == null) {
        message = "What? You don't want to guess?! Okay, you're officially no fun.";
    } else if (usersPokemon.toLowerCase() == "pikachu") {
        message = "You got it! I find pikachu electrifying!";
    } else {
        message = "That's a great pokemon, but that's not my favorite. Try again! (Hint: Sometimes they are sweet and sometimes they are downright shocking.";
    }
    // Displaying 'message'on the Site by placing 'document.write()' within the function. See related <script> in HTML to see .
    document.write(message);
    return message;
}   

// End of First Function


// This would display the message on the console:
// console.log(guessPokemon());



// // New Function
// function addNumbers(num1, num2){
//     return num1 + num2;
// }

// console.log(addNumbers(3, 9));

// // returning a string rather than numbers
// console.log(addNumbers("Hello ", "World"));


// // Displaying on the console
// let friendlyComputer = addNumbers("Hello ", "World");
// console.log(friendlyComputer);

