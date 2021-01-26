
// cross pattern
let dim;
let attlength;
let tlength;
let tSize = 2;
let tAlph ;
let theShader;
var myResults = [];
var myResults1 = [];
var myResults2 = [];
var consumerKey = 'jJKwYVKkqnSkbr63NpK7Vzvkx';
var consumerSecret = 'lTMfwMs7rDxz8vPcxBD7Gy5lDO8GXnlIzPw2d8xVhqa1L4xOTw';

var token = '364475473-kMBumzdzoxKZcduTwFGizG0iyMldRx1CQtcRXm2w';
var tokenSecret = 'KBjBbqUZ0of2SQZDFEqSFof7kQPpENigIh7d3BMUQyCjN';

var cb = new Codebird();
//

// particle

var attractors = [];
var attractor1;
var attractor2;
var particles = [];
var particles1 = [];
var particles2 = [];



// function preload() {
//   font = loadFont('https://fonts.gstatic.com/s/newscycle/v14/CSR54z1Qlv-GDxkbKVQ_dFsvWNRevA.ttf');
// }

function setup() {                      //---------setup top
//createCanvas(400,400);

createCanvas(window.innerWidth, window.innerHeight);

cb.setConsumerKey(consumerKey, consumerSecret);
cb.setToken(token, tokenSecret);


//const particlesLength = Math.floor(window.innerWidth/4);
const particlesLength = 124;
const particles1Length = 124;
const particles2Length = 124;
//const particles1Length = Math.floor(window.innerWidth);

for(let i = 0; i<particlesLength; i++){
  particles.push(new Particle());
}
for(let i = 0; i<particles1Length; i++){
  particles1.push(new Particle1());
}

for(let i = 0; i<particles2Length; i++){
  particles2.push(new Particle2());
}



// for(let i = 015i<particles1Length; i++){
//    particles1.push(new Particle1());
// }

  // codebird
var params = {
  q: "room",
  result_type: 'recent',
  count: 10
};

  var params1 = {
  q: "window",
  result_type: 'recent',
  count: 10
};


  var params2 = {
  q: "door",
  result_type: 'recent',
  count: 10
};

  cb.__call(
  "search_tweets",
  params,
  function(reply) {
    var statuses = reply.statuses;
    for (var i = 0; i < statuses.length; i++) {
      var tweet = statuses[i];
      if (!tweet.retweeted_status) {
        //print(tweet.text);
        //fill('#' + tweet.user.profile_background_color);

      //  (255/i);

        //let myResults = statuses;
        tlength = statuses.length;
        tAlph = tlength;
        attlength = tlength;
       myResults = tweet.text;
        let words = tweet.text.split(" ");
        console.log(words);
        let hyphenated = words.join("-")
       // text(tweet.text , 0, i * 120);
      }
    }
    // print the max_id which helps if you want to grab pages of data
    //print('max_id: ' + reply.search_metadata.max_id);

  }
);


    cb.__call(
  "search_tweets",
  params1,
  function(reply) {
    var statuses = reply.statuses;
    for (var i = 0; i < statuses.length; i++) {
      var tweet1 = statuses[i];
      if (!tweet1.retweeted_status) {


        //fill(255);

        //let myResults = statuses;
       myResults1 = tweet1.text;
        //let words = tweet1.text.split(" ");
        //console.log(words);
        //let hyphenated = words.join("-")
       // text(tweet.text , 0, i * 120);
      }
    }
    // print the max_id which helps if you want to grab pages of data
    //print('max_id: ' + reply.search_metadata.max_id);

  }
);


cb.__call(
  "search_tweets",
  params2,
  function(reply) {
    var statuses = reply.statuses;
    for (var i = 0; i < statuses.length; i++) {
      var tweet2 = statuses[i];
      if (!tweet2.retweeted_status) {
        //print(tweet.text);
        //fill('#' + tweet.user.profile_background_color);

    //    fill(255/i);

        //let myResults = statuses;
       myResults2 = tweet2.text;
        let words = tweet2.text.split(" ");
        //console.log(words);
        let hyphenated = words.join("-")
       // text(tweet.text , 0, i * 120);
      }
    }
    // print the max_id which helps if you want to grab pages of data
    //print('max_id: ' + reply.search_metadata.max_id);

  }
);
/////////////////////////////////////////////////
// for (var i =0; i<50; i++){
//   particles.push(particle = new Particle());
// }
//
// for (var q =0; q<50; q++){
//   particles.push(particle = new Particle1());
// }

// for (var i =0; i<1; i++){
//   particles.push(particle = new Particle());
//   // particles.push(particle1 = new Particle1());
//   // particles.push(particle2 = new Particle2());
//
// }
//attractor = createVector(width/2, height/2);    //set cm
xim = createVector(1500, 900);
attractor1 = createVector(width-150, height-400);
attractor2 = createVector(mouseX, mouseY);
//background(random(255), random(255), random(255), random(100));
background(10);

//noLoop();
console.log(tlength);

for(let i = 0; i<10; i++){
  attractors.push(createVector(random(width), random(height)));
}

}                                      //---------setup

