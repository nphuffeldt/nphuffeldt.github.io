document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    
    // Simple form alert for demonstration
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! (This is a demo form)');
            form.reset();
        });
    }
});

// supposed to randomize header images from uploaded files
document.addEventListener('DOMContentLoaded', () => {
    // 1. Define your array of image paths
    const headerImages = [
        'images/header1.jpeg',
        'images/header2.jpeg',
        'images/header3.jpeg',
        'images/header4.jpeg'
    ];

    // 2. Select the hero element
    const heroHeader = document.querySelector('.hero-header');

    if (heroHeader) {
        // 3. Pick a random index
        const randomIndex = Math.floor(Math.random() * headerImages.length);
        const selectedImage = headerImages[randomIndex];

        // 4. Apply the background image
        // We keep the gradient overlay and add the random image
        heroHeader.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${selectedImage}')`;
        
        console.log(`Loaded random header: ${selectedImage}`);
    }
});
