// Everything is done via prompt()
// First user-step is to enter a command
// When user adds something to the list, console.log("userInput" added to list)
//    and it takes user back to originial prompt box for a command

// List command console.log()'s all to-do's on the list with an index beside of it
// 'Delete' command prompts user to enter the index of the item they want to delete
// After entering the index to remove, console.log() "To-do removed"

// If user enters an invalid command/value, just keep looping the question
// "quit" will quit the 'app' and console.log() a quit-confirmation message



let masterList = [];
let userInput = prompt("What do you want to do?");



while (userInput !== "quit"){

    if (userInput = "new") {
        
        userInput = prompt("Enter a new to-do!");
        masterList.push(userInput);





}
 
    console.log(userInput);
    console.log(masterList);
 




}