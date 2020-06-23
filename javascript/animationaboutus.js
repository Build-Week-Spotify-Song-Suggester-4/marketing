var awesome = gsap.timeline();


awesome.from(".first", {duration:2 , x:-1200, rotation:360, delay: 1, ease:"bounce"});
awesome.from(".two", {duration:2 , y:-4000, rotation:360,delay:3, ease:"bounce"});
awesome.from(".third", {duration:2 , x:-1200, rotation:360,delay:3, ease:"elastic"});