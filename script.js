
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    opacity: 0,
    duration: 1.5,
    ease: Power2
});

Shery.textAnimate("#headings h1", {
    style: 1,
    y: 10,
    delay: 0.2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.to(".anim2", {
    y: 50,
    opacity: 1,
    ease: Expo,
    duration: 1.5,
    stagger: .3
});

Shery.imageEffect("#imgntxt img", {
    style: 3,
    config: {"uFrequencyX":{"value":22.9,"range":[0,100]},"uFrequencyY":{"value":22.9,"range":[0,100]},"uFrequencyZ":{"value":13.74,"range":[0,100]},"geoVertex":{"range":[1,64],"value":30.82},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug: true,
});

Shery.imageEffect(".imgff img", {
    style: 4,
    config: {"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug: true
})

gsap.from("#susimagewrapper img", {
    z: "-50",
    opacity: 0,
    duration: 5,
    ease: Expo,
});

Shery.imageEffect("#bimg", {
    style: 5,
    config: {"a":{"value":0.46,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.146267999838121},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.11,"range":[1,15]},"durationOut":{"value":0.59,"range":[0.1,5]},"durationIn":{"value":2.38,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.08,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.03,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey: true
});

document.querySelector("#ftxt button")
.addEventListener("mouseover", function(){
    gsap.to("#future video", {
        opacity: 1,
        duration: 1.5,
        ease: Power4
    })
})

document.querySelector("#ftxt button")
.addEventListener("mouseleave", function(){
    gsap.to("#future video", {
        opacity: 0.1,
        duration: 1.5,
        ease: Power4
    })
})


