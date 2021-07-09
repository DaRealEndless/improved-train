function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(700, 75);
    video = createCapture(500, 500);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotResult)
}

function draw() {
    background("chocolate");
}

function modelloaded() {
    console.log('Posenet has Started');
}

function gotResult(results) {
    if (results.length > 0) {
        console.log(results);
    }
}