document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Get the current height of the navbar
            const navbarHeight = document.querySelector('.navbar').offsetHeight;

            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear.toString();
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const navbarToggler = document.querySelector('.navbar-toggler');
            if(navCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});

document.addEventListener('load', function() {
    toggleNavbarVisibility();
    window.addEventListener('resize', toggleNavbarVisibility);
});

function toggleNavbarVisibility()
{
    const hiddenCss = 'display: none !important';

    const navbar = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    const contentHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;

    if(contentHeight <= viewportHeight) {
        navbar.style.cssText = hiddenCss;
        navbarToggler.style.cssText = hiddenCss;
    } else {
        navbar.style.display = '';
        navbarToggler.style.display = '';
    }
}
