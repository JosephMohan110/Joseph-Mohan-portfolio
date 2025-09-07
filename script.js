
 // Navigation toggle
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
        
        document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        }));
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
        
        // Scroll animation for sections
        function checkScroll() {
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const triggerBottom = window.innerHeight * 0.8;
                
                if (sectionTop < triggerBottom) {
                    section.classList.add('visible');
                }
            });
        }
        
        // Initial check and add scroll listener
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);
        
        
        
    //     // Certificate modal functionality
    //     const certificateCards = document.querySelectorAll('.certificate-card');
    //     const modal = document.getElementById('certificateModal');
    //     const modalImage = document.getElementById('modalImage');
    //     const closeModal = document.getElementById('closeModal');
        
    //     // Store the current scroll position
    //     let scrollPosition = 0;
        
    //     certificateCards.forEach(card => {
    //         card.addEventListener('click', () => {
    //             // Store current scroll position
    //             scrollPosition = window.pageYOffset;
                
    //             const certificateSrc = card.getAttribute('data-certificate');
    //             modalImage.src = certificateSrc;
    //             modal.classList.add('show');
                
    //             // Prevent background scrolling
    //             document.body.style.overflow = 'hidden';
    //             document.body.style.position = 'fixed';
    //             document.body.style.top = `-${scrollPosition}px`;
    //             document.body.style.width = '100%';
    //         });
    //     });
        
    //     closeModal.addEventListener('click', () => {
    //         modal.classList.remove('show');
            
    //         // Restore background scrolling
    //         document.body.style.overflow = '';
    //         document.body.style.position = '';
    //         document.body.style.top = '';
    //         document.body.style.width = '';
            
    //         // Restore scroll position
    //         window.scrollTo(0, scrollPosition);
    //     });
        
    //     // Close modal when clicking outside the image
    //     modal.addEventListener('click', (e) => {
    //         if (e.target === modal) {
    //             modal.classList.remove('show');
                
    //             // Restore background scrolling
    //             document.body.style.overflow = '';
    //             document.body.style.position = '';
    //             document.body.style.top = '';
    //             document.body.style.width = '';
                
    //             // Restore scroll position
    //             window.scrollTo(0, scrollPosition);
    //         }
    //     });
        
    //     // Close modal with Escape key
    //     document.addEventListener('keydown', (e) => {
    //         if (e.key === 'Escape' && modal.classList.contains('show')) {
    //             modal.classList.remove('show');
                
    //             // Restore background scrolling
    //             document.body.style.overflow = '';
    //             document.body.style.position = '';
    //             document.body.style.top = '';
    //             document.body.style.width = '';
                
    //             // Restore scroll position
    //             window.scrollTo(0, scrollPosition);
    //         }
    //     });

         
    // </script>

    
        // Function to animate skill bars
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }
        
        // Initialize animation when page loads
        window.addEventListener('load', animateSkillBars);
        
        // Add hover effect for skill items
        const skills = document.querySelectorAll('.skill');
        skills.forEach(skill => {
            skill.addEventListener('mouseenter', () => {
                skill.style.transform = 'translateX(5px)';
                skill.style.transition = 'transform 0.3s ease';
            });
            
            skill.addEventListener('mouseleave', () => {
                skill.style.transform = 'translateX(0)';
            });
        });
    

    //     AOS JS + Custom Script
    // <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> 
    // <script>
    //   AOS.init({
    //     duration: 1000,
    //     easing: 'ease-in-out',
    //     once: true
    //   });

    //   // Open fullscreen overlay
    //   function openFullscreen(img) {
    //     const overlay = document.getElementById('overlay');
    //     const fullscreenImg = document.getElementById('fullscreen-img');
    //     fullscreenImg.src = img.src;
    //     overlay.classList.add('show');
    //   }

    //   // Close fullscreen overlay
    //   function closeFullscreen() {
    //     const overlay = document.getElementById('overlay');
    //     overlay.classList.remove('show');
    //   }
