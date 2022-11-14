   // Initialize Variables
   var closePopup = document.getElementById("popupclose");
   var overlay = document.getElementById("overlay");
   var popup = document.getElementById("popup");

   closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
};
//next goal is to add a new element for 
const form = document.querySelector("#form");
form.addEventListener("submit", (event)=> {
    event.preventDefault()
    //console.log(event.target)
    const commentInput = document.querySelector('#text')
    const commentText=  commentInput.value
    console.log(commentInput.value)
    const newComment= document.createElement('li')
    newComment.innerHTML = commentText
    console.log(newComment)
    document.querySelector('ul').appendChild(newComment)
    commentInput.value=""
});
