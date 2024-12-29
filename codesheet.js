document.addEventListener('DOMContentLoaded', () => {
    // Show loader for 1.5 seconds
    setTimeout(() => {
        const loader = document.querySelector('.loader-container');
        const mainContent = document.querySelector('.main-content');
        
        // Fade out loader
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        
        // Show main content
        mainContent.style.display = 'block';
        
        // Remove loader after fade
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);

    // Add button functionality
    const backButton = document.querySelector('.back');
    const nextButton = document.querySelector('.next');

    backButton.addEventListener('click', () => {
        // Add your back button functionality here
        console.log('Back button clicked');
    });

    nextButton.addEventListener('click', () => {
        // Add your next button functionality here
        console.log('Next button clicked');
    });
});