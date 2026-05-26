const images = [
    'https://picsum.photos/id/10/400/300',
    'https://picsum.photos/id/20/400/300',
    'https://picsum.photos/id/30/400/300',
    'https://picsum.photos/id/40/400/300'
];

let currentIndex = 0;

const imgElement = document.getElementById('gallery-img');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

function updateGallery() {
    imgElement.src = images[currentIndex];
    
    if (currentIndex === 0) {
        btnPrev.disabled = true;
    } else {
        btnPrev.disabled = false;
    }

    if (currentIndex === images.length - 1) {
        btnNext.disabled = true;
    } else {
        btnNext.disabled = false;
    }
}

btnPrev.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

btnNext.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateGallery();
    }
});

updateGallery();