
const flightPath = {
    corviness: 1,

    values: [
        { x: -15, y: 20 },
        { x: -40, y: 500 }
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".choc_piece", 0.7, {
        bezier: flightPath,
        ease: Power1.easeIn,
        rotation: 270
    })
)



const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 500,
    triggerHook: 0
})
    .setTween(tween)
    // .addIndicators()
    .setPin(".animation")
    .addTo(controller)




const clack_timeline = {
    values: [
        { opacity: 1 },
        { opacity: 0.5 },
        { opacity: 0 }

    ]
}

const tween2 = new TimelineLite();

tween2.add(
    TweenLite.to(".choc_clack", 0.8, {
        bezier: clack_timeline


    })
)

const controller2 = new ScrollMagic.Controller();

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".clack_start",
    duration: 200,
    triggerHook: 0
})
    .setTween(tween2) // trigger a TweenMax.to tween
    // .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
    .addTo(controller2);









// showing/hiding elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }

    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))


const observer_portf = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show_portf")
        }

    })
})

const hiddenElements_portf = document.querySelectorAll(".hidden_portf")
hiddenElements_portf.forEach((el) => observer_portf.observe(el))


const observer_icon = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show_icon")
        }

    })
})

const hiddenElements_icon = document.querySelectorAll(".hidden_icon")
hiddenElements_icon.forEach((el) => observer_icon.observe(el))