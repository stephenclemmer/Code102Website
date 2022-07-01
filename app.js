// let usersPokemon = prompt("Guess my favorite Pokemon?")
// if (usersPokemon == null) {
//     console.log("What? You don't want to guess?! Okay, you're officially no fun.");
// } else if (usersPokemon.toLowerCase() == "pikachu") {
//     console.log("You got it! I find pikachu electrifying!");
// } else {
//     console.log("That's a great pokemon, but that's not my favorite. Try again! (Hint: Sometimes they are sweet and sometimes they are downright shocking.");
// }

// Start of First Function

// function guessPokemon(){

//     let usersPokemon = prompt("Guess my favorite Pokemon?")
//     let message;

//     if (usersPokemon == null) {
//         message = "What? You don't want to guess?! Okay, you're officially no fun.";
//     } else if (usersPokemon.toLowerCase() == "pikachu") {
//         message = "You got it! I find pikachu electrifying!";
//     } else {
//         message = "That's a great pokemon, but that's not my favorite. Try again! (Hint: Sometimes they are sweet and sometimes they are downright shocking.";
//     }
//     // Displaying 'message'on the Site by placing 'document.write()' within the function. See related <script> in HTML to see .
//     document.write(message);
//     return message;
// }   

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



// Start of Lab 8

function magikarpPic(){
    let number = prompt("What's your favorite whole number between 1 and 10?")

    for(let i = 0; i < number; i++){
            document.write("<img src='https://upload.wikimedia.org/wikipedia/en/3/3f/Pok%C3%A9mon_Magikarp_art.png' />")
    }
}





// End of Lab 8





// Start of Lab 7 Function: This created a recursive loop.

function guessPokemon(){

    let usersPokemon = prompt("Guess my favorite Pokemon? Hint: Sometimes they are sweet and sometimes they are downright shocking.")
    
    let message;

    if (usersPokemon == null) {
        console.log("you are in the if")
        message = "What? You don't want to guess?! Okay, try again next time!";
        document.write(message);
    }
    else if (usersPokemon.toLowerCase() == "pikachu") {
        console.log("you are in the else if")
        message = "You got it! I find pikachu electrifying!";
        document.write(message);
    } else {
        console.log("you are in the else")
        guessPokemon();
        // message = "That's a great pokemon, but that's not my favorite. Try again!"; 
    }
    // Displaying 'message'on the Site by placing 'document.write()' within the function. See related <script> in HTML to see .
   
    // Refactored below
    // return message;
}   

// End of Lab 7 Function


