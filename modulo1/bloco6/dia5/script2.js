const btnDarkMode = document.getElementById('btn-dark');
const body = document.querySelector('body');
const header = document.querySelector('.header-container');
const links = document.querySelectorAll('.link');
const footer = document.getElementById('foot');

btnDarkMode.addEventListener('click', escurecer);
function escurecer() {
    if (body.className !== 'darkModeBody') {
   body.className = 'darkModeBody';
   header.className = 'header-container darkModeHeaderFooter';
   links[0].style.color = 'white';
   links[1].style.color = 'white';
   links[2].style.color = 'white';
   footer.className = 'footer darkModeHeaderFooter';
   btnDarkMode.className = 'btn-dark';
    } else {
        body.className = '';
        header.className = 'header-container';
        links[0].style.color = 'rgb(41, 41, 41)';
        links[1].style.color = 'rgb(41, 41, 41)';
        links[2].style.color = 'rgb(41, 41, 41)';
        footer.className = 'footer';
        btnDarkMode.className = '';
    }
}