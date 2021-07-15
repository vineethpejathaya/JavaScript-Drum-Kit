document.addEventListener('keydown',function(e){
console.log(e.keyCode);
let audio = document.querySelector(`audio[KeyCode="${e.keyCode}"]`);
if(audio ===null)
return;
 let key=document.querySelector(`li[KeyBoard="${e.keyCode}"]`);
 console.log(key);
 key.classList.add('playing');
 //key.classList.remove('playing');
 audio.play();
 audio.currentTime=0;
});
