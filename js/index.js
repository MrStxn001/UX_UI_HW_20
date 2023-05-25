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
