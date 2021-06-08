window.addEventListener('load', generateFaces);
    let numberOfFaces = 5;
    const theLeftSide = document.getElementById('leftSide');
    const theRightSide = document.getElementById('rightSide');

function generateFaces() {
    for (i=0; i < numberOfFaces; i++) {
        const face = document.createElement('img');
        face.src = 'images/penny.png';
        const randomTop = Math.floor(Math.random() * 400 + 1);
        const randomLeft = Math.floor(Math.random() * 400 + 1);
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
    }

    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);

}

function nextLevel(event) {
    event.stopPropagation();
    
    while(theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }

    while(theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    numberOfFaces += 3;
    generateFaces();

}

function gameOver() {
    alert('Game Over!');
    document.body.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel)
    restart.style.display="inline-block";
}

function newGame(event) {
    window.location.reload();
}