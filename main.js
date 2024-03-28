status = "";

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects";
    value = document.getElementById("input").value;
}

function modelLoaded()
{
    console.log("Model Is Loaded!!!!!!");
    status = true;
    
}

function draw()
{
 image(video, 0, 0, 480, 380);
}