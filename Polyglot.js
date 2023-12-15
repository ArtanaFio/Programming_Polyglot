
/*-----------------------------Logo Animation-----------------------------*/

const logo = document.querySelector('.logo');
const longLogo = document.querySelector('.title-name');
const container = document.querySelector('.logo-container');


logo.addEventListener('mouseover', () => {
    longLogo.textContent = 'rogramming Polyglot';
});

logo.addEventListener('mouseleave', () => {
    longLogo.textContent = '';
});

/*-----------------------------Underconstruction response----------------------------*/

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

/*-----------------------------Check color HEX code-----------------------------*/

function check0() {

    const questionBox0 = document.getElementById("boxHex0");
    const textBox0 = document.getElementById("hex0");
    const guess0 = document.getElementById("hex0").value;
    const button0 = document.getElementById("button-0");
    const displayAnswer0 = document.getElementById("ans0");
    
    if (guess0 === "black") {
        displayAnswer0.textContent = "Correct! It's black.";
    } else {
        displayAnswer0.textContent = "Incorrect. It's black.";
    }

    button0.classList.add("remove");
    textBox0.classList.add("remove");
    document.getElementById("reveal0").classList.add("visible");
    
    questionBox0.appendChild(displayAnswer0);
    questionBox0.appendChild(button0);
    questionBox0.appendChild(guess0); 
}

function check1() {

    const questionBox1 = document.getElementById("boxHex1");
    const textBox1 = document.getElementById("hex1");
    const guess1 = document.getElementById("hex1").value;
    const button1 = document.getElementById("button-1");
    const displayAnswer1 = document.getElementById("ans1");
    
    if (guess1 === "white") {
        displayAnswer1.textContent = "Correct! It's white.";
    } else {
        displayAnswer1.textContent = "Incorrect. It's white.";
    }

    button1.classList.add("remove");
    textBox1.classList.add("remove");
    document.getElementById("reveal1").classList.add("visible");
    
    questionBox1.appendChild(displayAnswer1);
    questionBox1.appendChild(button1);
    questionBox1.appendChild(guess1); 
}

function check2() {

    const questionBox2 = document.getElementById("boxHex2");
    const textBox2 = document.getElementById("hex2");
    const guess2 = document.getElementById("hex2").value;
    const button2 = document.getElementById("button-2");
    const displayAnswer2 = document.getElementById("ans2");
    
    if (guess2 === "red") {
        displayAnswer2.textContent = "Correct! It's red.";
    } else {
        displayAnswer2.textContent = "Incorrect. It's red.";
    }

    button2.classList.add("remove");
    textBox2.classList.add("remove");
    document.getElementById("reveal2").classList.add("visible");
    
    questionBox2.appendChild(displayAnswer2);
    questionBox2.appendChild(button2);
    questionBox2.appendChild(guess2); 
}

function check3() {

    const questionBox3 = document.getElementById("boxHex3");
    const textBox3 = document.getElementById("hex3");
    const guess3 = document.getElementById("hex3").value;
    const button3 = document.getElementById("button-3");
    const displayAnswer3 = document.getElementById("ans3");
    
    if (guess3 === "green") {
        displayAnswer3.textContent = "Correct! It's green.";
    } else {
        displayAnswer3.textContent = "Incorrect. It's green.";
    }

    button3.classList.add("remove");
    textBox3.classList.add("remove");
    document.getElementById("reveal3").classList.add("visible");
    
    questionBox3.appendChild(displayAnswer3);
    questionBox3.appendChild(button3);
    questionBox3.appendChild(guess3); 
}

function check4() {

    const questionBox4 = document.getElementById("boxHex4");
    const textBox4 = document.getElementById("hex4");
    const guess4 = document.getElementById("hex4").value;
    const button4 = document.getElementById("button-4");
    const displayAnswer4 = document.getElementById("ans4");
    
    if (guess4 === "blue") {
        displayAnswer4.textContent = "Correct! It's blue.";
    } else {
        displayAnswer4.textContent = "Incorrect. It's blue.";
    }

    button4.classList.add("remove");
    textBox4.classList.add("remove");
    document.getElementById("reveal4").classList.add("visible");
    
    questionBox4.appendChild(displayAnswer4);
    questionBox4.appendChild(button4);
    questionBox4.appendChild(guess4); 
}

/*-----------------------------Generate RGB----------------------------*/

function generateRGB() {
    const redValue = document.getElementById("r").value;
    const greenValue = document.getElementById("g").value;
    const blueValue = document.getElementById("b").value;
    const sampleColor = document.getElementById("rgb-sample");
    const colorName = document.getElementById("hex-code");

    if (redValue !== '' && greenValue !== '' && blueValue !== '') {
        sampleColor.classList.add("visible");
        sampleColor.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        colorName.textContent = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    } else {
        colorName.textContent = "Please enter a number betwee 0 and 255 for each value."
    }
}

/*-----------------------------Show grey RGB answer----------------------------*/


function showGreyAnswer() {
    const greyBox = document.getElementById("grey-box");
    const greyButton = document.getElementById("grey-button");
    const greyAnswer = document.getElementById("grey-answer");

    greyButton.classList.add("remove");
    greyAnswer.classList.add("reveal-answers");
    greyAnswer.textContent = "Whenever the values are the same, the corresponding color is a shade of pure grey.";

    greyBox.appendChild(greyAnswer);
}

/*-----------------------------Generate RGBA----------------------------*/

function generateRGBA() {
    const redAlphaValue = document.getElementById("ra").value;
    const greenAlphaValue = document.getElementById("ga").value;
    const blueAlphaValue = document.getElementById("ba").value;
    const alphaValue = document.getElementById("alpha").value;
    const alphaSampleColor = document.getElementById("rgba-sample");
    const alphaColorName = document.getElementById("alpha-hex-code");

    if (redAlphaValue !== '' && greenAlphaValue !== '' && blueAlphaValue !== '' && alphaValue !== '') {
        alphaSampleColor.classList.add("visible");
        alphaSampleColor.style.backgroundColor = `rgb(${redAlphaValue}, ${greenAlphaValue}, ${blueAlphaValue}, ${alphaValue})`;
        alphaColorName.textContent = `rgb(${redAlphaValue}, ${greenAlphaValue}, ${blueAlphaValue}, ${alphaValue})`;
    } else {
        colorName.textContent = "Please enter a number betwee 0 and 255 for each value."
    }
}

/*-----------------------------Show transparent RGBA answer----------------------------*/


function showTransparentAnswer() {
    const transparentBox = document.getElementById("transparent-box");
    const transparentButton = document.getElementById("transparent-button");
    const transparentAnswer = document.getElementById("transparent-answer");

    transparentButton.classList.add("remove");
    transparentAnswer.classList.add("reveal-answers");
    transparentAnswer.textContent = "Transparent: rgba(0, 0, 0, 0).";

    transparentBox.appendChild(transparentAnswer);
}