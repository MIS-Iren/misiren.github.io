function userResult(ans1="JavaScript",ans2="Number",ans3="Window",ans4="Это строгое сравнение величин",
	ans5="Сравнивает с приведением величин к общему типу",ans6="Он идеален",ans7="var, let, const",
	ans8="язык сценариев, или скриптов",ans9="Этот",ans10="Очень понравился") {
	this.ans1 = ans1;
	this.ans2 = ans2;
	this.ans3 = ans3;
	this.ans4 = ans4;
	this.ans5 = ans5;
	this.ans6 = ans6;
	this.ans7 = ans7;
	this.ans8 = ans8;
	this.ans9 = ans9;
	this.ans10 = ans10;
}

function getAns() {

	let res = new userResult();
	let res2 = [];
	let a = 0;
	let checker = false;
	
	
	document.getElementsByName("ans1").forEach(function(input) {
			if(input.checked){
				checker = true;
				if(res.ans1 !== input.value){
					res.ans1 = input.value;
					input.parentNode.style.color = "red";
				}
				else{
					input.parentNode.style.color = "green";
					a++;
				}

				input.checked = false;
			}
		}
	);

	document.getElementsByName("ans2").forEach(function(input) {
			if(input.checked){
				if(res.ans2 !== input.value){
					res.ans2 = input.value;
					input.parentNode.style.color = "red";
				}
				else{
					input.parentNode.style.color = "green";
					a++;
				}

				input.checked = false;
			}
		}
	);

	document.getElementsByName("ans3").forEach(function(input) {
			if(input.checked){
				if(res.ans3 !== input.value){
					res.ans3 = input.value;
					input.parentNode.style.color = "red";
				}
				else{
					input.parentNode.style.color = "green";
					a++;
				}

				input.checked = false;
			}
		}
	);

	document.getElementsByName("ans4").forEach(function(input) {
			if(input.checked){
				if(res.ans4 !== input.value){
					res.ans4 = input.value;
					input.parentNode.style.color = "red";
				}
				else{
					input.parentNode.style.color = "green";
					a++;
				}

				input.checked = false;
			}
		}
	);

	document.getElementsByName("ans5").forEach(function(input) {
			if(input.checked){
				if(res.ans5 !== input.value){
					res.ans5 = input.value;
					input.parentNode.style.color = "red";
				}
				else{
					input.parentNode.style.color = "green";
					a++;
				}

				input.checked = false;
			}
		}
	);

	document.getElementsByName("ans6").forEach(function(input) {
			if(input.checked){
				if(res.ans6 !== input.value){
					res.ans6 = input.value;
					input.parentNode.style.color = "red";
				}
				else{
					input.parentNode.style.color = "green";
					a++;
				}

				input.checked = false;
			}
		}
	);

	document.getElementsByName("ans7").forEach(function(input) {
			if(input.checked){
				if(res.ans7 !== input.value){
					res.ans7 = input.value;
					input.parentNode.style.color = "red";
				}
				else{
					input.parentNode.style.color = "green";
					a++;
				}

				input.checked = false;
			}
		}
	);

	document.getElementsByName("ans8").forEach(function(input) {
			if(input.checked){
				if(res.ans8 !== input.value){
					res.ans8 = input.value;
					input.parentNode.style.color = "red";
				}
				else{
					input.parentNode.style.color = "green";
					a++;
				}

				input.checked = false;
			}
		}
	);

	document.getElementsByName("ans9").forEach(function(input) {
			if(input.checked){
				if(res.ans9 !== input.value){
					res.ans9 = input.value;
					input.parentNode.style.color = "red";
				}
				else{
					input.parentNode.style.color = "green";
					a++;
				}

				input.checked = false;
			}
		}
	);

	document.getElementsByName("ans10").forEach(function(input) {
			if(input.checked){
				if(res.ans10 !== input.value){
					res.ans10 = input.value;
					input.parentNode.style.color = "red";
				}
				else{
					input.parentNode.style.color = "green";
					a++;
				}

				input.checked = false;
			}
		}
	);


	let container = document.getElementById("testAnswer");
	container.innerHTML = "";
	let str = document.createElement("p");
	str.innerText = "Количество правильных ответов равно " + a;
	container.appendChild(str);
}

function ansErase() {	

	let forma = document.querySelectorAll('label');

	for (const iterator of forma) {
		iterator.style.color = "white";
	}
	
	document.getElementById("testAnswer").innerHTML = '';
}