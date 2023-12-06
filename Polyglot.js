
const logo = document.querySelector('.logo');
const longLogo = document.querySelector('.title-name');
const container = document.querySelector('.logo-container');


logo.addEventListener('mouseover', () => {
    longLogo.textContent = 'rogramming Polyglot';
});

logo.addEventListener('mouseleave', () => {
    longLogo.textContent = '';
});

container.appendChild(logo);
container.appendChild(longLogo);

const content = document.querySelector('.content');
const noButtons = document.querySelectorAll('.nonexistent');
const note = document.querySelector('.note');

noButtons.forEach((button) => {
    button.addEventListener('click', () => {
        note.textContent = "(Sorry, that webpage is under construction. Choose another option.)";
    })
});

content.appendChild(note);


