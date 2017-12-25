function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.drum-btn[data-key="${e.keyCode}"]`);
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('play');
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return;
	this.classList.remove('play');
}

window.addEventListener('keydown', playSound)

const keys = document.querySelectorAll('.drum-btn');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
