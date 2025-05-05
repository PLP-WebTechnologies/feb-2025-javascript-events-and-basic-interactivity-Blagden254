// Button Click
document.getElementById("magicButton").addEventListener("click", () => {
  alert("Button clicked!");
  document.body.style.backgroundColor = "#ffeaa7";
});

// Double-click secret
document.getElementById("magicButton").addEventListener("dblclick", () => {
  alert("You found the secret double-click!");
});

// Keypress detection
document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Image Gallery
document.querySelectorAll(".thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    document.getElementById("mainImage").src = thumb.src;
  });
});

// Accordion
document.querySelectorAll(".tab-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach((tab) =>
      tab.classList.remove("active")
    );
    btn.nextElementSibling.classList.add("active");
  });
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  if (!email.includes("@")) {
    feedback.textContent = "Invalid email format.";
    return;
  }
  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }
  feedback.textContent = "Form submitted successfully!";
});
