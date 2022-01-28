export default class World {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  /**
   * sayHello
   */
  public sayHello(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.message;
    }
  }
}
