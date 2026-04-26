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
