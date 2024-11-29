
var signupModal = document.getElementById("signupModal");
var loginModal = document.getElementById("loginModal");

var openSignupModal = document.getElementById("openSignupModal");
var openLoginModal = document.getElementById("openLoginModal");


var closeSignupModal = document.getElementById("closeSignupModal");
var closeLoginModal = document.getElementById("closeLoginModal");


var goToLoginModal = document.getElementById("goToLoginModal");

openSignupModal.onclick = function() {
    signupModal.style.display = "block";
}
openLoginModal.onclick = function() {
    loginModal.style.display = "block"; 
}

goToLoginModal.onclick = function(event) {
    event.preventDefault();
    signupModal.style.display = "none"; 
    loginModal.style.display = "block"; 
}

closeSignupModal.onclick = function() {
    signupModal.style.display = "none"; 
}

closeLoginModal.onclick = function() {
    loginModal.style.display = "none"; 
}
window.onclick = function(event) {
    if (event.target == signupModal) {
        signupModal.style.display = "none"; 
    } else if (event.target == loginModal) {
        loginModal.style.display = "none"; 
    }
}