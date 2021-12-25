Webcam.set({
    height:290,
    width:290,
    Image_format:"png",
    pang_quality:90
});

camera = document.getElementById("div_cam");
Webcam.attach("#div_cam");

function Get_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("div_cap").innerHTML = "<img id='output_img' src="+data_uri+">"
    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hxHJoHcUq/model.json', model_loaded);

function model_loaded() {
    console.log("model is loaded now...");
}

function Check() {
    img = document.getElementById("output_img");
    classifier.classify(img, gotResult);
    console.log(classifier);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }

    else {
        console.log(result);
        document.getElementById("Person").innerHTML = results[0].label; 
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}