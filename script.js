var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3'); 
audio.loop=true;
document.body.appendChild(audio);


var play = document.getElementById('soundbtn');;
function playsound()
{
    
    play.attributes[1].value = "javascript:pausesound()"
    play.innerHTML = "Sound Off.."
    audio.play();
}

function pausesound)
{
    
    play.attributes[1].value = "javascript:playsound()"
    play.innerHTML = "Sound On.."
    audio.pause();
}
