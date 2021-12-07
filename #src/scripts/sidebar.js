function toggleSidebar(e) {
  sidebar.classList.toggle('active');
  toggleSidebarBtn.classList.toggle('active');
}
const toggleSidebarBtn = document.getElementById('sidebar-toggle-btn');

const sidebar = document.querySelector('.sidebar');

toggleSidebarBtn.addEventListener('click', toggleSidebar);