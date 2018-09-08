/**
 * 
 */

var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;//位置
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false) {
	guess = prompt("SHOOT! (Enter number of 0~6) :");
	if(guess<0 || guess>6) {
		alert("please enter a valid number!");
	} else {
		guesses = guesses + 1;
		
		if(guess == location1 || guess == location2 || guess == location3) {
			alert("HIT!");
			hits = hits + 1;
			
			if(hits == 3) {
				isSunk = true;
				alert("You sunk my battle ship!!!");
			}
		} else {
			alert("MISS!");
		}
	}
}

var stats = "你猜了" + guesses + " 次擊沉了我的戰艦， " + "準確率為: " + (3/guesses)*100 + "%";
alert(stats);