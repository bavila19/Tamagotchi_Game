   // Initialize Variables
   var closePopup = document.getElementById("popupclose");
   var overlay = document.getElementById("overlay");
   var popup = document.getElementById("popup");

   closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
};