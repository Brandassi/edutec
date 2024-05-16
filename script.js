window.addEventListener("scroll", function() {
    var header = document.querySelector('header');
    var slider = document.querySelector('.slider').offsetTop;
    var isPastSlider = window.scrollY > slider;

    header.classList.toggle('rolagem', isPastSlider);
});
