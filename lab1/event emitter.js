import { EventEmitter } from "node:events";

const login = (name) => {
  console.log(`Logged in ${name}`);
};

const start = () => {
  console.log("Starting...");
};

const working = (name) => {
  console.log(`${name} add items  to cart`);
};

const checkout = (name) => {
  console.log(`Checkout ${name}`);
};
start();

login("Agamya yadav");
working("chair");

checkout("Agamya yadav");

const task = new EventEmitter();

task.on("greeting", login);
task.on("working", working);
task.on("checkout", checkout);

task.emit("greeting", "aastha jain");
task.emit("working", "Table");
task.emit("checkout", "Amant");

task.emit("greet","Mayank Bansal");
task.emit("greet", "Mudit Lohani");
task.emit("greet", "Manya Goyal");