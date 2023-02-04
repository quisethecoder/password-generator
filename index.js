const lengthSlider = document.querySelector(".pass-length input");

const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lengthSlider.ariaValueMax;
}

lengthSlider.addEventListener("input", updateSlider);