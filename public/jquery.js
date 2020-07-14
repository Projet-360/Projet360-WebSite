//CHANGEMENTS DES COULEURS sur HTML POUR SECTIONS
jQuery(".link-up").click(function () {
    jQuery("main").css({
        backgroundColor: '#04498b',
    });
});
jQuery(".link-down").click(function () {
    jQuery("main").css({
        backgroundColor: '#8b6804',
    });
});
jQuery(".link-left").click(function () {
    jQuery("main").css({
        backgroundColor: '#51048b',
    });
});
jQuery(".link-right").click(function () {
    jQuery("main").css({
        backgroundColor: '#048b34',
    });
});
jQuery(".link-center").click(function () {
    jQuery("main").css({
        backgroundColor: '#180330',
    });
});
// FIN CHANGEMENTS DES COULEURS POUR SECTIONS


// PLACEMENT DE DEPART
jQuery(".section.image").css({
    top: '-100vh',
    right: '0vw',
    bottom: '100vh',
    left: '0vw',
});

jQuery(".section.video").css({
    top: '100vh',
    right: '0vw',
    bottom: '-100vh',
    left: '0vw',
});

jQuery(".section.audio").css({
    top: '0vh',
    right: '100vw',
    bottom: '0vh',
    left: '-100vw',
});

jQuery(".section.web").css({
    top: '0vh',
    right: '-100vw',
    bottom: '0vh',
    left: '100vw',
});

jQuery(".section-center").css({
    top: '0vh',
    right: '0vw',
    bottom: '0vh',
    left: '0vw',
});
// FIN PLACEMENT DE DEPART

// BUTTON RETURN
jQuery(".link-center").click(function () {
    jQuery(".section.image").animate({
        top: '-100vh',
        right: '0vw',
        bottom: '100vh',
        left: '0vw',
    }, 900);
    jQuery(".section.video").animate({
        top: '100vh',
        right: '0vw',
        bottom: '-100vh',
        left: '0vw',
    }, 900);
    jQuery(".section-center").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    jQuery(".section.web").animate({
        top: '0vh',
        right: '-100vw',
        bottom: '0vh',
        left: '100vw',
    }, 900);
    jQuery(".section.audio").animate({
        top: '0vh',
        right: '100vw',
        bottom: '0vh',
        left: '-100vw',
    }, 900);
    jQuery("li.return").animate({
        opacity: '0',
    }, 500);
});

// BUTTON HAUT
jQuery(".link-up").click(function () {
    jQuery(".section.image").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    jQuery(".section.video").animate({
        top: '200vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    jQuery(".section-center").animate({
        top: '100vh',
        right: '0vw',
        bottom: '-100vh',
        left: '0vw',
    }, 900);
    jQuery(".section.web").animate({
        top: '100vh',
        right: '100vw',
        bottom: '0vh',
        left: '100vw',
    }, 900);
    jQuery(".section.audio").animate({
        top: '100vh',
        bottom: '-100vh',
        right: '100vw',
        left: '-100vw',
    }, 900);
    jQuery("li.return").animate({
        opacity: '1',
    }, 500);
});

// BUTTON BAS
jQuery(".link-down").click(function () {
    jQuery(".section.image").animate({
        top: '-300vh',
        right: '0vw',
        bottom: '200vh',
        left: '0vw',
    }, 900);
    jQuery(".section.video").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    jQuery(".section-center").animate({
        top: '-100vh',
        right: '0vw',
        bottom: '100vh',
        left: '0vw',
    }, 900);
    jQuery(".section.web").animate({
        top: '-100vh',
        right: '-100vw',
        bottom: '100vh',
        left: '100vw',
    }, 900);
    jQuery(".section.audio").animate({
        top: '-100vh',
        bottom: '100vh',
        right: '100vw',
        left: '-100vw',
    }, 900);
    jQuery("li.return").animate({
        opacity: '1',
    }, 500);
});

// BUTTON DROIT
jQuery(".link-right").click(function () {
    jQuery(".section.image").animate({
        top: '-100vh',
        right: '100vw',
        bottom: '100vh',
        left: '-100vw',
    }, 900);
    jQuery(".section.video").animate({
        top: '100vh',
        right: '100vw',
        bottom: '-100vh',
        left: '-100vw',
    }, 900);
    jQuery(".section-center").animate({
        top: '0vh',
        right: '100vw',
        bottom: '0vh',
        left: '-100vw',
    }, 900);
    jQuery(".section.web").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    jQuery(".section.audio").animate({
        top: '0vh',
        bottom: '0vh',
        right: '200vw',
        left: '-300vw',
    }, 900);
    jQuery("li.return").animate({
        opacity: '1',
    }, 500);
});

// BUTTON GAUCHE
jQuery(".link-left").click(function () {
    jQuery(".section.image").animate({
        top: '-100vh',
        right: '-100vw',
        bottom: '100vh',
        left: '100vw',
    }, 900);
    jQuery(".section.video").animate({
        top: '100vh',
        right: '-100vw',
        bottom: '-100vh',
        left: '100vw',
    }, 900);
    jQuery(".section-center").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '100vw',
    }, 900);
    jQuery(".section.web").animate({
        top: '0vh',
        right: '300vw',
        bottom: '0vh',
        left: '200vw',
    }, 900);
    jQuery(".section.audio").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    jQuery("li.return").animate({
        opacity: '1',
    }, 500);
});
