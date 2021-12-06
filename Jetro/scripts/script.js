'use strict'

let doc = document;
let innerWindowWidth = () => window.innerWidth;
let innerWindowHeight = () => window.innerHeight;


// ? If you see an error here, it's normal.
function showOrHideFullscreenNav(e) {
  let sbWidth = innerWindowWidth() - doc.querySelector('html').clientWidth;

  if (fsNavmenu !== undefined) {
    burger.classList.toggle('active');

    body.classList.toggle('fixed');
    body.style.paddingRight = sbWidth + 'px';

    header.classList.toggle('fixed-header');
    header.style.paddingRight = sbWidth + 'px';

    fsNavmenu.classList.toggle('active');
    fsMenuIsActive = !fsMenuIsActive;
  }
}
let header = doc.querySelector('header');
let body = doc.querySelector('body');

const burger = doc.getElementById('burgerButton');
const fsNavmenu = doc.querySelector('.fullscreen-navmenu');
burger.addEventListener('click', showOrHideFullscreenNav);

let fsMenuIsActive = false;;
  

function toggleSidebar(e) {
  sidebar.classList.toggle('active');
  toggleSidebarBtn.classList.toggle('active');
}
const toggleSidebarBtn = document.getElementById('sidebar-toggle-btn');

const sidebar = document.querySelector('.sidebar');

toggleSidebarBtn.addEventListener('click', toggleSidebar);