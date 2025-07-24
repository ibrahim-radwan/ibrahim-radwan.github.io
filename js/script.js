// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle (can be added if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('mobile-visible');
}

// Current year for footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Tab functionality for publications page
function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}