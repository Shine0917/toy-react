import { createElement, Component, render } from "./toy-react.js";
class MyComponent extends Component {
  // constructor(type) {}
  // setAttribute(name, value) {}
  // appendChild() {}
  render() {
    <div>
      <h1>my component</h1>
      {this.children}
    </div>;
  }
}

render(
  <MyComponent id="a" class="c">
    <div></div>
    <div></div>
    <div></div>
  </MyComponent>,
  document.body
);
