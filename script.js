// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.
/* global createCanvas, background, colorMode, HSB, random, width, height,
   ellipse, text, fill, noStroke, line, stroke, triangle, ellipseMode, CORNER, strokeWeight, dist */


let droplets;
let grassLeaves;
let numberOfDroplets, numberOfGrassLeaves, grassSpace;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  numberOfDroplets = 20;
  numberOfGrassLeaves = 200;
    
  grassSpace = 25
  droplets = [];
  for (let i=0; i< numberOfDroplets; i++){
    droplets.push (new RainDrop ());
  }
  grassLeaves = [];
  for (let i=0; i < numberOfGrassLeaves; i++) {
    grassLeaves.push (new Grass ());
  }
  
}

function draw() {
  background(0, 0, 95);
  
  for (let i=0; i < droplets.length; i++) {
    droplets[i].move ();
    droplets[i].show ();
  }
  
  for (let i=0; i < grassLeaves.length; i++) {
    grassLeaves[i].move ();
    grassLeaves[i].show ();
    for (let j=0; j<grassLeaves.length; j++) {
      
    }
  }
}
class RainDrop {
  constructor () {
    this.x = random (width-20);
    this.y = 0;
    this.diameter = random (5, 15);
    this.fallSpeed =  random (5,20);
    
  }
  show() {
    noStroke();
    fill(60, 80, 80);
    ellipseMode (CORNER);
    triangle (this.x, this.y+ 5, (this.x + this.diameter/2), ( this.y- this.diameter), (this.x+ this.diameter), this.y+5)
    ellipse(this.x, this.y, this.diameter);
  }
  move () {
     this.y += this.fallSpeed;
  // If it goes off the screen...
    if (this.y > height) {
    // ...reset it...
      this.y = 0;
    // ...and move it somewhere random.
    this.x = random(width-10);
    this.diameter = random (5, 15);
    this.fallSpeed = random (5,20);
    }
  }
}

class Grass { 
  constructor (x) {
    this.x = random (0, 500);
    this.y = height;
    this.x2 = this.x + 0.25;
    this.y2 = this.y +0.5;
    this.growSpeed = 0.10;
  }
  
  move () {
    this.y -= this.growSpeed; 
    if (this.y < 400){
      this.y = height;
    }
  }
  
  show () {
    stroke(30, 80, 80);
    fill(30, 80, 80);
    strokeWeight (2)
    fill(30, 80, 80);
    line(this.x, this.y, this.x2, this.y2);
  }
  
  changePositions () {
    this.x = random (width-20)
    this.y = 0;
  }
  
  intersects (other) {
    let d = dist (this.x, this.y, other.x, other.y)
    if (d < this.)
  }
}