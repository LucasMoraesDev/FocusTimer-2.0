import {
  playButton,
  stopButton,
  plusButton,
  minusButton,
  florestButton,
  rainButton,
  coffeeShopButton,
  firePlaceButton,
  florestSvg,
  rainSvg,
  coffeeShopSvg,
  firePlaceSvg,
  florestRange,
  rainRange,
  coffeeShopRange,
  firePlaceRange,
  lightModeButton,
  darkModeButton,
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

  florestSvg.addEventListener("click", () => {
    sounds.pauseAllAudios();
    if (florestButton.classList.contains("selected")) {
      controls.unselectAll();
    } else {
      controls.florestButtonClick();
      sounds.florestAudio.play();
    }
  });

  rainSvg.addEventListener("click", () => {
    sounds.pauseAllAudios();
    if (rainButton.classList.contains("selected")) {
      controls.unselectAll();
    } else {
      controls.rainButtonClick();
      sounds.rainAudio.play();
    }
  });

  coffeeShopSvg.addEventListener("click", () => {
    sounds.pauseAllAudios();
    if (coffeeShopButton.classList.contains("selected")) {
      controls.unselectAll();
    } else {
      controls.coffeeShopButtonClick();
      sounds.coffeeShopAudio.play();
    }
  });

  firePlaceSvg.addEventListener("click", () => {
    sounds.pauseAllAudios();
    if (firePlaceButton.classList.contains("selected")) {
      controls.unselectAll();
    } else {
      controls.firePlaceButtonClick();
      sounds.firePlaceAudio.play();
    }
  });

  florestRange.addEventListener("change", () => {
    sounds.florestAudio.volume = Number(florestRange.value / 100);
  });
  rainRange.addEventListener("change", () => {
    sounds.rainAudio.volume = Number(rainRange.value / 100);
  });

  coffeeShopRange.addEventListener("change", () => {
    sounds.coffeeShopAudio.volume = Number(coffeeShopRange.value / 100);
  });
  firePlaceRange.addEventListener("change", () => {
    sounds.firePlaceAudio.volume = Number(firePlaceRange.value / 100);
  });

  lightModeButton.addEventListener("click", () => {
    controls.lightModeButtonClick();
  });

  darkModeButton.addEventListener("click", () => {
    controls.darkModeButtonClick();
  });
}
