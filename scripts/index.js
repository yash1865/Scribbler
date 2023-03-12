
var createPostModal = document.getElementById("createPostModal");

// Get the button that opens the signUpModal
var createPostModalbtn = document.getElementById("createPostBtn");

// Get the <signUpModalspan> element that closes the signUpModal
var createPostModalspan = document.getElementById("createPost-close");

createPostModalbtn.onclick = function() {
  createPostModal.style.display = "block";
}

// When the user clicks on <signUpModalspan> (x), close the signUpModal
createPostModalspan.onclick = function() {
  createPostModal.style.display = "none";
}

// When the user clicks anywhere outside of the signUpModal, close it
window.onclick = function(event) {
  if(event.target == createPostModal){
    createPostModal.style.display = "none";
  }
}
let allPost=document.getElementById("allPostBtn");
allPost.onclick=function(){
  document.getElementById("postListLink").click();
}