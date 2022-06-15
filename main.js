let btn = document.querySelector(".scroll-up");

window.onscroll = function () {
    if (window.scrollY >= 220) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none';
    };
};
btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
};
    