// Clock Build


const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time(){
	const currentDate = new Date();
	let hr = currentDate.getHours() % 12 || 12;
	let min = currentDate.getMinutes();
	let sec = currentDate.getSeconds();

	hr = hr.toString().padStart(2,"0");
	min = min.toString().padStart(2,"0");
	sec = sec.toString().padStart(2,"0");

	const timeString = '${hr}:${min}:${sec}'

	hours.innerHTML = hr;
	minutes.innerHTML = min;
	seconds.innerHTML = sec;
},1000);

