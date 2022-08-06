x = 0;
y = 0;
screen_width = "";
screen_height = "";
apple = "";
speak_data = "";
to_number = "";


draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    console.log(to_number);
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started drawing apple";
      drawn_apple = "";
    }
    else{
      document.getElementById("status").innerHTML = "The speech is not recongnised ";
    }

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width,screen_height-150)
 canvas.position(0,150)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number +"Apple drawn ";
    speak();
    for (var i = i ; i <= to_number; i++){
      x = Mathfloor(Math.random()*700);
      y = Mathfloor(Math.random()*400);
      image(apple,x,y,50,50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
  apple = loadImage("apple.png")
}