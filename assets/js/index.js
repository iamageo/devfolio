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


