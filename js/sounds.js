export function Sounds() {
  const kitchenTimer = new Audio("assets/Toque-de-notificação-Xiaomi.mp3");
  const florestAudio = new Audio("assets/Floresta.wav");
  const rainAudio = new Audio("assets/Chuva.wav");
  const coffeeShopAudio = new Audio("assets/Cafeteria.wav");
  const firePlaceAudio = new Audio("assets/Lareira.wav");

  florestAudio.loop = true;
  rainAudio.loop = true;
  coffeeShopAudio.loop = true;
  firePlaceAudio.loop = true;

  function timeEnd() {
    kitchenTimer.play();
  }

  function pauseAllAudios() {
    florestAudio.pause();
    rainAudio.pause();
    coffeeShopAudio.pause();
    firePlaceAudio.pause();
  }

  return {
    timeEnd,
    florestAudio,
    rainAudio,
    coffeeShopAudio,
    firePlaceAudio,
    pauseAllAudios,
  };
}
