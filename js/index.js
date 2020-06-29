window.onload = function () {

    TweenMax.fromTo(".A-B-C-D", .5, {
        opacity: 0,
        rotation: 10,
    }, {
        opacity: 1,
        rotation: 0,
        delay: .5,
    })

    TweenMax.fromTo(".A-B-C-D-E-F", 1, {        
        opacity: 0,
    }, {
        delay: 1.2,
        opacity: 1,
    })


    TweenMax.fromTo(".image", 2, {        
        y: -50,
    }, {
        delay: 1.2,
        y: 0,
    })
    TweenMax.fromTo(".web", 2, {        
        x: 50,
    }, {
        delay: 1.2,
        x: 0,
    })
    TweenMax.fromTo(".audio", 2, {        
        x: -50,
    }, {
        delay: 1.2,
        x: 0,
    })
    TweenMax.fromTo(".video", 2, {        
        y: 50,
    }, {
        delay: 1.2,
        y: 0,
    })


}