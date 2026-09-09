// Start Surprise

function startSurprise() {

    let birthday = document.getElementById("birthday");

    birthday.classList.remove("hidden");

    birthday.scrollIntoView({
        behavior: "smooth"
    });

    createHearts();
}


// Open Letter

function openLetter() {

    let letter = document.getElementById("letter");

    letter.classList.remove("hidden");

    createHearts();
}


// Final Surprise

function finalSurprise() {

    let message = document.getElementById("finalMessage");

    message.innerHTML = "I LOVE YOU 💗";

    createHearts();

    createManyHearts();
}


// Create floating hearts

function createHearts() {

    let heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💗";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";

    document.body.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 5000);

}


// Create many hearts

function createManyHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(function () {

            createHearts();

        }, i * 150);

    }

}


// Automatically create hearts

setInterval(function () {

    createHearts();

}, 1000);
// Music Player

const song = document.getElementById("song");
const playButton = document.getElementById("playButton");
const progress = document.getElementById("progress");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const player = document.querySelector(".music-player");


function toggleMusic() {

    if (song.paused) {

        song.play();

        playButton.innerHTML = "❚❚";

        player.classList.add("playing");

    } else {

        song.pause();

        playButton.innerHTML = "▶";

        player.classList.remove("playing");

    }
}


/* Progress */

song.addEventListener("timeupdate", function () {

    if (!song.duration) return;

    const percent =
        (song.currentTime / song.duration) * 100;

    progress.style.width = percent + "%";

    currentTime.innerText =
        formatTime(song.currentTime);

});


/* Duration */

song.addEventListener("loadedmetadata", function () {

    duration.innerText =
        formatTime(song.duration);

});


/* Click progress bar */

document
    .querySelector(".progress-bar")
    .addEventListener("click", function (e) {

        const width = this.clientWidth;

        const clickX = e.offsetX;

        song.currentTime =
            (clickX / width) * song.duration;

    });


/* Rewind */

function rewindSong() {

    song.currentTime =
        Math.max(0, song.currentTime - 10);

}


/* Forward */

function forwardSong() {

    song.currentTime =
        Math.min(
            song.duration,
            song.currentTime + 10
        );

}


/* Time format */

function formatTime(seconds) {

    if (isNaN(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60);

    return minutes + ":" +
        (secs < 10 ? "0" : "") +
        secs;
}


/* Song finished */

song.addEventListener("ended", function () {

    playButton.innerHTML = "▶";

    player.classList.remove("playing");

    progress.style.width = "0%";

});
