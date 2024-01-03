import { initComicFont } from "comic-sites";
import { Component } from "./components/Component/Component";
import { Header } from "./components/Header/Header";
import headerStyles from "./components/Header/headerStyles.module.scss";
import { SwitchButton } from "./components/SwitchButton/SwitchButton";
import switchStyles from "./components/SwitchButton/switchStyles.module.scss";
import { XmasImage } from "./components/XmasImage/XmasImage";
import mainStyles from "./components/mainStyles.module.scss";

initComicFont();

const mainContainer = document.querySelector(".main-container")!;

const header = new Header(mainContainer, headerStyles["main-header"], "header");
header.render();

const mainSection = new Component(
  mainContainer,
  mainStyles["main-section"],
  "section"
);
mainSection.render();

const xmasImageContainer = new XmasImage(
  mainSection.element,
  mainStyles["xmas-image-container"],
  "div"
);

xmasImageContainer.render();

const switchContainer = new Component(
  mainSection.element,
  mainStyles["switch-container"],
  "div"
);
switchContainer.render();

const switchButtonTree = new SwitchButton(
  switchContainer.element,
  `${switchStyles["switch"]} switch-button-tree`,
  "label"
);

const switchButtonPresent = new SwitchButton(
  switchContainer.element,
  `${switchStyles["switch"]} switch-button-present`,
  "label"
);

const switchButtonCat = new SwitchButton(
  switchContainer.element,
  `${switchStyles["switch"]} switch-button-cat`,
  "label"
);

switchButtonTree.render();
switchButtonPresent.render();
switchButtonCat.render();
