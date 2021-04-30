var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');


/* Looping through images */

for(let i = 1; i <= 5; i++) {
  const newPic = document.createElement('img');
  newPic.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newPic);
  newPic.onclick = function(e) {
    displayedImage.src = e.target.src;
    displayedImage.size = 5;
  }
}
