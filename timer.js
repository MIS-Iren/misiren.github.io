let count;

function Start() {
	let hour = document.forms.testTimer.elements.hour.value;
	let min = document.forms.testTimer.elements.min.value;
	let sec = document.forms.testTimer.elements.sec.value;

	hour = Number(hour);
	min = Number(min);
	sec = Number(sec);

	if (Number.isNaN(hour) || Number.isNaN(min) || Number.isNaN(sec)) {
		document.getElementById('secCounter').innerHTML = 'Ошибка в данных';
		return;
	}

	let counter = sec + min*60 + hour*60;

	document.getElementById("buttonStart").disabled = true; 
	document.getElementById("buttonsErase").disabled = true;
	
	count = setInterval(Time, 1000);

	function Time() {
		document.getElementById('secCounter').innerHTML = '';

		getTimerParams(counter);

		if(counter===0){
			clearInterval(count);

			setTimeout(() => {
				document.getElementById("buttonStart").disabled = false;
				document.getElementById("buttonsErase").disabled = false;
				document.forms.testTimer.elements.hour.value = '';
				document.forms.testTimer.elements.min.value = '';
				document.forms.testTimer.elements.sec.value = '';				
			}, 1000);						
		}
		counter--;

		
	}
}

function Stop() {
	clearInterval(count);

	document.getElementById("buttonStart").disabled = false;
	document.getElementById("buttonsErase").disabled = false;
}



function Erase() {
	document.forms.testTimer.elements.hour.value = '';
	document.forms.testTimer.elements.min.value = '';
	document.forms.testTimer.elements.sec.value = '';
	document.getElementById('secCounter').innerHTML = '';
}

function getTimerParams(counter) {
	let hour = Math.floor(counter/3600);
	let min = Math.floor(counter/60)%60;
	let sec = counter%60;

	document.forms.testTimer.elements.hour.value = hour;
	document.forms.testTimer.elements.min.value = min;
	document.forms.testTimer.elements.sec.value = sec;

}