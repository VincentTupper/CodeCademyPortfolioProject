function changeMode() {
   var body = document.body;
   
   // toggle the theme
   body.classList.toggle("dark-theme");
   let button = document.getElementById('button');
   
   // change the button text
   if (button.innerHTML == "Dark Mode") {
      button.innerHTML = "Normal Mode";
   } else {
      button.innerHTML = "Dark Mode"
   }
}