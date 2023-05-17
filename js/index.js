console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
  $("p").click();

  $("p").click(function(){
    $(this).hide();
  });

  
})
// $("p").click();

//   $("p").click(function(){
//     $(this).hide();
//   });
  const resumeImg = document.querySelector('.resumeImg');

function fadeIn() {
  resumeImg.style.opacity = 1;
}

function fadeOut() {
  resumeImg.style.opacity = 0;
}

setInterval(() => {
  fadeOut();
  setTimeout(() => {
    fadeIn();
  }, 1000);
}, 2000);
