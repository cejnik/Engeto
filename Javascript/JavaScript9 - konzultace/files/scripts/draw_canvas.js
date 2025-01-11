// Create a canvas and draw a rectangle on it
// This script assumes you have an HTML document to insert the canvas into.

// Create a canvas element
const canvas = document.createElement('canvas');
canvas.width = 800; // Set the width of the canvas
canvas.height = 600; // Set the height of the canvas
canvas.style.border = '1px solid black'; // Add a border to the canvas

document.body.appendChild(canvas); // Add the canvas to the body of the document

// Get the drawing context of the canvas
const ctx = canvas.getContext('2d');

// Set rectangle properties
const rectX = 100; // X-coordinate of the rectangle
const rectY = 100; // Y-coordinate of the rectangle
const rectWidth = 200; // Width of the rectangle
const rectHeight = 150; // Height of the rectangle
const rectColor = 'blue'; // Color of the rectangle

// Draw the rectangle
ctx.fillStyle = rectColor; // Set the fill color
ctx.fillRect(rectX, rectY, rectWidth, rectHeight); // Draw the filled rectangle