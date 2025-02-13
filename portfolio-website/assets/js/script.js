const darkModeToggle = document.getElementById("darkModeToggle");
const toggleText = document.getElementById("toggleText");

// Check localStorage for theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleText.textContent = "☀️ Light Mode";
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleText.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleText.textContent = "🌙 Dark Mode";
    }
});
