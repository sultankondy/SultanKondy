var username, email, password, password2;
var emailLog, passLog;

function modalOpen() {
	document.querySelector('.registor-modal').style.display = "flex";
}
function modalClose() {
	document.querySelector('.registor-modal').style.display = "none";
}

function registration() {
	username = document.querySelector('#username').value;
	email = document.querySelector('#email').value;
	password = document.querySelector('#password').value;
	password2 = document.querySelector('#password2').value;
	if(password===password2){
		/*document.querySelector('.registor-modal').style.display = "none"*/;
		$('.registor-modal').fadeOut(500);
		/*document.querySelector('.ok').style.display = "flex";*/
		$('.ok').fadeIn(500);
		$('.ok-inner').fadeIn(500).fadeOut(2000);
		$('.ok').fadeOut(2000);
	}else{
		document.getElementById('massage').innerHTML = "Please, write your password correctly!";
	}
}

function checkAcc() {
	emailLog = document.querySelector('#email-l').value;
	passLog = document.querySelector('#pass-log').value;
	if(emailLog==="" || passLog===""){
		document.getElementById('mass-log').innerHTML = "Fields cannot be blank";
	}
	else if(emailLog===email && passLog===password){
		document.querySelector('.login-btn').href = "./index.html";
		// document.getElementByClassName('after-login').innerHTML = emailLog;
	}else if(emailLog!==email || passLog!==password){
		document.getElementById('mass-log').innerHTML = "Please check the spelling of your login and password.";
	}
}





