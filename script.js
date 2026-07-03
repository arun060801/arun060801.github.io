// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        gsap.to(cursorDot, {
            x: posX,
            y: posY,
            duration: 0.1,
            ease: "power2.out"
        });

        // Outline has slight delay
        gsap.to(cursorOutline, {
            x: posX,
            y: posY,
            duration: 0.5,
            ease: "power2.out"
        });
    });
}

// Lenis Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Integrate Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Loading Screen Animation
const initLoader = () => {
    const loader = document.querySelector('.loader');
    const loaderBar = document.querySelector('.loader-bar');
    const loaderPercentage = document.querySelector('.loader-percentage');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress > 100) progress = 100;
        
        loaderBar.style.width = `${progress}%`;
        loaderPercentage.textContent = `${progress}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                gsap.to(loader, {
                    yPercent: -100,
                    duration: 1,
                    ease: "power4.inOut",
                    onComplete: initHeroAnimations
                });
            }, 500);
        }
    }, 100);
};

// Hero Animations (run after loader)
const initHeroAnimations = () => {
    // Typewriter effect in terminal
    const textToType = "cat profile.txt";
    const typeWriterEl = document.getElementById("typewriter");
    const outputEl = document.getElementById("hero-output");
    
    let i = 0;
    const typeWriter = () => {
        if (i < textToType.length) {
            typeWriterEl.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 50 + Math.random() * 50);
        } else {
            setTimeout(() => {
                outputEl.classList.remove('hidden');
                
                // Animate output lines
                gsap.fromTo(".output-line", 
                    { opacity: 0, x: -10 },
                    { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
                );
                
                // Trigger other hero animations
                triggerRevealAnimations();
            }, 400);
        }
    };
    
    setTimeout(typeWriter, 500);
};

// Scroll Animations
const triggerRevealAnimations = () => {
    // Split text for hero title
    const heroTitle = new SplitType('.hero-title', { types: 'chars' });
    
    gsap.fromTo(heroTitle.chars, 
        { opacity: 0, y: 50, rotateX: -90 },
        { 
            opacity: 1, 
            y: 0, 
            rotateX: 0, 
            stagger: 0.05, 
            duration: 0.8, 
            ease: "back.out(1.7)",
            clearProps: "all"
        }
    );

    // Fade in elements
    gsap.utils.toArray('.reveal-fade').forEach(elem => {
        gsap.fromTo(elem,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Slide up elements
    gsap.utils.toArray('.reveal-slide-up').forEach(elem => {
        gsap.fromTo(elem,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
};

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Start Loader
window.addEventListener('load', initLoader);
