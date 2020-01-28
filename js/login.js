function register() {
	var user = {
		'name': document.getElementById("name").value,
		'surname': document.getElementById("surname").value,
		'gender': document.getElementById("gender").value,
		'facebook': document.getElementById("facebook").value,
		'instagram': document.getElementById("instagram").value,
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