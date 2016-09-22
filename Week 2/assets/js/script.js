//step 1 -- create variable
var replies = ["Yes", "No", "How should I know?", "Feed me and then I will tell you.", "Maaaaybe."];
// array of replies, order must correspond with the right sound

var sounds = ["yes", "no", "how", "feedme", "maybe"];//name of sound file
var eyes = ["eyes", "eyes2", "eyes3", "eyes4", "eyes5", "eyes6", "eyes7"];
var randomNum = 0; //this variable will hold the current randomized number to pull from the replies array
var rabdomEyes = 0; //this variable will hold random number to pull a new eye expression, seperate variable because the amount of eyes exceed the amount of replies
var audioElement;

//step 11 -- create a function based off of random variable being passed
function playSounds(r) {
	audioElement.setAttribute('src', "assets/sound/" + sounds[r] +".mp3");
	audioElement.play();
}


//step 6 --create a function that returns a random number within the limits of the array length
//function accepts name of the array, so we can use one function for different arrays with different lengths
function randomNumGenerator(arrayName) {
	//create random number reply
	return Math.floor(Math.random() * arrayName.length);
	//Math.floor returns a number representing the largest integer less than or equal to the specified number.
	//Math.random returns a value between(0,1).
}

//STEP 5 --create answerQuestion function
function answerQuestion() {
	//step 7 -- assign a random number to randomNum
	randomNum = randomNumGenerator(replies);
	console.log("Random reply:" + randomNum);

	//step 9 -- pick a reply using random number
	//vanilla js
	// document.getElementById("speech").textContent = replies[randomNum];
	$('#speech').text(replies[randomNum]);

	//step 10 -- call playSounds function
	playSounds(randomNum);

	//step 12 -- change eyes
	randomEyes = randomNumGenerator(eyes);
	// document.getElementById("eyes".style.backgroundImage = "url('assets/img/" + eyes[randomEyes] + ".png'");
	$('#eyes').css("background", "url('assets/img/" + eyes[randomEyes] + ".png') no-repeat");
	$('#eyes').css("background-size", "100% auto");
}

//step 3 --write init function in step2 will initialize the rest of the functions
function init() {
	console.log("Hello world");
	//step 4 --create the audio elements after everything is loaded with vanilla js because 
	//in this case with jQuery it would involve more code
	audioElement = document.createElement('audio'); //create audio element
	audioElement.setAttribute('autoplay', 'autoplay');//step audio element to autoplay

	//step 8 -- call answer function on click vanilla js
	// var submit = document.getElementById("submit");
	// submit.addElementListener("click", fuction(){
	// 	answerQuestion();
	// })

	$('#submit').click(function(){
		answerQuestion();
	});

}

//step 2 --wait until DOM is loaded then run init function
$(document).ready(function(){
	init();
})

