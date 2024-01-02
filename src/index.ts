import { initComicFont } from "comic-sites";
import { Header } from "./components/Header/Header";

initComicFont();

const mainContainer = document.querySelector(".main-container")!;

const header = new Header(mainContainer, "main-header", "header");
header.render();
