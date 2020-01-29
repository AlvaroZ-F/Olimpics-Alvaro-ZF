function showRegister() {
	$('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
}

function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function register() {
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

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
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
			aler("Warning, you've got something wrong")
	}
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return JSON.parse(parts.pop().split(";").shift());
}