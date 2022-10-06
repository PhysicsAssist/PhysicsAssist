const openMenu = () => {
  document.querySelector('.backdrop').className = 'backdrop active';
  document.querySelector('aside').className = 'active';
}
const closeMenu = () => {
  document.querySelector('.backdrop').className = 'backdrop';
  document.querySelector('aside').className = '';
}

document.getElementById('menuBtn').onclick = e => {
  e.preventDefault();
  openMenu();
}
document.querySelector('aside button.close').onclick = e => {
  closeMenu();
}
document.querySelector('.backdrop').onclick = e => {
  closeMenu();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
       block:"center"
    });
  });
});