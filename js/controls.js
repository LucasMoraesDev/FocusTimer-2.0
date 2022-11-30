export function Controls({
  root,
  florestButton,
  rainButton,
  coffeeShopButton,
  firePlaceButton,
  lightModeButton,
  darkModeButton,
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

  function lightModeButtonClick() {
    lightModeButton.classList.add("hide");
    darkModeButton.classList.remove("hide");

    root.style.setProperty("--main-color", "#1b5b6b");
    root.style.setProperty("--fill-color", "#ffffff");
    root.style.setProperty("--fill-color-unselected", "#C4C4CC");
    root.style.setProperty("--fill-color-selected", "#ffffff");
    root.style.setProperty("--bg-color", "#121214");
    root.style.setProperty("--btn-bg-color", "#29292e");
  }

  function darkModeButtonClick() {
    lightModeButton.classList.remove("hide");
    darkModeButton.classList.add("hide");

    root.style.setProperty("--main-color", "#02799d");
    root.style.setProperty("--fill-color", "#323238");
    root.style.setProperty("--fill-color-unselected", "#323238");
    root.style.setProperty("--fill-color-selected", "#ffffff");
    root.style.setProperty("--bg-color", "#ffffff");
    root.style.setProperty("--btn-bg-color", "#e1e1e6");
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
    lightModeButtonClick,
    darkModeButtonClick,
    unselectAll,
  };
}