function draw(){


//background(0);
//stroke(255);
//strokeWeight(4);
//drawGradient(width/2, height / 2);
console.log(tlength);

for (var i =0; i<attractors.length; i++){
//  point(attractors[i].x, attractors[i].y);
}
//point(attractors[i].x, attractors[i].y);        // draw attractor

for (var i =0; i<particles.length; i++){
 var particle = particles[i];
 for (var j =0; j<attractors.length; j++){
    particle.attracted(attractors[j], j);
 }
}

 for (var i =0; i<particles1.length; i++){
  var particle1 = particles1[i];
  for (var j =0; j<attractors.length; j++){
     particle1.attracted(attractors[j]);
  }
}

for (var i =0; i<particles2.length; i++){
 var particle2 = particles2[i];
 for (var j =0; j<attractors.length; j++){
    particle2.attracted(attractors[j]);
 }
}

 //particle.attracted(attractor1);
 //particle.attracted(attractor2);
 particle.update();
 particle1.update();
 particle2.update();
 //particle.mouse();
 particle.show();
 particle1.show();
 particle2.show();

}


// for (var i =0; i<attractors.length; i++){
//
//  //point(attractors[i].x, attractors[i].y);
//
// }
// for (var q =0; q<particles.length; q++){
//   var particle1 = particles1[q];
//   particle1.attracted(attractor);
//   particle1.update();
//   //particle.mouse();
//   particle1.show();
//
//  }
//
//  for (var u =0; u<particles.length; u++){
//    var particle2 = particles1[u];
//    particle2.attracted(attractor);
//    particle2.update();
//    //particle.mouse();
//    particle2.show();
//
//   }
// background(0,90);




class Particle{     //particle thisone

constructor(){
  this.pos = createVector(random(width), random(height));
  //  this.vel = p5.Vector.random2D();
  this.prev = createVector(this.pos);
  this.vel = createVector(random(-3,3));
  this.acc = createVector();
  var force;

}

update(){
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.acc.mult(0);     //reset
}

show(){

    //stroke(255);
    //strokeWeight(4);
    //point(this.pos.x, this.pos.y);

    var txt = myResults ;              //scope issue
    var txt1 = myResults1;
    var txt2 = myResults2;
    var tx = String(txt);
    var tx1 = String(txt1);
    var tx2 = String(txt2);
    textSize(tSize);
    //fill(255);

    //noStroke();
    strokeWeight(1);
  //  textFont(font);
    fill(100, 230, 245, tAlph);
    text(tx, this.pos.x, this.pos.y);
    // fill(100, 140, 245, 10);
    // text(tx1, this.pos.x-400, this.pos.y+300);
    // fill(230, 230, 100, 10);
    // text(tx2, this.pos.x+1300, this.pos.y-100);

  //  line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);

    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;

  //  textFont(font);
  //  fill(20, 100, 215, 90);
  //  text(tx1, this.pos.x+400, this.pos.y-200);
  //  textFont(font);
  //  fill(120, 200, 215, 90);
  //  text(tx2, this.pos.x-501, this.pos.y+140);

}

attracted(target, j){
  var force = p5.Vector.sub(target, this.pos);   //direction
  var dsquared = force.magSq();
  dsquared = constrain(dsquared, 1, 50);   //constrain itself not to be too extreme
  var G = 50;
  var strength = G / dsquared;
  force.setMag(strength);
  if (j % 3  == 1){
    force.mult(-1);
  }
  this.acc.add(force);  //force accumilation

  // if (abs(this.pos.x-mouseX)<10){
  //   this.vel.x *= -1.2;
  // }
  // // }else{
  // //   this.acc.x = random(-0.02, 0.02);}
  //  if (abs(this.pos.y-mouseY)<10){
  //   this.vel.y *= -1.2;
  // }

//   if (this.pos.x < 0 || this.pos.x >width){
//  this.vel.x *=-1;
// }


// if (this.pos.y < 0 || this.pos.y > height){
//  this.vel.y *=-1;
// }

}

//   mouse(){
//  if (abs(this.pos.x-mouseX)<30){
//    this.acc.x *= -12.03;
//  }
//  // }else{
//  //   this.acc.x = random(-0.02, 0.02);}
//   if (abs(this.pos.y-mouseY)<30){
//    this.acc.y *= -12.03;
//  }
// //  }else{
// //    this.vel.y = random(-0.02, 0.02);}
// // }
// }

}

