import {
  playButton,
  stopButton,
  plusButton,
  minusButton,
  florestButton,
  rainButton,
  coffeeShopButton,
  firePlaceButton,
} from "./elements.js";

export function Events({ controls, sounds, timer }) {
  playButton.addEventListener("click", () => {
    timer.playButtonClick();
  });

  stopButton.addEventListener("click", () => {
    timer.stopButtonClick();
  });

  plusButton.addEventListener("click", () => {
    timer.plusButtonClick();
  });

  minusButton.addEventListener("click", () => {
    timer.minusButtonClick();
  });

  florestButton.addEventListener("click", () => {
    sounds.pauseAllAudios();
    if (florestButton.classList.contains("selected")) {
      controls.unselectAll();
    } else {
      controls.florestButtonClick();
      sounds.florestAudio.play();
    }
  });

  rainButton.addEventListener("click", () => {
    sounds.pauseAllAudios();
    if (rainButton.classList.contains("selected")) {
      controls.unselectAll();
    } else {
      controls.rainButtonClick();
      sounds.rainAudio.play();
    }
  });

  coffeeShopButton.addEventListener("click", () => {
    sounds.pauseAllAudios();
    if (coffeeShopButton.classList.contains("selected")) {
      controls.unselectAll();
    } else {
      controls.coffeeShopButtonClick();
      sounds.coffeeShopAudio.play();
    }
  });

  firePlaceButton.addEventListener("click", () => {
    sounds.pauseAllAudios();
    if (firePlaceButton.classList.contains("selected")) {
      controls.unselectAll();
    } else {
      controls.firePlaceButtonClick();
      sounds.firePlaceAudio.play();
    }
  });
}
