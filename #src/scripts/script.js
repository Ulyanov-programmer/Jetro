'use strict'

let doc = document;
let innerWindowWidth = () => window.innerWidth;
let innerWindowHeight = () => window.innerHeight;


// ? If you see an error here, it's normal.
@@include('_fsNavmenu.js');
  

function toggleSidebar(e) {
  sidebar.classList.toggle('active');
  toggleSidebarBtn.classList.toggle('active');
}
const toggleSidebarBtn = document.getElementById('sidebar-toggle-btn');

const sidebar = document.querySelector('.sidebar');

toggleSidebarBtn.addEventListener('click', toggleSidebar);