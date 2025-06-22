// VARIABLE & FUNCTION TO CONTROL BALL
let ball = document.getElementById('float-circle');

// functions with events
function up() {
  ball.style.bottom = '250px';
};

function down() {
  ball.style.bottom = '50px';
};
     

// Event handlers to add movement
document.addEventListener('keydown', up);
document.addEventListener('keyup', down);


// VARIABLE & FUNCTION TO HIDE BUTTON
let startGame = document.getElementById('button');

startGame.addEventListener('click', function(){
  startGame.style.display = 'none';
});


// FUNCTION TO MOVE FROM RIGHT TO LEFT PIPE
let pippy = document.getElementById('pipe');

function screenLeft() {
  pippy.style.right = '10%';
};


