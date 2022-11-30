export function Controls({
  florestButton,
  rainButton,
  coffeeShopButton,
  firePlaceButton,
}) {
  function florestButtonClick() {
    unselectAll();
    florestButton.classList.add("selected");
  }

  function rainButtonClick() {
    unselectAll();
    rainButton.classList.add("selected");
  }

  function coffeeShopButtonClick() {
    unselectAll();
    coffeeShopButton.classList.add("selected");
  }

  function firePlaceButtonClick() {
    unselectAll();
    firePlaceButton.classList.add("selected");
  }

  function unselectAll() {
    florestButton.classList.remove("selected");
    rainButton.classList.remove("selected");
    coffeeShopButton.classList.remove("selected");
    firePlaceButton.classList.remove("selected");
  }

  return {
    florestButtonClick,
    rainButtonClick,
    coffeeShopButtonClick,
    firePlaceButtonClick,
    unselectAll,
  };
}
