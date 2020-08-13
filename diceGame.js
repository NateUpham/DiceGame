function diceGame(){

//Random Number Generator
var dice1 = Math.round((Math.random()) * 6);
var dice2 = Math.round((Math.random()) * 6);

//Declaring the Winner
if(dice1 > dice2){
	 document.getElementById("refresh").innerHTML = "Player 1 Wins!";

}
else if (dice1 < dice2){
	document.getElementById("refresh").innerHTML = "Player 2 Wins!";
}
else{
	document.getElementById("refresh").innerHTML = "Draw!";
}

//First Die Logic
if (dice1 < 2){
	document.getElementById("img1").src = "images/dice1.png";
}
else if (dice1 < 3){
	document.getElementById("img1").src = "images/dice2.png";
}
else if (dice1 < 4){
	document.getElementById("img1").src = "images/dice3.png";
}
else if (dice1 < 5){
	document.getElementById("img1").src = "images/dice4.png";
}
else if (dice1 < 6){
	document.getElementById("img1").src = "images/dice5.png";
}
else if(dice1 < 7){
	document.getElementById("img1").src = "images/dice6.png";
}


//Second Die Logic

if (dice2 < 2){
	document.getElementById("img2").src = "images/dice1.png";
}
else if (dice2 < 3){
	document.getElementById("img2").src = "images/dice2.png";
}
else if (dice2 < 4){
	document.getElementById("img2").src = "images/dice3.png";
}
else if (dice2 < 5){
	document.getElementById("img2").src = "images/dice4.png";
}
else if (dice2 < 6){
	document.getElementById("img2").src = "images/dice5.png";
}
else if(dice2 < 7){
	document.getElementById("img2").src = "images/dice6.png";
}
}