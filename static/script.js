// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const commandRows = Array.from(document.querySelectorAll('.command-row'));

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();

        commandRows.forEach((row) => {
            const commandCell = row.querySelector('.command-cell');
            const description = row.querySelector('.description-cell');

            const commandText = commandCell.textContent.toLowerCase();
            const argumentText = description.textContent.toLowerCase();

            const commandMatch = commandText.includes(searchTerm);
            const argumentMatch = argumentText.includes(searchTerm);

            if (commandMatch || argumentMatch) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    });


const clearSearchBtn = document.querySelector('.clear-search-btn');

clearSearchBtn.addEventListener('click', () => {
    searchInput.value = ''; // Clear the search input
    commandRows.forEach((row) => {
        row.style.display = 'table-row'; // Reset the display of all rows
    });
});

    // Smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

window.addEventListener('scroll', toggleScrollToTopButton);

function toggleScrollToTopButton() {
    const scrollToTopButton = document.querySelector('.scroll-to-top-btn');
    if (window.pageYOffset > 100) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

