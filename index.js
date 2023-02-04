const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
generateBtn = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "~!@#$%^&*()_+{}[]|\:;<>,./?"
}

const generatePassword = () => {
    let staticPassword = "",
    randomPassword = "",
    passLength = lengthSlider.value;

    options.forEach(options => {
        if(options.checked){
            
            staticPassword += characters[options.id];
        }
    });

    for(let i = 0; i < passLength; i++){
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];
    }

    console.log(randomPassword)
}

const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
}

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);