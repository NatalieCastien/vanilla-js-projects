const video = document.getElementById("video");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
const progress = document.getElementById("progress");
const timeStamp = document.getElementById("timestamp");

console.log(playButton);
// Play and pauze
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// update play pauze icon
const updatePlayIcon = () => {
  if (video.paused) {
    playButton.innerHTML = `<i class="fas fa-play fa-2x"></i>`;
  } else {
    playButton.innerHTML = `<i class="fas fa-pause fa-2x"></i>`;
  }
};

// update progress and timestamp
const updateProgress = () => {
  //   console.log(video.currentTime);
  //   console.log(video.duration);
  progress.value = (video.currentTime / video.duration) * 100;

  //   get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }
  // get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timeStamp.innerHTML = `${minutes}:${seconds}`;
};

// stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

// set video time to progress
const setVideoProgress = (e) => {
  const progress = e.target.value;
  video.currentTime = (progress * video.duration) / 100;
};

// Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

playButton.addEventListener("click", toggleVideoStatus);

stopButton.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
