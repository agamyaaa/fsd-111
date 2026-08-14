import readline from "readline/promises";
import { stdin, stdout } from "process";

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
  do {
    console.log("Welcome to Flipkart");
    console.log("1. Show cart");
    console.log("2. Add to cart");
    console.log("3. Remove from cart");
    console.log("4. Update cart");
    console.log("5. Exit");
    choice = await cin.question("Enter your choice: ");
    switch (choice) {
      case "1":
        console.log("Showing products");
        break;
      case "2":
        console.log("Product added");
        break;
      case "3":
        console.log("Remove product");
        break;
      case "4":
        console.log("Update product qty");
        break;
      case "5":
        console.log("See you later!");
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  } while (choice != 5);
  cin.close();
};
main();
