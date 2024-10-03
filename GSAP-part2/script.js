// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })



// // Using scrollTrigger 

// gsap.from("#page2 #box", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     rotate: 720,
//    // scrollTrigger: "#page2 #box"
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 30%",
//         scrub: 2, // 'scrub' is used to make animation completely dependent on scrolling, and value of scrub shows the smooth execution of the animation.
//         pin: true
//     }
// })



// gsap.from("#page2 h1", {
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%"
//     }
// })


// gsap.from("#page2 h2", {
//     opacity: 0,
//     duration: 2,
//     x: -500,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         markers: true,
//         start: "top 50%"
//     }
// })



gsap.to("#page2 h1", {
    transform: "TranslateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true
    }
})