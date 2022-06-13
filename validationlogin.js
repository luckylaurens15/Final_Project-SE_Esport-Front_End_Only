var errorEmail = document.getElementById("errorEmail");
var errorPassword = document.getElementById("errorPassword");

function submitForm(){
  var form = document.getElementById("form_login");
  form.submit();
}

function validate(){
  if(validateEmail() && validatePassword()){
    submitForm();
  }
  return false;
}

function validateEmail(){
  var email = document.getElementById("email").value;

  if(email == ''){
    errorEmail.innerHTML = "Email must be filled!";
    return false;
  }

  var atSymbol = email.indexOf('@');
  var dot = email.lastIndexOf('.');

  if(atSymbol < 1 || dot <= atSymbol + 1 || dot == email.length - 1 || email.indexOf("..") != -1 || email.indexOf(" ") != -1){
    errorEmail.innerHTML = "Input valid Email!!";
    return false;
  }
  errorEmail.innerHTML = '';
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
