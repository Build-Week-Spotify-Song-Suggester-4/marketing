//const { TweenLite } = require("gsap");

//const { TweenLite } = require("gsap");

//const { TweenLite } = require("gsap");

var tl = gsap.timeline();
// var tween2 = gsap.timeline();

// tween2.add(
//     TweenLite.from(".how img", {duration:5 , x:-800, rotation:360, ease:"bounce", delay:3})

// );
// tween.add(

//     TweenLite.from(".logo" , 2,{duration:2, y:400, border: "1rem solid #FFFFFF", 
//      borderRadius: "50%", ease:"bounce"}),
    
//     TweenLite.from("a", 2,{duration:1, opacity:0, 
//         scale: 0.3, stagger:0.25, ease:"back"

//     }),

//     TweenLite.from("h1", 2,{duration:1, x:-670, ease:"expo" }),

//     TweenLite.from("p", 2,{duration:1, x:1000, ease: "expo"}),

//     TweenLite.from(".firstcolor h2", {duration:1, x:1000, ease: "expo"}),

//     TweenLite.from(".firstcolor img", {duration:2 , x:-800, rotation:360}),

//     // TweenLite.from(".how img", {duration:3 , x:-800, rotation:360, ease:"bounce", delay:3})
//      );

// const controller = new ScrollMagic.Controller();
// //const controller2 = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
//     triggerElement: 'a' ,
//     duration: 2000

// })


// .setTween(tween)
// .addIndicators()
// .addTo(controller);

// const scene2 = new ScrollMagic.Scene({
//     triggerElement:(".how"),
//     duration: 2000
// })

// controller.addScene(scene2);



tl.from(".logo" , {duration:2, y:400, border: "1rem solid #FFFFFF", 
borderRadius: "50%", ease:"bounce"});

tl.from("a", {duration:0.1, opacity:0, scale: 0.3, stagger:0.25, ease:"back" });

tl.from("h1", {duration:1, x:-2000, ease:"expo" })

tl.from("p", {duration:1, x:2000, ease: "expo"})

tl.from(".firstcolor h2", {duration:1, x:2000, ease: "expo"})

tl.from(".firstcolor img", {duration:2 , x:-2800, rotation:360})

tl.from(".how img", {duration:3 , x:-2800, rotation:360, ease:"bounce", delay:3});