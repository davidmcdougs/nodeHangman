const randomWord = require('random-word');
const coolstory = require('coolstory.js');
var inquirer = require('inquirer');

//use randomWord() to call randomWord.
var words = [];
var letters = /^[A-Za-z]+$/;
var iteration = 0;
var guesses = 15;
var userLetter;
var wordStatus;

var Word = function(){
	var roll = coolstory.title();
	this.name = roll;
	this.size = roll.length;
	var search = this.name.search(' ');
		if(search == -1){
	this.hasSpace = 0;
		}
		else{
	this.hasSpace = 1;
		}
	this.makeSpaces = function(){
		var placeholders="";
			if(this.hasSpace === 0){
for(i=0; i<this.size; i++){
placeholders=placeholders+"_ ";
			}
		}
		else{
			for (i=0; i<this.size; i++){
			var char = this.name.charAt(i);
			if(char === " "){
				placeholders=placeholders+"   "
				}
			else{
				placeholders=placeholders+"_ "
				}
			}
		}
		console.log(placeholders);
		wordStatus = placeholders;
		console.log(wordStatus);
	}
}


function makeWords() {
var newWord = new Word();
words.push(newWord)
}

function cliGo(nother) {
inquirer.prompt([
{
	type: "confirm",
	name: "yesNo",
	message: "Would you like to play a"+nother+" game of Hangman with me?"
}
	]).then(function(response) {
if(response.yesNo){
console.log("Whoo hoo! \nI am now going to make a random phrase which may sound like a story title.");
setTimeout(function() {
startGame(iteration);
    }, 1000);
			}
		else{
console.log("Okay, well, enjoy whatever else you're gonna do.")
			}
		}
	)
};
function startGame(iteration){
	makeWords();
	console.log("\n");
	words[iteration].makeSpaces();
	console.log("\n");
	console.log("looks like there are "+words[iteration].size+" charecters in this phrase.\nI will give you..."+guesses+" tries to guess the word, one letter at a time.");
	setTimeout(function() {
	getUserLetter();
    }, 1000);
}
function getUserLetter(){
	inquirer.prompt([
	{
		type:"input",
		name:"letter",
		message: "Please enter a single letter to guess. "+guesses+" remaining."
	}]).then(function(letter){
		if(letter.letter.length > 1){
			console.log("Please only enter a single letter");
			getUserLetter();
		}
		else if(letter.letter.match(letters)){
			letter.letter = userLetter;
				setTimeout(function() {
				guess();
    			}, 1000);
		}
		else{
			console.log("Please enter only letters.");
			getUserLetter();
		}
	})
}
function guess(){
	console.log(wordStatus);
	console.log(words[iteration].name);
	for (i=0; i<wordStatus.length; i++){
		var char = wordStatus.charAt(i);
		console.log("I am userLetter "+userLetter);
		console.log("I am char "+char);
		if(char == userLetter){
		wordStatus.charAt(i) = userLetter;
		console.log(wordStatus);
		}
		else {
			console.log("miss");
		}
	}
		guesses--;
		getUserLetter();
}
cliGo("");
