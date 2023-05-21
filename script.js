// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Function to handle button click
function handleClick() {
  const button = document.getElementById('toggle-dark-mode');
  button.addEventListener('click', toggleDarkMode);
}

// Function to display a message on page load
function showMessage() {
  const message = 'Welcome to the Fancy Website!';
  console.log(message);
}

// Call the functions on page load
document.addEventListener('DOMContentLoaded', function () {
  handleClick();
  showMessage();
});
