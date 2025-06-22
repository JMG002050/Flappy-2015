
let ball = document.getElementById('float-circle');

// FUNCTIONS THAT HAVE EVENT
function up() {
  ball.style.bottom = '250px';
};

function down() {
  ball.style.bottom = '50px';
};

// EVENT HANDLER
document.addEventListener('keydown', up);
document.addEventListener('keyup', down);

     