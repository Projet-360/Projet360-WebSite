window.onload = function () {

    // Rotation de la croix première animation
    TweenMax.fromTo(".A-B-C-D", .5, {
        opacity: 0,
        rotation: 10,
    }, {
        opacity: 1,
        rotation: 0,
        delay: .5,
    })

    // Apparition du texte 
    TweenMax.fromTo(".A-B-C-D-E-F", 1, {
        opacity: 0,
    }, {
        delay: 1.2,
        opacity: 1,
    })

    // Deplacement des textes
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


    document.getElementById("image").addEventListener("click", IMAGE);
    document.getElementById("web").addEventListener("click", WEB);
    document.getElementById("audio").addEventListener("click", AUDIO);
    document.getElementById("video").addEventListener("click", VIDEO);

    var playing = false;

    image = new TimelineMax({
        paused: true,
        onComplete: function () {
            playing = false;
        }
    });
    web = new TimelineMax({
        paused: true,
        onComplete: function () {
            playing = false;
        }
    });
    audio = new TimelineMax({
        paused: true,
        onComplete: function () {
            playing = false;
        }
    });
    video = new TimelineMax({
        paused: true,
        onComplete: function () {
            playing = false;
        }
    });

    image.to(".A-B-C", 1, {
        y: "100%"
    });
    web.to(".A-B-C", 1, {
        x: "-100%"
    });
    audio.to(".A-B-C", 1, {
        x: "100%"
    });
    video.to(".A-B-C", 1, {
        y: "-100%"
    });



    function IMAGE() {
        if (!playing) {
            playing = true;
            image.progress(0).play();
        }
    }

    function WEB() {
        if (!playing) {
            playing = true;
            web.progress(0).play();
        }
    }

    function AUDIO() {
        if (!playing) {
            playing = true;
            audio.progress(0).play();
        }
    }

    function VIDEO() {
        if (!playing) {
            playing = true;
            video.progress(0).play();
        }
    }

}