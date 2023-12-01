const followButton = document.getElementById('followButton');
const container = document.getElementById('container');

followButton.addEventListener('click', () => {
    const colors = ['#e81cff', '#40c9ff', '#fc00ff', '#00dbde'];
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${-Math.random() * 100}px`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random()}s`;
        document.body.appendChild(confetti);
    }

    setTimeout(() => {
        const confettiElements = document.querySelectorAll('.confetti');
        confettiElements.forEach(confetti => {
            confetti.style.transition = 'opacity 5s';
            confetti.style.opacity = '0';
        });

        setTimeout(() => {
            confettiElements.forEach(confetti => {
                confetti.remove();
            });
        }, 1000); // Wait for the transition duration before removing confetti elements
    }, 3000); // Assuming the confetti animation duration is less than 6 seconds
    followButton.textContent = 'Following';
});
