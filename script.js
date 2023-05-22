// Smooth scrolling for table of contents links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar a");

  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }
});
