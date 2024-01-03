import { Component } from "../Component/Component";
import styles from "./XmasImage.module.scss";

export class XmasImage extends Component {
  render() {
    super.render();

    this.element.innerHTML = `
      <img class="${styles["xmas-image"]} ${styles["xmas-image-tree"]}" src="https://pngimg.com/d/christmas_tree_PNG109.png" alt="Christmas tree" width="350">
      <img class="${styles["xmas-image"]} ${styles["xmas-image-presents"]}" src="https://www.pngall.com/wp-content/uploads/15/Christmas-Present-PNG-Photos.png" alt="Christmas presents" width="200">
      <img class="${styles["xmas-image"]} ${styles["xmas-image-cat"]}" src="https://freepngimg.com/save/123804-christmas-cat-free-hd-image/719x782" alt="Cat wearing Santa's hat presents" height="150">
    `;
  }
}
