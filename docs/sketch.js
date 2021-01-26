// cross pattern

var myResults = [];
var myResults1 = [];
var myResults2 = [];
var consumerKey = 'jJKwYVKkqnSkbr63NpK7Vzvkx';
var consumerSecret = 'lTMfwMs7rDxz8vPcxBD7Gy5lDO8GXnlIzPw2d8xVhqa1L4xOTw';

var token = '364475473-kMBumzdzoxKZcduTwFGizG0iyMldRx1CQtcRXm2w';
var tokenSecret = 'KBjBbqUZ0of2SQZDFEqSFof7kQPpENigIh7d3BMUQyCjN';

var cb = new Codebird();

// particle

var attractor;
var particles = [];

function setup() {                      //---------setup top
  //createCanvas(400,400);

createCanvas(window.innerWidth, window.innerHeight);

  cb.setConsumerKey(consumerKey, consumerSecret);
  cb.setToken(token, tokenSecret);


  const particlesLength = Math.floor(window.innerWidth/10);
  const particles1Length = Math.floor(window.innerWidth);

  for(let i = 0; i<particlesLength; i++){
    particles.push(new Particle());
  }

  // for(let i = 0; i<particles1Length; i++){
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

          fill(255/i);

          //let myResults = statuses;
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


          fill(255);

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

          fill(255/i);

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
  for (var i =0; i<50; i++){
    particles.push(particle = new Particle());
  }
  attractor = createVector(200, 200);

}                                      //---------setup

function draw(){
 background(0);
 //stroke(255);
 //strokeWeight(4);
 point(attractor.x, attractor.y);        // visible attractor

 for (var i =0; i<particles.length; i++){
   var particle = particles[i];
   particle.attracted(attractor);
   particle.update();
   //particle.mouse();
   particle.show();

  }

}

class Particle{

  constructor(){
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    var force;
  }

  update(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }

  show(){

      //stroke(255);
      //strokeWeight(4);
      //point(this.pos.x, this.pos.y);

      var txt = myResults ;              //scope issue
      var txt1 = myResults1;
      var txt2 = myResults2;
      var tx = String(txt);
      textSize(7);
      fill(255);
      text(tx, this.pos.x, this.pos.y);

  }

  attracted(target){
    var force = p5.Vector.sub(target, this.pos);   //direction
    var dsquared = force.magSq();
    dsquared = constrain(dsquared, 25, 500);   //constrain itself not to be too extreme
    var G = 30;
    var strength = G / dsquared;
    force.setMag(strength);
    this.acc = force;

    if (abs(this.pos.x-mouseX)<30){
      this.acc.x *= -12.03;
    }else{
      this.acc.x = force.x;
    }
    // }else{
    //   this.acc.x = random(-0.02, 0.02);}
     if (abs(this.pos.y-mouseY)<30){
      this.acc.y *= -12.03;
    }else{
      this.acc.y = force.y;
    }
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
