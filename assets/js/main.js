//Modal Popup Code from W3 Schools (https://www.w3schools.com/howto/howto_css_modals.asp)

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("contact");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Set active class for navigation bar, code adapted from w3 schools (https://www.w3schools.com/howto/howto_js_active_element.asp)

// Get the container element
var navBar = document.getElementById("top_nav");

// Get all buttons with class="btn" inside the container
var links = navBar.getElementsByClassName("nav");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "nav");
    }

    // Add the active class to the current/clicked button
    this.className = "active";
  });
}