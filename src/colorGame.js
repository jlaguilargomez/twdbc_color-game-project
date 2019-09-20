/* --- FROM DOM TO JS --- */

let squares = document.querySelectorAll('.square');
let rgbTitle = document.getElementById('rgb-title');
let messageResult = document.getElementById('message');
let title = document.getElementById('title');
let resetButton = document.getElementById('reset-button');
let modeBtn = document.getElementsByClassName('mode');

/* --- JS VARIABLES --- */

let colors =[];
let selectedColor = '';
let numOfSquares = 6;

/* --- JS FUNCTIONS --- */

// generate "numOfSquares" random colors and return an array called "colors"
function generateRandomColors(num){
    let arrColors = [];
    for(let i=0;i<num;i++){
        let rColor = Math.floor(Math.random()*256);
        let gColor = Math.floor(Math.random()*256);
        let bColor = Math.floor(Math.random()*256);
        arrColors[i] = `rgb(${rColor}, ${gColor}, ${bColor})`;       
    }
    return arrColors;
}

// choose a color from the squares
function colorOfTheArray(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
};

// "resetAll()" allows to create a new game with "num" squares
function resetAll(num){
    colors = generateRandomColors(num);
    selectedColor = colorOfTheArray();
    // show the color to guess into the title
    rgbTitle.innerHTML = selectedColor;
    squares.forEach((item, pos) => item.style.display = 'none');
    squares.forEach((item, pos) => item.style.backgroundColor = colors[pos]);
    // restart the original format of the page
    title.style.backgroundColor = '#58A4B0';
    resetButton.innerHTML = 'New Colors';
    messageResult.innerHTML = '';
    modeBtn[0].classList.remove('btn-selected');
    modeBtn[1].classList.remove('btn-selected');
    // show only the needed squares (3 or 6)
    for (let i=0; i<num; i++){
        squares[i].style.display = 'flex';
        squares[i].backgroundColor = colors[i];
    }
}

// set the color of the interface with the "color" selected (if we have won!)
function changeColors(color){
    squares.forEach(item => item.style.backgroundColor = color);
    title.style.backgroundColor = color;
}

/* --- EVENTS IN DOM --- */

// prepare the board to play with "numOfSquares" squares
resetAll(numOfSquares);

// we would be able to interact with the squares
for(let i in colors){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // when we click on a square, "clickedColors" save the background color
    squares[i].addEventListener('click',function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === selectedColor){
            messageResult.innerHTML = 'Wow, perfect!'
            changeColors(clickedColor);
            resetButton.innerHTML = 'Play again?'
        }else{
            this.style.backgroundColor = '#232323'
            messageResult.innerHTML = "No buddy, that's not the color!"
        }
    });
}

// restart the game with "NEW COLORS" button
resetButton.addEventListener('click',function(){resetAll(numOfSquares)});

// Interact with difficulty buttons
for (let i in modeBtn){
    modeBtn[i].addEventListener('click',function(){
        this.innerHTML === 'Easy'? numOfSquares=3 : numOfSquares=6; 
        resetAll(numOfSquares);
        this.classList.add('btn-selected');
    });
};