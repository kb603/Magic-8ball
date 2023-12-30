let userName = "Kojo";
// A tenary expression that decides what to do if the user inputs a name or not
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

const userQuestion = "Will I get a promotion next year?";
// The logs the question together with the name the user provided
console.log(userQuestion, `${userName}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = `${randomNumber}`;
console.log(eightBall);

switch (eightBall) {
  case "1":
    console.log("It is certain");
    break;
  case "2":
    console.log("It is decidely so");
    break;
  case "3":
    console.log("Reply hazy try again");
    break;
  case "4":
    console.log("Cannot predict now");
    break;
  case "5":
    console.log("Do not count on it");
    break;
  case "6":
    console.log("My sources say no");
    break;
  case "7":
    console.log("Outlook not so good");
    break;
  case "8":
    console.log("Signs point to yes");
    break;
  default:
    console.log("error");
    break;
}
