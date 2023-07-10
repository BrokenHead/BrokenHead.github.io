
const flightPath = {
    corviness: 1,

    values:[
        {x: -15, y: 20},
        {x: -40, y: 500}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".choc_piece", 0.7 ,{
        bezier: flightPath,
        ease: Power1.easeIn,
        rotation:270
    })
)



const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
 triggerElement: '.animation',
 duration: 500,
 triggerHook:0
})
.setTween(tween)
.addIndicators()
.setPin(".animation")
.addTo(controller)


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        }

    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))


const observer_portf = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show_portf")
        }

    })
})

const hiddenElements_portf = document.querySelectorAll(".hidden_portf")
hiddenElements_portf.forEach((el) => observer_portf.observe(el))