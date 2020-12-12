var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3'); 
audio.loop=true;
document.body.appendChild(audio);


var play = document.getElementById('soundbtn');
function playsound()
{
    
    play.attributes[1].value = "javascript:pausesound()"
    play.innerHTML = "Sound Off.."
	console.log("play sound");
    audio.play();
}

function pausesound()
{
    
    play.attributes[1].value = "javascript:playsound()"
    play.innerHTML = "Sound On.."
	console.log("inside pause");
    audio.pause();
}
