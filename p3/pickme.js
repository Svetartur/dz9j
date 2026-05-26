const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', function() {
        const currentContent = this.nextElementSibling;
        const isOpen = currentContent.style.display === 'block';

        const allContents = document.querySelectorAll('.accordion-content');
        allContents.forEach(content => {
            content.style.display = 'none';
        });

        if (!isOpen) {
            currentContent.style.display = 'block';
        }
    });
});