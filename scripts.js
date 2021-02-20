
function geom() {
	let h = document.forms.test2.elements.h.value;
	let w = document.forms.test2.elements.w.value;

	if (h==='' || w ==='') {
		document.getElementById('result').innerHTML = 'Поля заполнены неверно';
		return;
	}

	h = Number(h);
	w = Number(w);

	if (Number.isNaN(h) || Number.isNaN(w)) {
		document.getElementById('result').innerHTML = 'Поля заполнены неверно';
		return;
	}

	let res = h*w/2;

	document.getElementById('result').innerHTML = res;	
}

function geomErase() {
	document.forms.test2.elements.h.value = '';
	document.forms.test2.elements.w.value = '';
	document.getElementById('result').innerHTML = '';
}

function comStr() {
	let str1 = document.forms.test3.elements.str1.value;
	let str2 = document.forms.test3.elements.str2.value;

	if (str1==='' || str2 ==='') {
		document.getElementById('boolResult').innerHTML = 'Поля заполнены неверно';
		return;
	}

	let res = str1.length === str2.length;

	document.getElementById('boolResult').innerHTML = res;
	
}
function strErase() {
	document.forms.test3.elements.str1.value = '';
	document.forms.test3.elements.str2.value = '';
	document.getElementById('boolResult').innerHTML = '';
}


let arr = [];

let strElem = '';

function arrAddElement() {
	let str = document.forms.test4.elements.arr.value;

	if(str === ''){
		document.getElementById('arrResult').innerHTML = 'Поле заполнено неверно';
		return;
	}

	str = Number(str);

	if(Number.isNaN(str)){
		document.getElementById('arrResult').innerHTML = 'Поле заполнено неверно';
		return;
	}

	arr.push(str);

	strElem = strElem + str + '  ';

	document.getElementById('arrElem').innerHTML = strElem;
	document.getElementById('arrResult').innerHTML = '';
	document.forms.test4.elements.arr.value = '';

}

function arrRes() {
	let str = document.forms.test4.elements.arr.value;

	if(str !== ''){
		str = Number(str);

		if(!Number.isNaN(str)){
			arr.push(str);
			strElem = strElem + str + '  ';
			document.getElementById('arrElem').innerHTML = strElem;
			document.forms.test4.elements.arr.value = '';
		}
		else document.forms.test4.elements.arr.value = '';
	}	

	if(arr.length === 0){
		document.getElementById('arrResult').innerHTML = 'В массиве нет ни одного элемента';
		return;
	}

	let max = arr[0];
	let min = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if(arr[i] > max) max = arr[i];

		if(arr[i] < min) min = arr[i];
	}
	
	let res = 'Наибольшее число в массиве = ' + max + '. Наименьшее число = ' + min;
	document.getElementById('arrResult').innerHTML = res;

}

function arrErase() {
	document.forms.test4.elements.arr.value = '';
	document.getElementById('arrElem').innerHTML = '';
	strElem = '';
	document.getElementById('arrResult').innerHTML = '';
}


function openWindow(inform) {
	display = document.getElementById('inform').style.display;
	if (display=="none"){
		document.getElementById('inform').style.display = "block";

	}
	else{
		document.getElementById('inform').style.display = "none";
	}
	document.body.style.overflow = "hidden";


	let container = document.getElementById("inform2");
	container.innerHTML = "";
	let str = document.createElement("h2");
	let a = new Date();
	str.innerText = "Сегодня " + a.getDate() + "." + (a.getMonth()+1) + "." + a.getFullYear(); 
	container.appendChild(str);

	console.log(a);

	let str2 = document.createElement("h2");
	str2.innerText = "Я знаю, что тебя зовут "  + localStorage.getItem('test'); 
	container.appendChild(str2);

	

}

function closeWindow(inform) {
	display = document.getElementById('inform').style.display;

	if (display!="none"){
		document.getElementById('inform').style.display = "none";
	}
	document.body.style.overflow = "";

	
}
