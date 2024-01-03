import { Component } from "../Component/Component";
import styles from "./switchStyles.module.scss";

export class SwitchButton extends Component {
  switchText: string;

  constructor(
    parentElement: Element,
    className: string,
    tagName: string,
    switchText: string
  ) {
    super(parentElement, className, tagName);
    this.switchText = switchText;
  }

  render() {
    super.render();

    this.element.innerHTML = `
    <h2 class="${styles["switch-label"]}">${this.switchText}</h2>
    <label class="${styles.switch}">
      <input type="checkbox">
      <span class="${styles.slider}"></span>
    s<label>
      `;
  }
}
