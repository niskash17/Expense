let expenseList = document.getElementById("expenseList");
let totalExpenses = document.getElementById("totalExpenses");
let averageExpense = document.getElementById("averageExpense");

function addExpense() {
  let expenseAmount = parseFloat(
    document.getElementById("expenseAmount").value
  );
  let expenseCategory = document.getElementById("expenseCategory").value;

  if (
    isNaN(expenseAmount) ||
    expenseAmount <= 0 ||
    expenseCategory.trim() === ""
  ) {
    alert("Please enter a valid amount and category.");
    return;
  }

  let listItem = document.createElement("li");
  listItem.innerHTML = `
        <span>${expenseCategory}</span>
        <span>$${expenseAmount.toFixed(2)}</span>
    `;

  expenseList.appendChild(listItem);

  // Update total expenses
  let currentTotal = parseFloat(totalExpenses.innerText);
  totalExpenses.innerText = (currentTotal + expenseAmount).toFixed(2);

  // Update average expense
  let numExpenses = expenseList.childElementCount;
  averageExpense.innerText = (
    parseFloat(totalExpenses.innerText) / numExpenses
  ).toFixed(2);

  // Clear input fields
  document.getElementById("expenseAmount").value = "";
  document.getElementById("expenseCategory").value = "";
}
