// Select the canvas and set up the context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let score = 0;

// Function to update the game state
function update() {
    // For now, just increase the score as a test
    score += 1;
}

// Function to draw the game scene
function draw() {
    // Clear the canvas each frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a background
    ctx.fillStyle = '#228B22'; // Forest green background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the score
    ctx.fillStyle = '#FFFFFF'; // White color for score
    ctx.font = '24px Arial';
    ctx.fillText('Score: ' + score, 10, 30);
}

// Main game loop function
function gameLoop() {
    update(); // Update the game state
    draw();   // Draw everything
    requestAnimationFrame(gameLoop); // Repeat the loop
}

// Start the game loop
gameLoop();
