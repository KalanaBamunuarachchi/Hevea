//preloader function
const preloader = document.querySelector('.preloader');
const dashboard = document.querySelector('.dashboard');

setTimeout(() => {
    preloader.style.display = 'none';
    dashboard.style.display = 'block';
}, 4000); // Replace with desired preloader duration (ms)

