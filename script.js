const videoContainer = document.getElementById("video-container");

function animateVideo() {
    videoContainer.classList.toggle("animate");
}

setInterval(animateVideo, 2000); // Animate every 2 seconds