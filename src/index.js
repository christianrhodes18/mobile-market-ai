// gsap animations
const timeline = gsap.timeline({defaults: {ease: "power2.out" ,duration: 1}});
timeline
    .from('.title-section', {y: '-100%', delay: 0.5})
    .from('.grid-item', {opacity: 0, y: 30, stagger: 0.2}, 1)
    .from('footer', {y: '150%', ease: 'elastic', duration: 1.5}, 1.5)