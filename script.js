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
  // Movement interval
  setInterval(moveleft, 20); // it moves 5 pixels every 20 miliseconds
});


// FUNCTION TO MOVE FROM RIGHT TO LEFT PIPE
let pipa = document.getElementById('pipe'); // Declared to add mobility to it

let pipaPosition = window.innerWidth; // Starts the pipe off the right edge of the screen

function moveleft() {
  pipaPosition -= 5; // why 5, well because that is the pixels it is moving every 20 miliseconds
  if (pipaPosition < -30) {
    pipaPosition = window.innerWidth + 100;

    // RANDOMIZE PIPE HEIGHT
    let randomHeight = Math.floor(Math.random() * 120) + 100;
    // this variable creates a pipe wih a minimum height of 100px and a maximum of 250px
    pipa.style.height = randomHeight + 'px';
  }
  pipa.style.left = pipaPosition + 'px';
};







