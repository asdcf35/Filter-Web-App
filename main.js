let noseX = 0;
let noseY = 0;
function preload() {
	img = loadImage("https://i.postimg.cc/bNpHbyMV/pixlr-bg-result.png");
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
	    noseX = results[0].pose.nose.x;
	    noseY = results[0].pose.nose.y;
            console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y);
        }
    }
}
function draw() { 
	image(video, 0, 0, 300, 300);
	image(img,noseX-45,noseY-30,90, 90);

}
function take_snapshot() {
    save('myFilterImage.png');
}