class Particle1{

constructor(){
  this.pos = createVector(random(width), random(height));
  //  this.vel = p5.Vector.random2D();
  this.prev = createVector(this.pos);
  this.vel = createVector();
  this.acc = createVector();
  var force;
}

update(){
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.acc.mult(0);
}

show(){

    //stroke(255);
    //strokeWeight(4);
    //point(this.pos.x, this.pos.y);

    var txt = myResults ;              //scope issue
    var txt1 = myResults1;
    var txt2 = myResults2;
    var tx = String(txt);
    var tx1 = String(txt1);
    var tx2 = String(txt2);
    textSize(tSize);
    //fill(255);


    fill(220, 100, 130, tAlph);
    text(tx1, this.pos.x, this.pos.y);


}

attracted(target){
  var force = p5.Vector.sub(target, this.pos);   //direction
  var dsquared = force.magSq();
  dsquared = constrain(dsquared, 1, 50);   //constrain itself not to be too extreme
  var G = 20;
  var strength = G / dsquared;
  force.setMag(strength);
  this.acc.add(force);

  // if (abs(this.pos.x-mouseX)<10){
  //   this.acc.x *= -12.03;
  // }else{
  //   this.acc.x = force.x;
  // }
  // // }else{
  // //   this.acc.x = random(-0.02, 0.02);}
  //  if (abs(this.pos.y-mouseY)<10){
  //   this.acc.y *= -12.03;
  // }else{
  //   this.acc.y = force.y;
  // }
}

//   mouse(){
//  if (abs(this.pos.x-mouseX)<30){
//    this.acc.x *= -12.03;
//  }
//  // }else{
//  //   this.acc.x = random(-0.02, 0.02);}
//   if (abs(this.pos.y-mouseY)<30){
//    this.acc.y *= -12.03;
//  }
// //  }else{
// //    this.vel.y = random(-0.02, 0.02);}
// // }
// }

}

class Particle2{

constructor(){
  this.pos = createVector(random(width), random(height));
  //  this.vel = p5.Vector.random2D();
  this.prev = createVector(this.pos);
  this.vel = createVector(random(0, 0));
  this.acc = createVector();
  var force;

}

update(){
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.acc.mult(0);     //reset
}

show(){

    //stroke(255);
    //strokeWeight(4);
    //point(this.pos.x, this.pos.y);

    var txt = myResults ;              //scope issue
    var txt1 = myResults1;
    var txt2 = myResults2;
    var tx = String(txt);
    var tx1 = String(txt1);
    var tx2 = String(txt2);
    textSize(tSize);
    //fill(255);


    fill(40, 0, 255, tAlph);
    text(tx2, this.pos.x, this.pos.y);

}

attracted(target){
  var force = p5.Vector.sub(target, this.pos);   //direction
  var dsquared = force.magSq();
  dsquared = constrain(dsquared, 1, 50);   //constrain itself not to be too extreme
  var G = 150;
  var strength = G / dsquared;
  force.setMag(strength);
  this.acc.add(force);

//   if (abs(this.pos.x-mouseX)<10){
//     this.acc.x *= -12.03;
//   }else{
//     this.acc.x = force.x;
//   }
//   // }else{
//   //   this.acc.x = random(-0.02, 0.02);}
//    if (abs(this.pos.y-mouseY)<10){
//     this.acc.y *= -12.03;
//   }else{
//     this.acc.y = force.y;
//   }
// }

//   mouse(){
//  if (abs(this.pos.x-mouseX)<30){
//    this.acc.x *= -12.03;
//  }
//  // }else{
//  //   this.acc.x = random(-0.02, 0.02);}
//   if (abs(this.pos.y-mouseY)<30){
//    this.acc.y *= -12.03;
//  }
// //  }else{
// //    this.vel.y = random(-0.02, 0.02);}
// // }
// }

  }
}


function drawGradient(x, y) {
  let radius = width/2;
  let h = 0;
  for (let r = radius; r > 0;  r -=1) {
    stroke(255, h);
    strokeWeight(2);
    ellipse(x, y, r, r);
    h -=0.1;

  }
}

function mousePressed() {
  redraw();
  //saveCanvas('myCanvas', 'jpg');
}
