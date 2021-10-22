const progressBar = document.querySelector('#progressBar');
const section = document.querySelector('section');

const animateProgressBar = () => {
  let scrollDistance = -section.getBoundingClientRect().top;
  let progresWith =
    (scrollDistance /
      (section.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
  console.log(progresWith);
  if (progresWith < 0){
    progressBar.style.width = 0;
  } else {
    progressBar.style.width = progresWith + '%';
  }
  
};

window.addEventListener('scroll', animateProgressBar);
