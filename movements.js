const btnUp = document.querySelector('#up');
const btnRight = document.querySelector('#right');
const btnLeft = document.querySelector('#left');
const btnDown = document.querySelector('#down');

let playerPosition = {
    x: undefined,
    y: undefined,
}

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnRight.addEventListener('click', moveRight);
btnLeft.addEventListener('click', moveLeft);
btnDown.addEventListener('click', moveDown);


function moveByKeys(event) {
    if (event.key == 'ArrowUp') moveUp();
    else if (event.key == 'ArrowRight') moveRight();
    else if (event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowDown') moveDown();
}

function moveUp() {
    console.log('mover a arriba');
    playerPosition.y -= elementsSize;
    movePlayer();
} 
function moveRight() {
    console.log('mover a Derecha');
} 
function moveLeft() {
    console.log('mover a izquierda');
} 
function moveDown() {
    console.log('mover a abajo');
} 

