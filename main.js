// picture of nose https://static.wikia.nocookie.net/box-critters/images/2/2f/Clown_nose_large.png/revision/latest?cb=20200425190410
function preload() {}

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
}
function take_snapshot() {
    save('myFilterImage.png');
}

