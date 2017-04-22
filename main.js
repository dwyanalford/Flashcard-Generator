// dependency for inquirer npm package
var inquirer = require("inquirer");

// create our constructor function used to create BasicCard objects
function BasicCard(front, back) {
		  this.front = front;
		  this.back = back;
		}

 function ClozeCard(text, cloze) {
	  this.text = text;
	  this.cloze = cloze;
	   }

// create function to start BasicCard game when user selects it at opening prompt.

function playBasic() {
		var firstPresident = new BasicCard(
			"Who was the first President of the United States?", "George Washington");
    // code to be executed
    	inquirer.prompt([
      {
        name: "answer",
        message: firstPresident.front,
      },

		]).then(function(x){
    		if (x.answer == firstPresident.back){
    			console.log("That is the correct answer");
    		}
    		else {
    			console.log("Wrong answer");
    		}
    		// playBasic(); // loop the questions
		});

}; // end of playBasic() function



// create function to start ClozeCard game when user selects it at opening prompt.

function playCloze() {
		
		firstPresidentCloze = new ClozeCard(
			"George Washington was the first President of the United States?", "George Washington");
        var str = firstPresidentCloze.text;
        var result = str.replace(firstPresidentCloze.cloze, "...");

    // code to be executed
    	inquirer.prompt([
      {
        name: "answerCloze",
        message: result,
      },

		]).then(function(y){

    		if (y.answerCloze == "George Washington"){
    			console.log("That is the correct answer");
    		}
    		else {
    			console.log("Wrong answer");
    		}
    		// playCloze();	

		}); // end of playCloze() function firstPresidentCloze.text

};



// user determines which game to play at the beginning - BasicCard? or ClozeCard?
inquirer.prompt([
      {
        name: "name",
        message: "Which Game do you want to play?",
        type: "rawlist",
        choices: ["BasicCard", "ClozeCard"],
      },

]).then(function(answers) {

	if (answers.name === "BasicCard") {
		    playBasic();
		    // console.log("running playBasic() function");
	} else if (answers.name === "ClozeCard"){ 
		    playCloze();
		    // console.log("running playCloze() function");
		}

}); // end of then answer function





