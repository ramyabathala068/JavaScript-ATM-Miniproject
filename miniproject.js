const prompt = require("prompt-sync")();

const pin = 200210;
let balance = 15000;
let userPin = Number(prompt("Enter pin: "));
if (userPin === pin) {
  console.log("1. Check Balance");
  console.log("2. Deposit");
  console.log("3. Withdraw");
  console.log("4. Exit");
  let choice = Number(prompt("Choice: "));
  switch (choice) {
    case 1:
      console.log(`💰Available Balance: ${balance}`);
      break;
    case 2:
      let depAmount = Number(prompt("Enter Amount : "));
      if (depAmount > 0) {
        balance += depAmount;
        console.log("✅Deposited Successfully");
        console.log(`💰Available Balance: ${balance}`);
      } else {
        console.log("❌ Invalid Amount");
      }

      break;
    case 3:
      let withAmount = Number(prompt("Enter Amount: "));
      if (withAmount > 0 && withAmount <= balance) {
        balance -= withAmount;
        console.log("✅Collect Your Cash");
        console.log(`💰Available Balance: ${balance}`);
      } else if (withAmount <= 0) {
        console.log("❌ Invalid Amount");
      } else {
        console.log("⚠️ Insufficient Balance");
      }
      break;
    case 4:
      console.log("✅Thank you for using our service");
      break;
    default:
      console.log("❌Invalid Choice");
  }
} else {
  console.log("❌Invalid PIN!!!");
}
