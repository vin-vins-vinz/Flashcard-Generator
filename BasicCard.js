var inquirer = require("inquirer");

function BasicCard(basicFront, basicKey, basicEnd){
	this.basicFront = basicFront;
	this.basicKey = basicKey;
	this.basicEnd = basicEnd;
	
	this.

}


var createQuestion = function (){
		console.log("\nCreate your question below.\n")
		inquirer.prompt([
			{ 
				basicFront: "basicFront",
				message: "Your question: "
			},{
				basicKey: "basicKey",
				message: "Your keyword in your questoin: "
			},{
				basicEnd: "basicEnd",
				message: "Your answer: "
			}
		]).then(function(answer){
			console.log("Your question and answer are saved.")
		})

var questionKey = new BasicCard(basicFront, basicEnd)
// Create a new file named BasicCard.js:
// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.
// Examples

// Your constructors should work as follows.
// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 


module.exports = BasicCard