function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
}
function draw(){
    image(Video, 0, 0, 600, 500);
}
var Song = "";
function preload(){
Song = loadSound("music.mp3");
}
function Play(){
    Song.play();
}