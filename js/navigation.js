document.addEventListener('DOMContentLoaded', function () {

    // DECLARATION DES SELECTION SUR LE DOM 
    const main = document.querySelector('main')

    const linkUps = document.querySelectorAll('.link-up')
    const linkDowns = document.querySelectorAll('.link-down')
    const linkLefts = document.querySelectorAll('.link-left')
    const linkRights = document.querySelectorAll('.link-right')
    const linkCenters = document.querySelectorAll('.link-center')

    const sectionImage = document.querySelector('.section.image')
    const sectionWeb = document.querySelector('.section.web')
    const sectionAudio = document.querySelector('.section.audio')
    const sectionVideo = document.querySelector('.section.video')
    const sectionCenter = document.querySelector('.section.center')

    // SET PLACEMENT DES SECTIONS
    sectionImage.style.top = "-100vh";
    sectionImage.style.bottom = "100vh";
    sectionImage.style.right = "0vw";
    sectionImage.style.left = "0vw";

    sectionVideo.style.top = "100vh";
    sectionVideo.style.bottom = "-100vh";
    sectionVideo.style.right = "0vw";
    sectionVideo.style.left = "0vw";

    sectionWeb.style.top = "0vh";
    sectionWeb.style.bottom = "0vh";
    sectionWeb.style.right = "0vw";
    sectionWeb.style.left = "100vw";

    sectionAudio.style.top = "0vh";
    sectionAudio.style.bottom = "0vh";
    sectionAudio.style.right = "0vw";
    sectionAudio.style.left = "-100vw";

    sectionCenter.style.top = "0vh";
    sectionCenter.style.bottom = "0vh";
    sectionCenter.style.right = "0vw";
    sectionCenter.style.left = "0vw";
    
    // EVENT ONCLICK
    for (const linkUp of linkUps) {
        linkUp.addEventListener("click", (e) => {
            main.style.backgroundColor = '#032d55';

            sectionImage.style.top = "0vh";
            sectionImage.style.bottom = "0vh";
            sectionImage.style.right = "0vw";
            sectionImage.style.left = "0vw";

            sectionVideo.style.top = "200vh";
            sectionVideo.style.bottom = "0vh";
            sectionVideo.style.right = "0vw";
            sectionVideo.style.left = "0vw";

            sectionWeb.style.top = "100vh";
            sectionWeb.style.bottom = "0vh";
            sectionWeb.style.right = "0vw";
            sectionWeb.style.left = "100vw";

            sectionAudio.style.top = "100vh";
            sectionAudio.style.bottom = "0vh";
            sectionAudio.style.right = "0vw";
            sectionAudio.style.left = "-100vw";

            sectionCenter.style.top = "100vh";
            sectionCenter.style.bottom = "0vh";
            sectionCenter.style.right = "0vw";
            sectionCenter.style.left = "0vw";
        });
    }

    for (const linkDown of linkDowns) {
        linkDown.addEventListener("click", (e) => {
            main.style.backgroundColor = '#453404';

            sectionImage.style.top = "-200vh";
            sectionImage.style.bottom = "0vh";
            sectionImage.style.right = "0vw";
            sectionImage.style.left = "0vw";

            sectionVideo.style.top = "0vh";
            sectionVideo.style.bottom = "0vh";
            sectionVideo.style.right = "0vw";
            sectionVideo.style.left = "0vw";

            sectionWeb.style.top = "-100vh";
            sectionWeb.style.bottom = "0vh";
            sectionWeb.style.right = "0vw";
            sectionWeb.style.left = "100vw";

            sectionAudio.style.top = "-100vh";
            sectionAudio.style.bottom = "0vh";
            sectionAudio.style.right = "0vw";
            sectionAudio.style.left = "-100vw";

            sectionCenter.style.top = "-100vh";
            sectionCenter.style.bottom = "0vh";
            sectionCenter.style.right = "0vw";
            sectionCenter.style.left = "0vw";
        });
    }

    for (const linkRight of linkRights) {
        linkRight.addEventListener("click", (e) => {
            main.style.backgroundColor = '#03491c';

            sectionImage.style.top = "-100vh";
            sectionImage.style.bottom = "0vh";
            sectionImage.style.right = "0vw";
            sectionImage.style.left = "-100vw";

            sectionVideo.style.top = "100vh";
            sectionVideo.style.bottom = "0vh";
            sectionVideo.style.right = "0vw";
            sectionVideo.style.left = "-100vw";

            sectionWeb.style.top = "0vh";
            sectionWeb.style.bottom = "0vh";
            sectionWeb.style.right = "0vw";
            sectionWeb.style.left = "0vw";

            sectionAudio.style.top = "0vh";
            sectionAudio.style.bottom = "0vh";
            sectionAudio.style.right = "0vw";
            sectionAudio.style.left = "-200vw";

            sectionCenter.style.top = "0vh";
            sectionCenter.style.bottom = "0vh";
            sectionCenter.style.right = "0vw";
            sectionCenter.style.left = "-100vw";
        });
    }

    for (const linkLeft of linkLefts) {
        linkLeft.addEventListener("click", (e) => {
            main.style.backgroundColor = '#3e0768';

            sectionImage.style.top = "-100vh";
            sectionImage.style.bottom = "0vh";
            sectionImage.style.right = "0vw";
            sectionImage.style.left = "100vw";

            sectionVideo.style.top = "100vh";
            sectionVideo.style.bottom = "0vh";
            sectionVideo.style.right = "0vw";
            sectionVideo.style.left = "100vw";

            sectionWeb.style.top = "0vh";
            sectionWeb.style.bottom = "0vh";
            sectionWeb.style.right = "0vw";
            sectionWeb.style.left = "200vw";

            sectionAudio.style.top = "0vh";
            sectionAudio.style.bottom = "0vh";
            sectionAudio.style.right = "0vw";
            sectionAudio.style.left = "0vw";

            sectionCenter.style.top = "0vh";
            sectionCenter.style.bottom = "0vh";
            sectionCenter.style.right = "0vw";
            sectionCenter.style.left = "100vw";
        });
    }

    for (const linkCenter of linkCenters) {
        linkCenter.addEventListener("click", (e) => {
            main.style.backgroundColor = '#180330';

            sectionImage.style.top = "-100vh";
            sectionImage.style.bottom = "100vh";
            sectionImage.style.right = "0vw";
            sectionImage.style.left = "0vw";

            sectionVideo.style.top = "100vh";
            sectionVideo.style.bottom = "-100vh";
            sectionVideo.style.right = "0vw";
            sectionVideo.style.left = "0vw";

            sectionWeb.style.top = "0vh";
            sectionWeb.style.bottom = "0vh";
            sectionWeb.style.right = "0vw";
            sectionWeb.style.left = "100vw";

            sectionAudio.style.top = "0vh";
            sectionAudio.style.bottom = "0vh";
            sectionAudio.style.right = "0vw";
            sectionAudio.style.left = "-100vw";

            sectionCenter.style.top = "0vh";
            sectionCenter.style.bottom = "0vh";
            sectionCenter.style.right = "0vw";
            sectionCenter.style.left = "0vw";
        });
    }
})