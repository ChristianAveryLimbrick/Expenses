// Getting the elements from HTML.
const monthlyBudgetInput = document.getElementById("monthly-budget");
const budgetAmountBtn = document.getElementById("budget-amnt-btn");
const budgetRemainingDiv = document.getElementById("green");
const expenseForm = document.getElementById("expense-intake-form"); // The form where users input expense data
const expenseList = document.getElementById("expense-list");

let budgetRemaining = 0;
let totalExpenseAmount = 0;
console.log(totalExpenseAmount);

// Function to set budgetRemaining and update it in HTML.
const setBudget = () => {
  budgetRemaining = monthlyBudgetInput.value;
  budgetRemainingDiv.innerHTML = `$${budgetRemaining}`;
  clearBudgetInput();
};
// Adding click event listener to the budget amount button.
budgetAmountBtn.addEventListener("click", setBudget);
const clearBudgetInput = () => {
  monthlyBudgetInput.value = "";
};

//Combines the two expense event listeners into one

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //Expense Name
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amnt");

  console.log("Expense Amount Input Value: ", expenseAmountInput.value); // Good for debugging
  const newExpenseDiv = document.createElement("div");
  newExpenseDiv.className = "row expense-item mb-2";
  const nameDiv = document.createElement("div");

  nameDiv.className = "col-6 text-center list-item-text";
  const nameSpan = document.createElement("span");
  nameSpan.className = "expense-name";
  nameSpan.textContent = expenseNameInput.value;
  nameDiv.appendChild(nameSpan);
  newExpenseDiv.appendChild(nameDiv);

  // Create expense amount div and append to newExpenseDiv
  const amountDiv = document.createElement("div");
  amountDiv.className = "col-6 text-center list-item-text";
  const amountSpan = document.createElement("span");
  amountSpan.className = "expense-amnt";
  amountSpan.textContent = `$${expenseAmountInput.value}`;
  amountDiv.appendChild(amountSpan);
  newExpenseDiv.appendChild(amountDiv);

  // Append the new expense div to the expense list
  expenseList.appendChild(newExpenseDiv);

  let newExpenseAmount = parseFloat(expenseAmountInput.value) || 0;
  totalExpenseAmount += newExpenseAmount;
  document.getElementById("red").innerHTML = `$${totalExpenseAmount.toFixed(
    2
  )}`;

  budgetRemaining -= newExpenseAmount;
  budgetRemainingDiv.innerHTML = `$${budgetRemaining.toFixed(2)}`;

  expenseNameInput.value = "";
  expenseAmountInput.value = "";
});

console.log(typeof expenseAmountInput.value);
console.log(Number(expenseAmountInput.value));

budgetRemaining = budgetRemaining - totalExpenseAmount;

// Clear the input fields

