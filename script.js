window.addEventListener("scroll", function() {
    var header = document.querySelector('header');
    var slider = document.querySelector('.slider').offsetTop; 
    var isAboveSlider = window.scrollY < slider;

    header.classList.toggle('transparente', isAboveSlider);
});