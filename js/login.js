function register() {
	document.getElementById("name").show();
	document.getElementById("surname").show();
	document.getElementById("gender").show();
	document.getElementById("network1").show();
	document.getElementById("network2").show();
	document.getElementById("network3").show();
	document.getElementById("pass2").show();
	var user = {
		'name': document.getElementById("name").value,
		'surname': document.getElementById("surname").value,
		'gender': document.getElementById("gender").value,
		'email': document.getElementById("email").value,
		'network1': document.getElementById("network1").value,
		'network2': document.getElementById("network2").value,
		'network3': document.getElementById("network3").value,
		'pass': document.getElementById("pass").value
	};
	setCookie("user", JSON.stringify(user), 302);
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

function login(){
	var user = getCookie('user'),
		username = document.getElementById("name").value,
		password = document.getElementById("pass").value;

	if(user){
		if(user.name === username && user.pass === password){
			alert('Login ok');
			document.getElementById('login').remove();
			document.getElementById("usuario").innerHTML = 'Hola!, ' + user.name;
		}
		else 
		document.getElementById("warningDiv").innerHTML = '<div class="alert alert-warning"><a href="#" class="btn btn-xs btn-warning pull-right">do an action</a>       <strong>Warning:</strong> you should do an action.    </div>';
	}
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return JSON.parse(parts.pop().split(";").shift());
}