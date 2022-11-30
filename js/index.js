import {
  root,
  minutesDisplay,
  secondsDisplay,
  playButton,
  florestButton,
  rainButton,
  coffeeShopButton,
  firePlaceButton,
  florestRange,
  rainRange,
  coffeeShopRange,
  firePlaceRange,
  lightModeButton,
  darkModeButton,
} from "./elements.js";
import { Controls } from "./controls.js";
import { Sounds } from "./sounds.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";

const sounds = Sounds({
  florestRange,
  rainRange,
  coffeeShopRange,
  firePlaceRange,
});

const controls = Controls({
  root,
  florestButton,
  rainButton,
  coffeeShopButton,
  firePlaceButton,
  lightModeButton,
  darkModeButton,
});

const timer = Timer({
  playButton,
  minutesDisplay,
  secondsDisplay,
  timeEnd: sounds.timeEnd,
});

Events({ controls, sounds, timer });
