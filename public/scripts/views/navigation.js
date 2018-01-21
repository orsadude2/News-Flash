// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var loginLink = document.getElementById('login-link');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

var loginBtn = document.getElementById('loginBtn');

$(document).ready(function() {
    $('#navbar-toggle').on('click', function() {
        $("#panel").stop().slideToggle();
    });
});

// When the user clicks on the Login button, call the server and close the modal upon success (TODO: add failure logic)
loginBtn.onclick = function () {
  // TODO: call backend to verify user login
  modal.style.display = 'none';
};

// When the user clicks the button, open the modal 
loginLink.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};