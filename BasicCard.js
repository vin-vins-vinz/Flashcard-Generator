var inquirer = require("inquirer");

function BasicCard(basicFront, basicEnd){
	this.basicFront = basicFront;
	this.basicEnd = basicEnd;
}

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington")

if (process.argv[2] === "question") {console.log(firstPresident.basicFront)}
else if (process.argv[2] === "answer"){console.log(firstPresident.basicEnd)}
	else {console.log(firstPresident.basicFront);
		console.log(firstPresident.basicEnd)}

// var createQuestion = function (){
// 		console.log("\nCreate your question below.\n")
// 		inquirer.prompt([
// 			{ 
// 				basicFront: "basicFront",
// 				message: "Your question: "
// 			},{
// 				basicKey: "basicKey",
// 				message: "Your keyword in your questoin: "
// 			},{
// 				basicEnd: "basicEnd",
// 				message: "Your answer: "
// 			}
// 		]).then(function(answer){
// 			console.log("Your question and answer are saved.")
// 		})

// var questionKey = new BasicCard(basicFront, basicEnd)



module.exports = BasicCard