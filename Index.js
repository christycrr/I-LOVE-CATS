let myname = prompt("what is your name");
document.write("welcome " + myname)
if (myname == "Christy") {
    console.log("Hey girl");
    document.write("Hey girl!");
}else {
    console.log("Greetings")
    document.write("Cats are so cute")
}

let guess = prompt("What is my favorite number? 0-10")
let favnumber = "7"
if (guess == 7) {
     alert("That's it!");
     document.write ("You guessed my favorite number good job!")
}
if (guess !== 7) { alert("That's not it!") }
document.write("Who sent you?")

