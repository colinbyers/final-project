//changes stoplight from red to green
function changeImage() {
            var image = document.getElementById('stoplight');
            if (image.src.match("red-stop-light-hi.png")) {
                image.src = "green-stoplight-hi.png";
            }
            else {
                image.src = "red-stop-light-hi.png";
            }
        }//end changeImage




//code that starts the race and displays winner
function startRace() {
	var racers   = [ document.getElementById("Red"), document.getElementById("Blue") ];
	var interval = setInterval( myFunction, .1 );
    

	function myFunction() {
    var numRand = 5;  //integer to be generated will be between 0 and this number
    
    
    var randO = Math.floor(Math.random() * numRand);  //creates random integer that racers move forward
    var racer  = racers[ Math.floor(Math.random() * racers.length) ];
    var newPos = parseInt( racer.style.left || 0) + randO; //holds new position for racers
    racer.style.left = newPos + "px";
    
    
    if( (newPos + racer.clientWidth) >= window.outerWidth){  //if1 statement to display winning racer
        clearInterval( interval );
        if (racer.id == 'Red') {
        document.getElementById('winner').innerHTML = '<img onclick="reset()" src="https://www.colourbox.com/preview/8372217-winner-red-grunge-stamp.jpg">';
        }
        else if (racer.id == 'Blue') {
        document.getElementById('winner').innerHTML = '<img onclick="reset()" src="https://www.colourbox.com/preview/8372242-winner-blue-grunge-stamp.jpg">';
        }
    }//end if1
    
}//end myFunction
}//end startRace




//colors the Racers' tags
document.getElementById("rd").innerHTML = "RED (#16)";
document.getElementById("bl").innerHTML = "BLUE (#11)";




//puts number into the racers




//gets current date to display
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
    dd = '0'+dd
} 

	if(mm<10) {
    mm = '0'+mm
} 

	today = mm + '/' + dd + '/' + yyyy;
    
    document.getElementById("raceTimef").innerHTML = '<p><strong>RACE DATE:  </strong>' + today + '</p>';



//resets the racers back to original position
function reset() {
	location.reload();
    
	}//end reset