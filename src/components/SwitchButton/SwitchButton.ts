import { Component } from "../Component/Component";
import imageStlyes from "../XmasImage/XmasImage.module.scss";
import styles from "./switchStyles.module.scss";

export class SwitchButton extends Component {
  switchText: string;
  imageClassName: string;

  constructor(
    parentElement: Element,
    className: string,
    tagName: string,
    switchText: string,
    imageClassName: string
  ) {
    super(parentElement, className, tagName);
    this.switchText = switchText;
    this.imageClassName = imageClassName;
  }

  render() {
    super.render();

    this.element.innerHTML = `
    <h2 class="${styles["switch-label"]}">${this.switchText}</h2>
    <label class="${styles.switch}">
      <input class="input-${this.switchText}" type="checkbox">
      <span class="${styles.slider}"></span>
    <label>
      `;

    const checkbox = this.element.querySelector('input[type="checkbox"]');
    checkbox?.addEventListener("change", this.handleCheckboxChange);
  }

  handleCheckboxChange = (event: Event) => {
    const checkbox = event.target as HTMLInputElement;
    const image = document.querySelector(
      `.${this.imageClassName}`
    ) as HTMLElement;

    const treeImage = document.querySelector(
      `.${imageStlyes["xmas-image-tree"]}`
    ) as HTMLElement;
    const presentsImage = document.querySelector(
      `.${imageStlyes["xmas-image-presents"]}`
    ) as HTMLElement;
    const catImage = document.querySelector(
      `.${imageStlyes["xmas-image-cat"]}`
    ) as HTMLElement;

    const treeCheckbox = document.querySelector(
      ".input-Tree"
    ) as HTMLInputElement;
    const presentsCheckbox = document.querySelector(
      ".input-Presents"
    ) as HTMLInputElement;
    const catCheckbox = document.querySelector(
      ".input-Cat"
    ) as HTMLInputElement;

    if (checkbox.checked) {
      image.style.display = "block";

      if (
        this.switchText === "Cat" &&
        treeCheckbox.checked &&
        presentsCheckbox.checked
      ) {
        treeCheckbox.checked = false;

        const slider = treeCheckbox.nextElementSibling as HTMLElement;
        slider.style.transform = "none";
        treeImage.style.display = "none";
      }

      if (
        this.switchText === "Tree" &&
        catCheckbox.checked &&
        presentsCheckbox.checked
      ) {
        catCheckbox.checked = false;

        const slider = catCheckbox.nextElementSibling as HTMLElement;
        slider.style.transform = "none";
        catImage.style.display = "none";
      }

      if (
        this.switchText === "Presents" &&
        catCheckbox.checked &&
        treeCheckbox.checked
      ) {
        catCheckbox.checked = false;

        const slider = catCheckbox.nextElementSibling as HTMLElement;
        slider.style.transform = "none";
        catImage.style.display = "none";
      }

      if (
        (this.switchText === "Cat" &&
          !presentsCheckbox.checked &&
          treeCheckbox.checked) ||
        (this.switchText === "Tree" &&
          !presentsCheckbox.checked &&
          catCheckbox.checked)
      ) {
        catCheckbox.checked = false;
        treeCheckbox.checked = false;
        presentsCheckbox.checked = true;

        presentsImage.style.display = "block";

        const catSlider = catCheckbox.nextElementSibling as HTMLElement;
        catSlider.style.transform = "none";
        catImage.style.display = "none";

        const treeSlider = treeCheckbox.nextElementSibling as HTMLElement;
        treeSlider.style.transform = "none";
        treeImage.style.display = "none";
      }
    }

    if (!checkbox.checked) {
      image.style.display = "none";
    }
  };
}
