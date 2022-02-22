var usernames =[];
var passwords =[];
var flag=0;
function validate(){
    var username =document.getElementById("email").value;
    var password =document.getElementById("password").value;
    flag=0;
    for(i=0;i<usernames.length;i++){
        if(usernames[i] == username && passwords[i] == password){
            flag++;
        }
    }
    if(flag ==1){
        alert("Succesfully logged in");
        window.location ="success.html";
        return ;
        
    }
    else{
        alert("Sorry ther was an error in username or password \n Please try again()");
        window.location = "index.html";
        return ;
    }

}
function logout(){
    window.location = "index.html";
}

function loginbutton(){
    window.location = "index.html";
}
function registerbutton(){
    window.location = "register.html";
}

function register(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var repassword =document.getElementById("repassword");

    if(password != repassword){
        alert("The password dosent match");
        return ;
    }
    else {
        usernames.push(email);
        passwords.push(password);
    }
    alert("User registered Succesfully");
    window.location="index.html";
    return ;
}