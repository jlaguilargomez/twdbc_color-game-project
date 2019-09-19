/* from DOM to JS */

let squares = document.querySelectorAll('.square');
let rgbTitle = document.getElementById('rgb-title');
let messageResult = document.getElementById('message');
let title = document.getElementById('title');

/* JS variables */

const colors =[
    'rgb(255, 120, 0)',
    'rgb(0, 255, 120)',
    'rgb(120, 0, 255)',
    'rgb(155, 60, 215)',
    'rgb(215, 155, 60)',
    'rgb(60, 215, 155)',
];

const selectedColor = colorOfTheArray();

/* JS code */

rgbTitle.innerHTML = selectedColor;

// let's interact with the squares
for(let i in colors){

    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // when we click on a square, "clickedColors" save the background color
    squares[i].addEventListener('click',function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === selectedColor){
            messageResult.innerHTML = 'Wow, perfect!'
            changeColors(clickedColor);
        }else{
            this.style.backgroundColor = '#232323'
            messageResult.innerHTML = "No buddy, that's not the color!"
        }
    });
}

// let's change the design of the DOM when we win!
const changeColors = (color)=>{
    squares.forEach(item => item.style.backgroundColor = color);
    title.style.backgroundColor = color;
}

function colorOfTheArray(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}


// pick a random color which will be the color of the round
// const selectColor = () =>{
//     let rColor = Math.floor(Math.random()*255);
//     let gColor = Math.floor(Math.random()*255);
//     let bColor = Math.floor(Math.random()*255);
//     return  `rgb(${rColor}, ${gColor}, ${bColor})`; 
// }