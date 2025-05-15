
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '4rem';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        navLinks.style.zIndex = '10';
      }
    });
  }
  
  // Handle window resize to reset mobile menu styles
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navLinks) {
      navLinks.style = '';
    }
  });
  
  // Search functionality
  const searchBox = document.querySelector('.search-box input');
  if (searchBox) {
    searchBox.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const searchTerm = searchBox.value.trim();
        if (searchTerm) {
          window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
        }
      }
    });
  }
});
