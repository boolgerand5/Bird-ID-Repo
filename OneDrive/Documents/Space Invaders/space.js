//board
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns;
let boardHeight = tileSize * rows;
let context; 

//player ship
let shipWidth = tileSize*2; // Ship is two tiles wide
let shipHeight = tileSize;  // Ship is one tile tall
let shipX = tileSize * columns/2 - tileSize;
let shipY = tileSize * rows - tileSize*2

let ship = {
    x : shipX,
    y : shipY,
    width : shipWidth,
    height : shipHeight
}

let shipImg;

window.onload = function() {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");   //used for drawing on the board

    //draw initial ship
    //context.fillStyle="green";
    //context.fillRect(ship.x, ship.y, ship.width, ship.height);

    //load sprites
    shipImg = new Image();
    shipImg.src = "./player.png";
    shipImg.onload = function() {
        context.drawImage(shipImg, ship.x, shipy.y, ship.width, ship.height);
    }
    
}