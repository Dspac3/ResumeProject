let slideIndex = 0;
showSlides(slideIndex)

function moveSlide(n) {
    showSlides(slideIndex += n)
}

function hideSlide(slide) {
    slide.classList.add("hidden")
    slide.classList.remove("shown")
}

function showSlide(slide) {
    slide.classList.remove("hidden")
    slide.classList.add("shown")
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item")

    if (n > slides.length - 1) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        hideSlide(slides[i])
    }

    showSlide(slides[slideIndex])
}