// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.from('.hero-title', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.5,
    ease: 'power2.out'
});

gsap.from('.hero-subtitle', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.8,
    ease: 'power2.out'
});

// About section animation
gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about-content',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    opacity: 0,
    y: 50
});

// Project Cards Animation
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.project-grid',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: {
        amount: 0.4,
        from: "start"
    },
    ease: 'power3.out'
});

// Project Card Hover Animation
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        });
    });
});

// Navbar scroll animation
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Custom cursor animation
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// Add cursor effects on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// Parallax effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    window.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 20;
        const yPercent = (y / rect.height - 0.5) * 20;
        
        gsap.to(card, {
            rotationY: xPercent,
            rotationX: -yPercent,
            duration: 0.5,
            ease: 'power1.out'
        });
    });
});

// Text splitting animation for hero title
const heroTitle = document.querySelector('.hero-title');
const text = heroTitle.textContent;
heroTitle.innerHTML = '';
text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    heroTitle.appendChild(span);
    
    gsap.from(span, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.5 + (i * 0.05),
        ease: 'back.out'
    });
});

// Magnetic effect for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / 10;
        const deltaY = (y - centerY) / 10;
        
        gsap.to(button, {
            x: deltaX,
            y: deltaY,
            duration: 0.3
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.3
        });
    });
});

// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: target,
                offsetY: 70
            },
            ease: 'power2.inOut'
        });
    });
});

// Timeline animations
gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top center+=100',
        end: 'bottom center',
        scrub: 1
    },
    stagger: 0.3,
    opacity: 0,
    x: function(index) {
        return index % 2 === 0 ? -100 : 100;
    },
    duration: 1
});

// Social links animation
gsap.from('.social-links a', {
    duration: 0.8,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    delay: 1
});

// Make sure ScrollTrigger animations start with elements visible
gsap.set(['.about-content', '.project-card', '.timeline-item'], {
    opacity: 1
});

// Update other ScrollTrigger animations to use 'from' instead of current opacity
gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about-content',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1
});

// Navbar link hover effect
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            y: -2,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Logo dot animation
gsap.to('.logo-dot', {
    y: -3,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate menu bars
    const bars = menuToggle.querySelectorAll('.bar');
    if (navLinks.classList.contains('active')) {
        gsap.to(bars[0], { rotate: 45, y: 8 });
        gsap.to(bars[1], { opacity: 0 });
        gsap.to(bars[2], { rotate: -45, y: -8 });
    } else {
        gsap.to(bars[0], { rotate: 0, y: 0 });
        gsap.to(bars[1], { opacity: 1 });
        gsap.to(bars[2], { rotate: 0, y: 0 });
    }
});

// Footer animations
gsap.from('.footer-section', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom-=100'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

// Clean up existing animations
gsap.from('.hero-title', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.hero-subtitle', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power4.out'
});

// Smooth reveal for sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// About section text animation
gsap.from('.about-text p', {
    scrollTrigger: {
        trigger: '.about-text',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    opacity: 0,
    y: 30,
    ease: 'power3.out'
});

// Section headers animation
gsap.from('.section-header', {
    scrollTrigger: {
        trigger: '.section-header',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    opacity: 0,
    y: 30,
    ease: 'power3.out'
});

// Add hover animation for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Add this new simplified version:

document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Remove Skills Categories Animation
    // Remove this section:
    /*
    gsap.from('.skills-category', {
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top center+=100',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // Remove Skills Animation
    gsap.from('.skill', {
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top center+=100',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.5,
        stagger: {
            amount: 0.6,
            from: "center"
        },
        ease: 'back.out(1.7)'
    });
    */

    // Remove Hover Animation
    document.querySelectorAll('.skill').forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            gsap.to(skill, {
                scale: 1.1,
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        skill.addEventListener('mouseleave', () => {
            gsap.to(skill, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Initialize project card click counter
    const initProjectClickCounter = () => {
        const clickCountElement = document.getElementById('click-count');
        let clickCount = localStorage.getItem('projectClickCount') || 0;
        document.getElementById('click-count').textContent = clickCount;

        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                clickCount++;
                localStorage.setItem('clickCount', clickCount);
                document.getElementById('click-count').textContent = clickCount;
            });
        });
    };

    // Call the function when the document is loaded
    initProjectClickCounter();

    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Project cards animation
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.project-grid',
            start: 'top center+=100',
            toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: {
            amount: 0.3,
            from: "start"
        },
        ease: 'power3.out'
    });

    // Project tech stack animation
    gsap.from('.project-tech span', {
        scrollTrigger: {
            trigger: '.project-grid',
            start: 'top center+=100',
            toggleActions: 'play none none none'
        },
        y: 10,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Project hover animations
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            });
        });
    });
}); 