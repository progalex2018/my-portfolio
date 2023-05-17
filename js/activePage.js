const activePage = window.location.pathname;
const links = document.querySelectorAll('.navbar a').
    forEach(link => {
        if (link.href.includes(`${activePage}`)) {
            link.classList.add('active');
        }
    })