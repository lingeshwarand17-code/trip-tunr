document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar & Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const navButtonsMobile = document.querySelector('.nav-buttons-mobile');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-menu-active');
            
            // Toggle icon between bars and times
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('nav-menu-active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
                if(navButtonsMobile) navButtonsMobile.style.display = 'flex';
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
                if(navButtonsMobile) navButtonsMobile.style.display = 'none';
            }
        });
    }

    // 3. Wishlist Heart Toggle Animation
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent navigating to trip details
            e.stopPropagation();
            
            btn.classList.toggle('active');
            const icon = btn.querySelector('i');
            
            if (btn.classList.contains('active')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                
                // Add a small pop animation
                btn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 200);
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        });
    });

    // 4. Search Form Button Simulation
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const location = document.getElementById('searchLocation').value;
            
            searchBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Searching...';
            
            // Simulate network request
            setTimeout(() => {
                window.location.href = `trips.html${location ? '?q=' + encodeURIComponent(location) : ''}`;
            }, 800);
        });
    }
});
