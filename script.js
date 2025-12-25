const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Add event listeners for hover effects
[yesButton, noButton].forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.2s ease-in-out';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Update click event listeners with error handling
yesButton.addEventListener('click', () => {
    try {
        window.location.href = './yes-response';
    } catch (error) {
        console.error('Failed to redirect to yes-response page:', error);
    }
});

noButton.addEventListener('click', () => {
    try {
        window.location.href = './no-response';
    } catch (error) {
        console.error('Failed to redirect to no-response page:', error);
    }
});
