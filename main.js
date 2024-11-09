// Select the canvas and set up the context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Explicitly set canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Game variables
let score = 0;
let gravity = 0.5;        // Gravity force
let lift = -10;           // Lift force (upward)
let monkeyY = canvas.height / 2;  // Monkey's initial vertical position
let monkeyVelocity = 0;   // Monkey's vertical speed

// Function to update the game state
function update() {
    // Apply gravity to the monkey's velocity
    monkeyVelocity += gravity;
    monkeyY += monkeyVelocity;

    // Prevent monkey from going off the top of the screen
    if (monkeyY < 0) {
        monkeyY = 0;
        monkeyVelocity = 0;
    }

    // End the game if monkey hits the ground
    if (monkeyY > canvas.height) {
        // Reset for simplicity (you could add game-over logic here)
        monkeyY = canvas.height / 2;
        monkeyVelocity = 0;
        score = 0; // Reset score
    }

    // Update score based on time survived
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
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '24px Arial';
    ctx.fillText('Score: ' + score, 10, 30);

    // Draw the monkey as a circle
    ctx.beginPath();
    ctx.arc(100, monkeyY, 20, 0, Math.PI * 2); // Monkey positioned at (100, monkeyY)
    ctx.fillStyle = '#FFA500'; // Orange color for the monkey
    ctx.fill();
    ctx.closePath();
}

// Function to make the monkey jump
function jump() {
    monkeyVelocity = lift; // Apply the lift force when jumping
}

// Main game loop function
function gameLoop() {
    update(); // Update the game state
    draw();   // Draw everything
    requestAnimationFrame(gameLoop); // Repeat the loop
}

// Event listener for jumping
window.addEventListener('click', jump); // Makes the monkey jump on click

// Start the game loop
gameLoop();
