stattus = "";
function setup()
{
canvas = createCanvas(300,280);
canvas.position(450, 250);
canvas = createCapture(VIDEO);
canvas.hide();
}
function draw()
{
    image(canvas, 0, 0, 300, 280);
}
function modelLoaded()
{
    console.log("Model Loaded!");
    stattus = true;
}
function start()
{
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("stattus").innerHTML = "Status : Detecting Objects";
}