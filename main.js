window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("para").className = "p";
  } else {
    document.getElementById("image-grid").className = "image-grid";
  }
}

// var i = 0;
// var images = [];
// var time = 3000;para
//
// images[0] = "img1.jpg"
// images[1] = "img2.jpg"
// images[2] = "img3.jpg"
// images[3] = "img4.jpg"
// images[4] = "img5.jpg"
//
// function changeImg() {
//   document.slide.src = images[i];
//
//   if(i < images.lenght - 1){
//     i++;
//   } else {
//     i = 0;
//   }
//
// }
//
// setTimeOut("changeImg()", time)
