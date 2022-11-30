import {
  minutesDisplay,
  secondsDisplay,
  playButton,
  florestButton,
  rainButton,
  coffeeShopButton,
  firePlaceButton,
} from "./elements.js";
import { Controls } from "./controls.js";
import { Sounds } from "./sounds.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";

const sounds = Sounds();

const controls = Controls({
  florestButton,
  rainButton,
  coffeeShopButton,
  firePlaceButton,
});

const timer = Timer({
  playButton,
  minutesDisplay,
  secondsDisplay,
  timeEnd: sounds.timeEnd,
});

Events({ controls, sounds, timer });
