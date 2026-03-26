// ================= THEME TOGGLE =================

// Get the toggle switch element
const themeToggleBtn = document.getElementById("themeToggle");

// Retrieve saved theme preference from localStorage
const savedTheme = localStorage.getItem("theme");

// If the saved theme is "dark", apply dark mode on page load
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggleBtn.checked = true;
}

// Listen for user interaction with the toggle switch
themeToggleBtn.addEventListener("change", () => {

  // Toggle the "dark" class on the body
  document.body.classList.toggle("dark");

  // Save the current theme preference to localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// ================= CONTACT FORM =================

// Get the contact form element
const contactForm = document.getElementById("contactForm");

// Get the paragraph element where feedback message will appear
const formMessage = document.getElementById("formMessage");

// Listen for form submission
contactForm.addEventListener("submit", (event) => {

  // Prevent default form submission (no backend required)
  event.preventDefault();

  // Display confirmation message
  formMessage.textContent = "Message submitted successfully.";

  // Reset the form fields
  contactForm.reset();
});
// ================= PROJECT SEARCH FILTER =================

const searchInput = document.getElementById("searchInput");

const projectCards = document.querySelectorAll(".project-card");

const noResultsMessage = document.getElementById("noResultsMessage");

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase();

    let visibleCount = 0;

    projectCards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if (text.includes(searchText)) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }

    });

    if (visibleCount === 0) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }

});


