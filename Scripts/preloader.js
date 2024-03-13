const preloader = document.querySelector('.preloader');
const main = document.querySelector('.main');

setTimeout(() => {
  preloader.style.display = 'none';
  main.style.display = 'block';
}, 4000); // Replace with desired preloader duration (ms)
