function addTwoNumbers(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    console.log (sum);}
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

function ask (){
let something=prompt ("Do you like cats?")
if (something == "yes")
{alert("Let's be friends")}
if (something !== "yes") {alert("That's too bad!")}
}
ask (); 

function square(number) {
    return number * number;
  }
  function rateMyPage()
  {let rating = prompt("What rating would you give my page? 1-10")
    for (let i = 0; i< rating; i++)
{document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1P-SJxnSrDtfhtW4sjJkGTEZHsl89iBPzUQ&usqp=CAU' alt='bright shiny yellow star' />")}}
rateMyPage ()
let userGuess = prompt("What is Christy's favorite color:");

  while (userGuess !== "pink") {
    userGuess = prompt("Wrong! Guess again!!!");
  }
  console.log("do you even know me?")
