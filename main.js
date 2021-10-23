Webcam.set({
    width: 300,
    height: 350,
    image_format: 'png',
    png_quality: 1080
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_Snap(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
      });
}
console.log('ml5', ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ygh3I68FT/", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded :DDDDDDDDDDDDDDD");
}
function speak(){
     var synth= window.speechSynthesis;
     speak_data_1="The first prediction is....(｡･∀･)ﾉﾞ(｡･∀･)ﾉﾞ(｡･∀･)ﾉﾞ" + prediction_1;
     speak_data_2="The second prediction is....（＾∀＾●）ﾉｼ（＾∀＾●）ﾉｼ（＾∀＾●）ﾉｼ" + prediction_2;
     var utterThis=new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
     synth.speak(utterThis);
}