let lastRenderTime = 0
let gameOver = false
let gameStart = false
let userInteracted = false;
let audio = document.getElementById('background-audio');
let click_audio = document.getElementById('click-audio');
const gameBoard = document.getElementById('game-board')

function main(currentTime) {

  // Fake Loading
  setTimeout(function () {
    document.querySelector('.game-board').style.display = 'flex';
    document.querySelector('.loading').style.display = 'none';
    gameStart = true
  }, 3000); // 3 segundos

  // Test if is loaded
  if (gameStart) {

    // If audio doesnt start, start it
    if (audio.paused) {
      const playPromise = audio.play();

      if (!userInteracted) {
        userInteracted = true;

        audio.play()
          .then(() => {
            console.log("Audio played");
          })
          .catch(error => {
            console.error("Error playing audio:", error);
          });
      }
    }

  }


  window.requestAnimationFrame(main)

}

window.requestAnimationFrame(main)

document.querySelectorAll('.button').forEach(item => {
  item.addEventListener('click', action => {
    // change the image to the clicked one and play sound
    action_click(action.target)

    if (action.target.id == 'descend') {
      //wait 3 seconds and go to next view (ranqking.html)
      setTimeout(function () {
        window.location.href = "ranking.html";
      }, 3000);

    }

  })
})

function action_click(target) {

  let image = target
  // Store the original source URL
  const originalSrc = target.src;

  // Function to change the src to the modified version
  function changeSrc() {
    image.src = originalSrc.replace('.png', '-DW.png');
    click_audio.play()
    // Revert back to the original source after 250 milliseconds
    setTimeout(revertSrc, 250);
  }

  // Function to revert the src back to the original
  function revertSrc() {
    image.src = originalSrc;
  }

  // Call the changeSrc function to initiate the change
  changeSrc();
}

document.getElementById('next-btn').addEventListener('click', nextBtn)

function nextBtn() {
  click_audio.play();
  alert(`${document.getElementById('player-name').value} Obrigado por jogar!`)
}