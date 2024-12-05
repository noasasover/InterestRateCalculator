const principalBox = document.querySelector("#principal");
const interestRateBox = document.querySelector("#interest_rate");
const compoundsPerYearBox = document.querySelector("#compounds_per_year");
const totalYearsBox = document.querySelector("#total_years");
const amountEarnedOutput = document.querySelector("#amount_earned");
const totalAmountOutput = document.querySelector("#total_amount");

// Attach event listeners to all input fields
principalBox.addEventListener("input", updateCompoundInterest);
interestRateBox.addEventListener("input", updateCompoundInterest);
compoundsPerYearBox.addEventListener("input", updateCompoundInterest);
totalYearsBox.addEventListener("input", updateCompoundInterest);

function updateCompoundInterest() {
  const principal = Number(principalBox.value);
  const interestRate = Number(interestRateBox.value) / 100;
  const compoundsPerYear = Number(compoundsPerYearBox.value);
  const totalYears = Number(totalYearsBox.value);

  // Only calculate if all inputs have valid numbers
  if (
    principal > 0 &&
    interestRate > 0 &&
    compoundsPerYear > 0 &&
    totalYears > 0
  ) {
    const totalAmount =
      principal *
      (1 + interestRate / compoundsPerYear) ** (compoundsPerYear * totalYears);

    const amountEarned = totalAmount - principal;

    totalAmountOutput.textContent = totalAmount.toFixed(2);
    amountEarnedOutput.textContent = amountEarned.toFixed(2);
  }
}
