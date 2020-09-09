var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3'); 
audio.loop=true;
document.body.appendChild(audio);

var play = document.getElementById('soundbtn');;
function playsound()
{
    console.log("inside playsound")
    play.attributes[1].value = "javascript:stopsound()"
    play.innerHTML = "Sound Off.."
    audio.play();
}

function stopsound()
{
    console.log("inside stopsound")
    play.attributes[1].value = "javascript:playsound()"
    play.innerHTML = "Sound On.."
    audio.pause();
}