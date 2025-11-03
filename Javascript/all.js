// Get the toggle button and sidebar
const toggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

// When toggle is clicked, show/hide sidebar
toggle.onclick = () => {
  sidebar.classList.toggle("active");
};

// Close sidebar when any link is clicked
document.querySelectorAll(".close-sidebar").forEach(link => {
  link.onclick = () => {
    sidebar.classList.remove("active");
  };
});