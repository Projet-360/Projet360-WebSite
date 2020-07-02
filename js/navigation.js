//CHANGEMENTS DES COULEURS sur HTML POUR SECTIONS
$(".link-up").click(function () {
    $(".html").css({
        backgroundColor: '#04498b',
    });
});
$(".link-down").click(function () {
    $(".html").css({
        backgroundColor: ' #5F8C4A',
    });
});
$(".link-left").click(function () {
    $(".html").css({
        backgroundColor: '#413F73',
    });
});
$(".link-right").click(function () {
    $(".html").css({
        backgroundColor: '#D9B589',
    });
});
$(".link-home").click(function () {
    $(".html").css({
        backgroundColor: '#180330',
    });
});
// FIN CHANGEMENTS DES COULEURS POUR SECTIONS


// PLACEMENT DE DEPART
$(".section-up").css({
    top: '-100vh',
    right: '0vw',
    bottom: '100vh',
    left: '0vw',
});

$(".section-down").css({
    top: '100vh',
    right: '0vw',
    bottom: '-100vh',
    left: '0vw',
});

$(".section-left").css({
    top: '0vh',
    right: '100vw',
    bottom: '0vh',
    left: '-100vw',
});

$(".section-right").css({
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
$(".link-home").click(function () {
    $(".section-up").animate({
        top: '-100vh',
        right: '0vw',
        bottom: '100vh',
        left: '0vw',
    }, 900);
    $(".section-down").animate({
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
    $(".section-right").animate({
        top: '0vh',
        right: '-100vw',
        bottom: '0vh',
        left: '100vw',
    }, 900);
    $(".section-left").animate({
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
    $(".section-up").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section-down").animate({
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
    $(".section-right").animate({
        top: '100vh',
        right: '100vw',
        bottom: '0vh',
        left: '100vw',
    }, 900);
    $(".section-left").animate({
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
    $(".section-up").animate({
        top: '-300vh',
        right: '0vw',
        bottom: '200vh',
        left: '0vw',
    }, 900);
    $(".section-down").animate({
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
    $(".section-right").animate({
        top: '-100vh',
        right: '-100vw',
        bottom: '100vh',
        left: '100vw',
    }, 900);
    $(".section-left").animate({
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
    $(".section-up").animate({
        top: '-100vh',
        right: '100vw',
        bottom: '100vh',
        left: '-100vw',
    }, 900);
    $(".section-down").animate({
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
    $(".section-right").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section-left").animate({
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
    $(".section-up").animate({
        top: '-100vh',
        right: '-100vw',
        bottom: '100vh',
        left: '100vw',
    }, 900);
    $(".section-down").animate({
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
    $(".section-right").animate({
        top: '0vh',
        right: '300vw',
        bottom: '0vh',
        left: '200vw',
    }, 900);
    $(".section-left").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $("li.return").animate({
        opacity: '1',
    }, 500);
});
