let list = document.getElementsByTagName('buttonForUserName');

function func1() {
	let userForm = document.forms.test;
	let userName = userForm.elements.userNameInForm;

	if (userName.value==0) {
		alert('А ты имя не написал. Ты думал, я не замечу!?');
		return;
	}

	localStorage.setItem('test', userName.value);

	funOnload();
}

function funOnload() {

	let res = 'Привет, ' + localStorage.getItem('test') + '!';

	if (localStorage.getItem('test') == null) {		
		return;
	}
	
	document.getElementById('HelloUser').innerHTML = res;

}