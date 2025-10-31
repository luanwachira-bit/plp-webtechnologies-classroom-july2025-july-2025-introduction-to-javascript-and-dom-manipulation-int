// ==================================================
// 🎯 PART 1: JavaScript Basics — Variables, Conditionals
// ==================================================
document.getElementById('checkRiskBtn').addEventListener('click', function () {
  const ageInput = document.getElementById('ageInput');
  const riskResult = document.getElementById('riskResult');
  const age = Number(ageInput.value);

  // Validate input
  if (isNaN(age) || age < 18 || age > 100) {
    riskResult.textContent = "Please enter a valid age between 18 and 100.";
    riskResult.style.color = "red";
    return;
  }

  // Conditional logic
  let riskProfile;
  if (age < 30) {
    riskProfile = "Aggressive (High Risk, High Reward)";
  } else if (age < 50) {
    riskProfile = "Moderate (Balanced Growth & Safety)";
  } else {
    riskProfile = "Conservative (Low Risk, Capital Preservation)";
  }

  riskResult.textContent = `Recommended Risk Profile: ${riskProfile}`;
  riskResult.style.color = "green";
});

// ==================================================
// ❤️ PART 2: JavaScript Functions — Reusability
// ==================================================

// Function 1: Calculate future investment value
function calculateFutureValue(principal, years, rate = 0.05) {
  return principal * Math.pow(1 + rate, years);
}

// Function 2: Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

// Use functions on button click
document.getElementById('calculateBtn').addEventListener('click', function () {
  const amount = parseFloat(document.getElementById('investmentAmount').value);
  const years = parseInt(document.getElementById('years').value);
  const resultEl = document.getElementById('calculationResult');

  if (isNaN(amount) || isNaN(years) || amount <= 0 || years <= 0) {
    resultEl.textContent = "Please enter valid numbers.";
    resultEl.style.color = "red";
    return;
  }

  const futureValue = calculateFutureValue(amount, years);
  resultEl.innerHTML = `Future Value after ${years} years:<br><strong>${formatCurrency(futureValue)}</strong>`;
  resultEl.style.color = "green";
});

// ==================================================
// 🔁 PART 3: JavaScript Loops — Repetition
// ==================================================

const financialGoals = [
  "Build an emergency fund",
  "Pay off high-interest debt",
  "Save for retirement",
  "Invest in diversified assets",
  "Create a budget and track spending"
];

// Loop 1: for loop — display goals
document.getElementById('generateGoalsBtn').addEventListener('click', function () {
  const list = document.getElementById('goalsList');
  list.innerHTML = ''; // Clear previous

  for (let i = 0; i < financialGoals.length; i++) {
    const li = document.createElement('li');
    li.textContent = financialGoals[i];
    list.appendChild(li);
  }
});

// Loop 2: forEach — log goals to console (for demonstration)
console.log("Financial Goals (logged via forEach):");
financialGoals.forEach((goal, index) => {
  console.log(`${index + 1}. ${goal}`);
});

// ==================================================
// 🌐 PART 4: DOM Manipulation — Interactivity
// ==================================================

// DOM Interaction 1: Toggle dark mode
document.getElementById('toggleThemeBtn').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  this.textContent = document.body.classList.contains('dark-mode')
    ? 'Switch to Light Mode'
    : 'Toggle Dark Mode';
});

// DOM Interaction 2: Add dynamic testimonial
document.getElementById('addTestimonialBtn').addEventListener('click', function () {
  const container = document.getElementById('testimonialContainer');
  container.style.display = 'block';

  // Create new testimonial element
  const testimonial = document.createElement('p');
  testimonial.textContent = `"FinTrust helped me retire 5 years early!" – Satisfied Client`;
  testimonial.style.fontStyle = 'italic';
  testimonial.style.marginTop = '0.5rem';

  container.innerHTML = '<strong>New Testimonial:</strong>';
  container.appendChild(testimonial);
});

// DOM Interaction 3: Update footer dynamically (extra)
const footer = document.querySelector('.site-footer p');
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} FinTrust Financial Services — Empowering Your Future`;
