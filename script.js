// Clock Build


const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time(){
	const currentDate = new Date();
	let hr = currentDate.getHours() % 12 || 12;
/*
Divides current hr by 12 and displays whatever the remainder is in the hour section.
This converts the time from 24 hr format to 12 hour format.
*/
	let min = currentDate.getMinutes();
//retrieves the current minute value of real world time

	let sec = currentDate.getSeconds();

//retrieves the current second value of real world time

	hr = hr.toString().padStart(2,"0");
	min = min.toString().padStart(2,"0");
	sec = sec.toString().padStart(2,"0");
//uses "0" to create a 2 digit display if the time value is a single digit

	hours.innerHTML = hr;
	minutes.innerHTML = min;
	seconds.innerHTML = sec;
},1000);
//updates the code every second (1,000 milliseconds)




