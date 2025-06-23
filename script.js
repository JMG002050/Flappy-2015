// VARIABLE TO GET BALL ID
let ball = document.getElementById('float-circle');

// FUNCTIONS TO ADD MOVEMENT TO THE BALL
function up() {
  ball.style.bottom = '270px';
};

function down() {
  ball.style.bottom = '50px';
};
     
// EVENT HANDLERS TO ALLOW MOVEMENT
document.addEventListener('keydown', up);
document.addEventListener('keyup', down);

// VARIABLE & FUNCTION TO HIDE BUTTON AFTER CLICKED
let startGame = document.getElementById('button');
let pipeInterval, pipeTopInterval, collisionInterval;

startGame.addEventListener('click', function(){
  startGame.style.display = 'none';

  ball.style.bottom = '50px';
  pipaPosition = window.innerWidth + 200;
  pipotaPosition = window.innerWidth;

  pipa.style.left = pipaPosition + 'px';
  pipota.style.left = pipotaPosition + 'px';

  //HOW FAST IS IT MOVING
  pipeInterval = setInterval(moveleft, 20);
  pipeTopInterval = setInterval(movelefty, 20);
  collisionInterval = setInterval(gameOver, 20);
});

// YELLOW PIPA MOTION
let pipa = document.getElementById('pipe');
let pipaPosition = window.innerWidth + 225;

function moveleft() {
  pipaPosition -= 6;
  if (pipaPosition < -30) {
    pipaPosition = window.innerWidth + 127;
    let randomHeight = Math.floor(Math.random() * 120) + 100;
    pipa.style.height = randomHeight + 'px'; 
      }
  pipa.style.left = pipaPosition + 'px';
};

// RED PIPOTA MOTION
let pipota = document.getElementById('top-pipe');
let pipotaPosition = window.innerWidth; 

function movelefty() {
  pipotaPosition -= 6;
  if (pipotaPosition < -30) {
    pipotaPosition = window.innerWidth + 100;  
    let randomHeighty = Math.floor(Math.random() * 80) + 130;
    pipota.style.height = randomHeighty+ 'px';
  }
  pipota.style.left = pipotaPosition + 'px';
};

// GAME OVER CODE
function gameOver() {
  const ballRect = ball.getBoundingClientRect();
  const pipeRect = pipa.getBoundingClientRect();
  const pipotaRect = pipota.getBoundingClientRect();

  const collidedWithPipe = (
    ballRect.left < pipeRect.right &&
    ballRect.right > pipeRect.left &&
    ballRect.top < pipeRect.bottom &&
    ballRect.bottom > pipeRect.top
  );

  const collidedWithPipota = (
    ballRect.left < pipotaRect.right &&
    ballRect.right > pipotaRect.left &&
    ballRect.top < pipotaRect.bottom &&
    ballRect.bottom > pipotaRect.top
  );

  if (collidedWithPipe || collidedWithPipota) {
    alert('GAME OVER 💀');
    startGame.style.display = 'block';
    clearInterval(pipeInterval);
    clearInterval(pipeTopInterval);
    clearInterval(collisionInterval);
  }
};










