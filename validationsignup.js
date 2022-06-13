var errorEmail = document.getElementById("errorEmail");
var errorPhone = document.getElementById("errorPhone");
var errorName = document.getElementById("errorName");
var errorPassword = document.getElementById("errorPassword");
var errorConfirmPassword = document.getElementById("errorConfirmPassword");
var errorConfirm = document.getElementById("errorConfirm");

function submitForm(){
  var form = document.getElementById("form_signup");
  form.submit();
}

function validate(){
  if(validateEmail() && validatePhone() && validateName() && validatePassword() && validateConfirmPassword() && validateConfirmTnC()){
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

function validatePhone(){
    var phone = document.getElementById("phone").value;
    if(phone == ""){
      errorPhone.innerHTML = "Phone Number must be filled!";
      return false;
    }
    var flag = false;
    for (var i =0; i<phone.length ; i++){
        if (phone.charAt(i) < '0' ||phone.charAt(i) > '9' ){
            flag = true;
            break;
        }
    }
    if(flag){
      errorPhone.innerHTML = "Phone Number must be numeric."
      return false;
    }
  
    errorPhone.innerHTML = '';
    return true;
  }

function validateName(){
  var name = document.getElementById("name").value;
  
  if(name == ""){
    errorName.innerHTML = "Name must be filled!";
    return false;
  }
  if(name.length < 5){
    errorName.innerHTML = "Name must contain at least 5 characters."
    return false;
  }

  errorName.innerHTML = '';
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

function validateConfirmPassword(){
  var confirmPassword = document.getElementById("confirmPassword").value;
  var password = document.getElementById("password").value;

  if(confirmPassword == ''){
    errorConfirmPassword.innerHTML = "Password confimartion must be filled";
    return false;
  }
  if(confirmPassword != password){
    errorConfirmPassword.innerHTML = "Confirm password must match password";
    return false;
  }

  errorConfirmPassword.innerHTML = '';
  return true;
}

function validateConfirmTnC(){
  var confirmTnC = document.getElementById("confirmTnC").checked;
  
  if(!confirmTnC){
    errorConfirm.innerHTML = "You must agree to the terms and conditions!"
    return false;
  }
  
  errorConfirm.innerHTML = '';
  return true;
}