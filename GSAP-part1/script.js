// gsap.to("#box1", {  // 'to' means initial to final position
//     x: 1100,
//     duration: 1.5,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "red",
//     // borderRadius: "50%",
//     // scale: 0.5,
//     // repeat: 2, // number of times you want it to repeat extra. For infinite times, it's value is- '-1'
//     yoyo: true // to rebound it on the same path
// })

// gsap.to("#box2", { // 'from' means final to initial position
//     x: 1100,
//     duration: 1.5,
//     delay: 2.5,
//     backgroundColor: "yellow"
// })

// gsap.from("h1", {
//     opacity: 0,
//     color: "red",
//     y: 30,
//     duration: 1,
//     delay: 1,
//     stagger: 0.3 // same name ke text ko one-by-one chalane ke liye use aata hai
// })

// gsap.to("#box3", {
//     x: 1100,
//     duration: 1.5,
//     delay: 4,
//     borderRadius: "50%",
//     scale: 0.5
// })


//  above written code is Asynchronous - means sab cheezein alg-alag chal rhi hai

// To make it Synchronous, timeline is used.

var tl1 = gsap.timeline()

tl1.to("#box1", {
    x: 1200,
    duration: 1.5,
     delay: 1,
     rotate: 360,
     backgroundColor: "red",
})

tl1.to("#box2", {  // no need to add any delay, due to timeline it will execute after box1
    x: 1200,
    duration: 1.5,
    backgroundColor: "yellow"
})

tl1.to("#box3", {
    x: 1200,
    duration: 1.5,
    borderRadius: "50%",
    scale: 0.5
})



var tl2 = gsap.timeline()

tl2.from("h2", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})

tl2.from("h4", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})

tl2.from("h1", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    scale: 0.2
})