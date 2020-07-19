const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.getElementsByClassName.animation) {
                link.getElementsByClassName.animation = '';
            } else {
                link.getElementsByClassName.animation = `navLinkFade 0.5s ease forwards ${index / 7 +1.5}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// const text = document.querySelector(".fancy");
// const strText = text.textContent;
// const splitText = strText.split("");
// text.textContent = "";

// for (let i = 0; i < splitText.length; i++) {
//     text.innerHTML += "<span>" + splitText[i] + "</span>";
// }

// let char = 0;
// let timer = setInterval(onTick, 50);

// function onTick() {
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++
//     if (char === splitText.length) {
//         complete();
//         return;
//     }
// }

// function complete() {
//     clearInterval(timer);
//     timer = null;
// };


//navbar sticky
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})