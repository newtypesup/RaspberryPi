document.getElementById('vs').addEventListener('click', function() {
    const button = this;
    if (button.style.animationPlayState === 'running') {

        button.style.animationPlayState = 'paused';
        void button.offsetWidth;
        button.style.animation = 'none';
        setTimeout(() => {
            button.style.animation = '';
        }, 0);
    } else {
        button.style.animationPlayState = 'running';
    }
});