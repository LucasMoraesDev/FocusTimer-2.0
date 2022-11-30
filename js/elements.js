const root = document.querySelector(":root");

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const playButton = document.querySelector(".play");
const stopButton = document.querySelector(".stop");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");

const florestButton = document.querySelector(".florest");
const rainButton = document.querySelector(".rain");
const coffeeShopButton = document.querySelector(".coffee-shop");
const firePlaceButton = document.querySelector(".fire-place");

const florestSvg = document.querySelector(".florest svg");
const rainSvg = document.querySelector(".rain svg");
const coffeeShopSvg = document.querySelector(".coffee-shop svg");
const firePlaceSvg = document.querySelector(".fire-place svg");

const florestRange = document.getElementsByName("florest-range")[0];
const rainRange = document.getElementsByName("rain-range")[0];
const coffeeShopRange = document.getElementsByName("coffee-shop-range")[0];
const firePlaceRange = document.getElementsByName("fire-place-range")[0];

const lightModeButton = document.querySelector(".lightMode");
const darkModeButton = document.querySelector(".darkMode");

export {
  root,
  minutesDisplay,
  secondsDisplay,
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
};
