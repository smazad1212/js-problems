let deadline = new Date(); //set today's date

function handleSetTimer() {
	deadline = document.getElementById('date-picker').value;
	initializeClock('timer', deadline);
}

function getTimeRemaining(endtime) {
  let remainingTime = Date.parse(endtime) - Date.parse(new Date()); //calculates the time difference between today and the deadline in milliseconds
  let seconds = Math.floor( (remainingTime/1000) % 60 );
  let minutes = Math.floor( (remainingTime/1000/60) % 60 );
  let hours = Math.floor( (remainingTime/(1000*60*60)) % 24 );
  let days = Math.floor( remainingTime/(1000*60*60*24) );
  return {
	'total': remainingTime,
	'days': days,
	'hours': hours,
	'minutes': minutes,
	'seconds': seconds
  };
}

function initializeClock(id, endtime){
  let countdown = document.getElementById(id);
  function updateClock() {
	  let remaining = getTimeRemaining(endtime);
	  countdown.innerHTML = 	'Days: ' + remaining.days + '<br>' +
							  	'Hours: '+ remaining.hours + '<br>' +
							  	'Minutes: ' + remaining.minutes + '<br>' +
							  	'Seconds: ' + remaining.seconds;
	  if(remaining.total <= 0){
		  clearInterval(timeinterval);
	  }
  }
  updateClock(); //initialize clock
  let timeinterval = setInterval(updateClock,1000); //run coundown every second
}

initializeClock('timer', deadline);
