// Функція для плавного скроллу на початок сторінки
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Додає плавний скролл
    });
}

// Додаємо кнопку на сторінку
const scrollButton = document.createElement('button');
scrollButton.textContent = '∧';
scrollButton.style.fontSize = '25px';
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '20px';
scrollButton.style.right = '20px';
scrollButton.style.padding = '10px 20px';
scrollButton.style.backgroundColor = '#007bff';
scrollButton.style.color = '#fff';
scrollButton.style.border = 'none';
scrollButton.style.borderRadius = '8px';
scrollButton.style.cursor = 'pointer';
scrollButton.style.zIndex = '1000';

// Додаємо обробник події для кнопки
scrollButton.addEventListener('click', scrollToTop);

// Вставляємо кнопку в body
document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollButton.style.display = 'block';
        _
    } else {
        scrollButton.style.display = 'none'
    }
}

);


//Додаємо кнопку для переключення теми з світлої на темну
const themeToggleBtn = document.getElementById('themeToggleBtn');

function ToggleBtn() {
    const body = document.body;

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggleBtn.textContent = '🌓';

    }
    else {
        body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '🌞';
    }

}
themeToggleBtn.addEventListener('click', ToggleBtn ) 

