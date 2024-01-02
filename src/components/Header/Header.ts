import { Component } from "../Component/Component";

export class Header extends Component {
  render() {
    super.render();

    this.element.innerHTML = `<h1 class="main-title">Bon Nadal</h1><img class="header-image" src="https://michaelmcclennan.com/wp-content/uploads/2021/03/Dancing-Jesus-resize.gif" alt="Jesus dancing" width="100">
`;
  }
}
