//drum.js
window.onload = function () {
    let transitioning = Array.from(document.querySelectorAll(".key"));
    transitioning.forEach(key => key.addEventListener('transitionend', removeTransition))
    document.addEventListener('keydown', event => {
                let aKey = document.querySelector(`div[data-key="${event.keyCode}"]`);
                let aAudio  = document.querySelector(`audio[data-key="${event.keyCode}"]`);
                if(!aAudio) return;
                aKey.classList.add("playing");
                aAudio.currentTime = 0;
                aAudio.play();
    });

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
            e.target.classList.remove('playing');
    }
};