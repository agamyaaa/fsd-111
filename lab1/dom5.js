//using oops class

import { EventEmitter } from "events";

class DomClass extends EventEmitter {
  addEventListener(eventName, callback) {
    this.on(eventName, callback);
  }
  removeEventListener(eventName, callback) {
    this.off(eventName, callback);
  }

  dispatchEvent(eventName, eventData = {}) {
    const event = {
      type: eventName,
      timestamp: new Date(),
      ...eventData,
    };
    this.emit(eventName, event);
  }
}

const button = new DomClass();
const handleClick = (event) => {
  console.log(
    `button clicked type: ${event.type} at timestamp: ${event.timestamp}`,
  );
};
button.addEventListener("click", handleClick);
button.dispatchEvent("click", { target: "submBtn" });

button.removeEventListener("click", handleClick);
button.dispatchEvent("click", { target: "resetBtn" });
