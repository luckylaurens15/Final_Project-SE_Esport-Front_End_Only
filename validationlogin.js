var errorUsername = document.getElementById("errorUsername");
var errorPassword = document.getElementById("errorPassword");

function submitForm(){
  var form = document.getElementById("form_login");
  form.submit();
}

function validate(){
  if(validateUsername() && validatePassword()){
    submitForm();
  }
  return false;
}

function validateUsername(){
  var username = document.getElementById("username").value;
  
  if(username == ""){
    errorUsername.innerHTML = "Username must be filled!";
    return false;
  }
  if(username.length < 5){
    errorUsername.innerHTML = "Username must contain at least 5 characters."
    return false;
  }

  errorUsername.innerHTML = '';
  return true;
}

function validatePassword(){
  var password = document.getElementById("password").value;

  if(password == ''){
    errorPassword.innerHTML = "Password must be filled";
    return false;
  }
  if(password.length < 8){
    errorPassword.innerHTML = "Password must contain at least 8 characters."
    return false;
  }

  errorPassword.innerHTML = '';
  return true;
}
