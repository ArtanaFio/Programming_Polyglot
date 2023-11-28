
const logo = document.querySelector('.logo');
const longLogo = document.querySelector('.title-name');
const container = document.querySelector('.logo-container');

logo.addEventListener('mouseover', () => {
    longLogo.textContent = 'rogramming Polyglot';
});

logo.addEventListener('mouseleave', () => {
    longLogo.textContent = '';
})

container.appendChild(logo);
container.appendChild(longLogo);