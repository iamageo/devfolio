/* mostrar menu */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')

        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* ativar e remover menu*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    /* ativar link */
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    /* remover menu mobile */
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* animação do scroll */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* scroll home 
sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval:200})
*/

/* scroll about */
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__text', {delay: 400})

/* scroll skills */
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay: 200})
sr.reveal('.skills__data', {interval: 200})
sr.reveal('.skills__img', {delay: 200})

/* scroll work */
sr.reveal('.work__img', {interval: 200})

/* scroll contact */
sr.reveal('.contact__input', {interval: 200})

/* efeito de máquina de escrever */
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-maquina');
typeWrite(titulo);
