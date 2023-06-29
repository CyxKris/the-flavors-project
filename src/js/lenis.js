const lenis = new Lenis();

lenis.on("scroll", (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// document.addEventListener('click', function (event) {
//     if (event.target.classList.contains('smooth-scroll-anchor')) {
//         event.preventDefault(); // Prevent default anchor tag behavior

//         var target = event.target.getAttribute('href'); // Get the target element ID


//         lenis.scrollTo(target);
//     }
// });

