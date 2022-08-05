function preload() {
	img = loadImage(".png");
}

function setup() {
    div = createDiv('');
    div.addClass('canvas');

    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    canvas.parent(div);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    function modelLoaded () {
        console.log('%cPoseNet is Initialized', "text-size:5rem;color:green;")
    }
    function gotPoses (results) {
        if (results.length > 0) {
            console.log(results);
            console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y);
        }
    }
}
function draw() { 
	image(video, 0, 0, 300, 300);
	image(img, 0, 0, 30, 30);
}
function take_snapshot() {
    save('myFilterImage.png');
}
