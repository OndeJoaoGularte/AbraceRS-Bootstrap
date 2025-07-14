document.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    // Adiciona uma classe para um fundo sólido após o usuário rolar 50 pixels
    if (window.scrollY > 50) { 
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }
});