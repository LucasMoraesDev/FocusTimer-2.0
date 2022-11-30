export function Timer({ playButton, minutesDisplay, secondsDisplay, timeEnd }) {
  let timerInterval;

  function playButtonClick() {
    disablePlayButton();
    timerInterval = setInterval(() => {
      countdown(minutesDisplay, secondsDisplay);
    }, 1000);
  }

  function stopButtonClick() {
    clearInterval(timerInterval);
    resetTimerDisplay();
    ablePlayButton();
  }

  function plusButtonClick() {
    minutesDisplay.innerHTML = String(
      Number(minutesDisplay.innerHTML) + 5
    ).padStart(2, "0");
  }

  function minusButtonClick() {
    let isMinutesLessThanFive = Number(minutesDisplay.innerHTML) < 5;

    if (isMinutesLessThanFive) {
      stopButtonClick();
    } else
      minutesDisplay.innerHTML = String(
        Number(minutesDisplay.innerHTML) - 5
      ).padStart(2, "0");
  }

  function countdown() {
    if (minutesDisplay.innerHTML == 0 && secondsDisplay.innerHTML == 0) {
      timeEnd();
      stopButtonClick();
      return;
    } else if (secondsDisplay.innerHTML == 0) {
      updateTimerDisplay(--minutesDisplay.innerHTML, 59);
    } else {
      updateTimerDisplay(minutesDisplay.innerHTML, --secondsDisplay.innerHTML);
    }
  }

  function updateTimerDisplay(NewMinute, NewSecond) {
    minutesDisplay.innerHTML = String(NewMinute).padStart(2, "0");
    secondsDisplay.innerHTML = String(NewSecond).padStart(2, "0");
  }

  function resetTimerDisplay() {
    updateTimerDisplay(25, 0);
  }

  function disablePlayButton() {
    playButton.setAttribute("disabled", "");
  }

  function ablePlayButton() {
    playButton.removeAttribute("disabled");
  }

  return {
    playButtonClick,
    stopButtonClick,
    plusButtonClick,
    minusButtonClick,
  };
}
