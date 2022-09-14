function setup(){
    canvas= createCanvas(650,650);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,200,190,250,250);
    fill("blue");
    stroke("blue");
    circle(60,60,80);
    circle(585,60,80);
    circle(585,585,80);
    circle(60,585,80);
    fill("green");
    stroke("green");
    rect(90,50,465,30);
    rect(90,575,465,30);
    rect(50,90,30,465);
    rect(575,90,30,465);
}
function take_snapshot(){
    save("my_image.png");
}