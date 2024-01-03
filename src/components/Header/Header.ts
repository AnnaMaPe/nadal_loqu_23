import { Component } from "../Component/Component";
import styles from "./headerStyles.module.scss";
export class Header extends Component {
  render() {
    super.render();

    this.element.innerHTML = `<h1 class="${styles["title"]}">Catch 'em all</h1><img class="${styles["header-image"]}" src="https://michaelmcclennan.com/wp-content/uploads/2021/03/Dancing-Jesus-resize.gif" alt="Jesus dancing" width="50">
`;
  }
}
