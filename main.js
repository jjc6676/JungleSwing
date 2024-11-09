// Select the canvas and set up the context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Explicitly set canvas dimensions for consistency
canvas.width = 800;
canvas.height = 600;

// Monkey Variables (Simplified)
let monkeyY = canvas.height / 2;

// Function to draw a single frame (no game loop for debugging)
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a green background
    ctx.fillStyle = '#228B22';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the "monkey" as a circle in the center of the canvas
    ctx.beginPath();
    ctx.arc(canvas.width / 2, monkeyY, 20, 0, Math.PI * 2); // Centered circle
    ctx.fillStyle = '#FFA500'; // Orange color for the monkey
    ctx.fill();
    ctx.closePath();

    console.log("Drawing monkey at Y position:", monkeyY);
}

// Call the draw function once to see the result
draw();
