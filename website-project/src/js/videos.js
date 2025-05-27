// Play Local Video
function playVideo(videoId) {
    const video = document.getElementById(videoId);
    video.play();
}

// Pause Local Video
function pauseVideo(videoId) {
    const video = document.getElementById(videoId);
    video.pause();
}

// Play YouTube Video in iframe
function playIframe(iframeId) {
    const iframe = document.getElementById(iframeId);
    const iframeSrc = iframe.src;
    if (!iframeSrc.includes("autoplay=1")) {
        iframe.src = iframeSrc + (iframeSrc.includes("?") ? "&" : "?") + "autoplay=1";
    }
}

// Pause YouTube Video in iframe
function pauseIframe(iframeId) {
    const iframe = document.getElementById(iframeId);
    iframe.src = iframe.src.replace(/autoplay=1/, "autoplay=0");
}

// Show Pop-out Video
function showPopup(videoId) {
    const video = document.getElementById(videoId);
    const popup = document.createElement("div");
    popup.classList.add("video-popup");

    const clonedVideo = video.cloneNode(true);
    clonedVideo.controls = true;
    clonedVideo.autoplay = true;

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.classList.add("close-btn");
    closeButton.onclick = () => {
        document.body.removeChild(popup);
    };

    popup.appendChild(clonedVideo);
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
}