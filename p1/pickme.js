const track = document.getElementById('track');
const slider = document.getElementById('slider');

slider.addEventListener('mousedown', function(event) {
    event.preventDefault();

    function onMouseMove(event) {
        let newLeft = event.clientX - track.getBoundingClientRect().left - slider.offsetWidth / 2;

        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = track.offsetWidth - slider.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        slider.style.left = newLeft + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});