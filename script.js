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
let userInput = "tomato";
// prompt("What do you want to do?");



while (userInput !== "quit"){


    userInput = prompt("What would you like to do?")



    if (userInput === "new") {
        
        userInput = prompt("Enter a new to-do!");
        console.log(`${userInput} added to the list!`)
        masterList.push(userInput); 
        
     
    } else if (userInput === "list"){
      console.log("********************");
    for (let i = 0; i < masterList.length; i++){

     console.log(i + ": " + masterList[i]);
    //  console.log(masterList);
    }
      console.log("********************");
    } else if (userInput === "delete") {
        let j = prompt("Enter an index to delete!");
        // console.log(`To-do ${j} deleted!`);
        console.log(`${masterList[j]} deleted!`);
        masterList.splice(j, 1);


    }

}
  console.log("YOU QUIT THE APP!");
