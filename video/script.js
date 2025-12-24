document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("videoPlayer");

    // Redirect to another page when the video ends
    video.addEventListener("ended", function() {
        window.location.href = "https://www.google.com/"; // Change this to the desired page URL
    });
});
