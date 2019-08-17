// Set the date we're counting down to
var countDownDate = new Date("Aug 31, 2019 14:00:00");
var endTime = new Date("Aug 31, 2019 16:00:00");
updateTime();
var x = setInterval(updateTime, 1000);

function updateTime() {
	var now = new Date();
	var distance = countDownDate - now;
	  
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById("timer").innerHTML = days + "d " + hours + "h "
	+ minutes + "m " + seconds + "s ";

	// If the count down is over, write some text 
	if ((distance < 0) && (now > endTime)) {
		clearInterval(x);
		document.getElementById("timer").innerHTML = "PRAWN IS HAPPENING";
	} else if (now > endTime) {
		clearInterval(x);
		document.getElementById("timer").innerHTML = "PRAWN IS OVER";
		document.getElementById("emailentry").clear;
	}
}