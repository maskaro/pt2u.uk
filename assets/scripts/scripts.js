document.addEventListener('DOMContentLoaded', function() {
    includeHTML();

    function includeHTML()
    {
        const includes = document.querySelectorAll('[id$="-container"]');
        includes.forEach(include => {
            const file = include.id.split('-')[0] + '.html';
            fetch(file)
                .then(response => response.text())
                .then(data => include.innerHTML = data)
                .then(() => {
                    if(include.id === 'footer-container') {
                        const year = new Date().getFullYear();
                        include.innerHTML = include.innerHTML.replace(/{{year}}/g, year.toString());
                    }
                });
        });
    }
});


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
