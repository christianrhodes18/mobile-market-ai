// gsap animations
const timeline = gsap.timeline({defaults: {ease: "power2.out" ,duration: 1}});
timeline
    .from('.title-section', {y: '-100%', delay: 0.5})
    .from('.grid-item', {opacity: 0, y: 30, stagger: 0.2}, 1)
    .from('footer', {y: '150%', ease: 'elastic', duration: 1.5, delay: 0});

// hover animation
gsap.utils.toArray(".grid-item").forEach(elem => {
    let hover = gsap.to(elem, {scale: 1.05, duration: .3, paused: true, ease: "power1.inOut", cursor: "pointer"});
    elem.addEventListener("mouseenter", () => hover.play());
    elem.addEventListener("mouseleave", () => hover.reverse());
});