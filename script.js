document.addEventListener("DOMContentLoaded", function() {
    AOS.init();

    document.querySelectorAll('.main').forEach(element => {
        element.addEventListener('aos:in', function() {
            // Když se animace zobrazí, odstraníme atributy AOS
            element.removeAttribute('data-aos');
            element.removeAttribute('data-aos-duration');
        });
    });
});

document.getElementById('menu-icon').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    AOS.init();

    document.querySelectorAll('.main').forEach(element => {
        element.addEventListener('aos:in', function() {
            // Když se animace zobrazí, odstraníme atributy AOS
            element.removeAttribute('data-aos');
            element.removeAttribute('data-aos-duration');
        });
    });
});

document.addEventListener("scroll", function () {
    const mapContainer = document.querySelector(".mapa");
    const map = document.querySelector(".mapa");

    const rect = mapContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
        map.style.filter = "blur(0)";
    } else {
        map.style.filter = "blur(10px)";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    AOS.init();

    document.querySelectorAll('.main').forEach(element => {
        element.addEventListener('aos:in', function() {
            // Když se animace zobrazí, odstraníme atributy AOS
            element.removeAttribute('data-aos');
            element.removeAttribute('data-aos-duration');
        });
    });
});