import { Component } from "../Component/Component";
import styles from "./switchStyles.module.scss";

export class SwitchButton extends Component {
  render() {
    super.render();

    this.element.innerHTML = `
      <input type="checkbox">
      <span class="${styles.slider}"></span>`;
  }
}
