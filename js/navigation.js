//CHANGEMENTS DES COULEURS sur HTML POUR SECTIONS
$(".link-up").click(function () {
    $("main").css({
        backgroundColor: '#04498b',
    });
});
$(".link-down").click(function () {
    $("main").css({
        backgroundColor: '#8b6804',
    });
});
$(".link-left").click(function () {
    $("main").css({
        backgroundColor: '#51048b',
    });
});
$(".link-right").click(function () {
    $("main").css({
        backgroundColor: '#048b34',
    });
});
$(".link-center").click(function () {
    $("main").css({
        backgroundColor: '#180330',
    });
});
// FIN CHANGEMENTS DES COULEURS POUR SECTIONS


// PLACEMENT DE DEPART
$(".section.image").css({
    top: '-100vh',
    right: '0vw',
    bottom: '100vh',
    left: '0vw',
});

$(".section.video").css({
    top: '100vh',
    right: '0vw',
    bottom: '-100vh',
    left: '0vw',
});

$(".section.audio").css({
    top: '0vh',
    right: '100vw',
    bottom: '0vh',
    left: '-100vw',
});

$(".section.web").css({
    top: '0vh',
    right: '-100vw',
    bottom: '0vh',
    left: '100vw',
});

$(".section-center").css({
    top: '0vh',
    right: '0vw',
    bottom: '0vh',
    left: '0vw',
});
// FIN PLACEMENT DE DEPART

// BUTTON RETURN
$(".link-center").click(function () {
    $(".section.image").animate({
        top: '-100vh',
        right: '0vw',
        bottom: '100vh',
        left: '0vw',
    }, 900);
    $(".section.video").animate({
        top: '100vh',
        right: '0vw',
        bottom: '-100vh',
        left: '0vw',
    }, 900);
    $(".section-center").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section.web").animate({
        top: '0vh',
        right: '-100vw',
        bottom: '0vh',
        left: '100vw',
    }, 900);
    $(".section.audio").animate({
        top: '0vh',
        right: '100vw',
        bottom: '0vh',
        left: '-100vw',
    }, 900);
    $("li.return").animate({
        opacity: '0',
    }, 500);
});

// BUTTON HAUT
$(".link-up").click(function () {
    $(".section.image").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section.video").animate({
        top: '200vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section-center").animate({
        top: '100vh',
        right: '0vw',
        bottom: '-100vh',
        left: '0vw',
    }, 900);
    $(".section.web").animate({
        top: '100vh',
        right: '100vw',
        bottom: '0vh',
        left: '100vw',
    }, 900);
    $(".section.audio").animate({
        top: '100vh',
        bottom: '-100vh',
        right: '100vw',
        left: '-100vw',
    }, 900);
    $("li.return").animate({
        opacity: '1',
    }, 500);
});

// BUTTON BAS
$(".link-down").click(function () {
    $(".section.image").animate({
        top: '-300vh',
        right: '0vw',
        bottom: '200vh',
        left: '0vw',
    }, 900);
    $(".section.video").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section-center").animate({
        top: '-100vh',
        right: '0vw',
        bottom: '100vh',
        left: '0vw',
    }, 900);
    $(".section.web").animate({
        top: '-100vh',
        right: '-100vw',
        bottom: '100vh',
        left: '100vw',
    }, 900);
    $(".section.audio").animate({
        top: '-100vh',
        bottom: '100vh',
        right: '100vw',
        left: '-100vw',
    }, 900);
    $("li.return").animate({
        opacity: '1',
    }, 500);
});

// BUTTON DROIT
$(".link-right").click(function () {
    $(".section.image").animate({
        top: '-100vh',
        right: '100vw',
        bottom: '100vh',
        left: '-100vw',
    }, 900);
    $(".section.video").animate({
        top: '100vh',
        right: '100vw',
        bottom: '-100vh',
        left: '-100vw',
    }, 900);
    $(".section-center").animate({
        top: '0vh',
        right: '100vw',
        bottom: '0vh',
        left: '-100vw',
    }, 900);
    $(".section.web").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section.audio").animate({
        top: '0vh',
        bottom: '0vh',
        right: '200vw',
        left: '-300vw',
    }, 900);
    $("li.return").animate({
        opacity: '1',
    }, 500);
});

// BUTTON GAUCHE
$(".link-left").click(function () {
    $(".section.image").animate({
        top: '-100vh',
        right: '-100vw',
        bottom: '100vh',
        left: '100vw',
    }, 900);
    $(".section.video").animate({
        top: '100vh',
        right: '-100vw',
        bottom: '-100vh',
        left: '100vw',
    }, 900);
    $(".section-center").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '100vw',
    }, 900);
    $(".section.web").animate({
        top: '0vh',
        right: '300vw',
        bottom: '0vh',
        left: '200vw',
    }, 900);
    $(".section.audio").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $("li.return").animate({
        opacity: '1',
    }, 500);
});
