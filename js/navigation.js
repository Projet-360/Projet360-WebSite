document.addEventListener('DOMContentLoaded', function () {

    // DECLARATION DES SELECTION SUR LE DOM 
    const main = document.querySelector('main')

    const linkImages = document.querySelectorAll('.link-up')
    const linkVideos = document.querySelectorAll('.link-down')
    const linkAudios = document.querySelectorAll('.link-left')
    const linkWebs = document.querySelectorAll('.link-right')
    const linkCenters = document.querySelectorAll('.link-center')

    const sectionImage = document.querySelector('.section.image')
    const sectionWeb = document.querySelector('.section.web')
    const sectionAudio = document.querySelector('.section.audio')
    const sectionVideo = document.querySelector('.section.video')
    const sectionCenter = document.querySelector('.section.center')


    const placer = (target, x , y) => {
        target.style.transform = "translate(" + x + "vw," + y + "vh)";
    }

    // const ButtonsArrays = [linkCenters, linkAudios, linkImages, linkVideos, linkWebs]
    // console.log(Array.prototype.slice.call(ButtonsArrays));

    // ButtonsArrays.forEach(element => {
    //     console.log(element);
    //     element.addEventListener("click", () => {
    //         if ( element === linkImages) {
    //             placer(sectionCenter, 100, 100)
    //             placer(sectionVideo, 200, 200)
    //             placer(sectionWeb, 200, 0)
    //             placer(sectionImage, 0, 0)
    //             placer(sectionAudio, 0, 200)
    //         }
    //         if ( element === linkVideos) {
    //             placer(sectionCenter, 100, 100)
    //             placer(sectionVideo, 200, 200)
    //             placer(sectionWeb, 200, 0)
    //             placer(sectionImage, 0, 0)
    //             placer(sectionAudio, 0, 200)
    //         }
    //         if ( element === linkWebs) {
    //             placer(sectionCenter, 100, 100)
    //             placer(sectionVideo, 200, 200)
    //             placer(sectionWeb, 200, 0)
    //             placer(sectionImage, 0, 0)
    //             placer(sectionAudio, 0, 200)
    //         }
    //         if ( element === linkAudios) {
    //             placer(sectionCenter, 100, 100)
    //             placer(sectionVideo, 200, 200)
    //             placer(sectionWeb, 200, 0)
    //             placer(sectionImage, 0, 0)
    //             placer(sectionAudio, 0, 200)
    //         }
    //         if ( element === linkCenters) {
    //             placer(sectionCenter, 100, 100)
    //             placer(sectionVideo, 200, 200)
    //             placer(sectionWeb, 200, 0)
    //             placer(sectionImage, 0, 0)
    //             placer(sectionAudio, 0, 200)
    //         }
    //     });

    // });

    placer(sectionCenter, 0, 0)
    placer(sectionVideo, 100, 100)
    placer(sectionWeb, 100, -100)
    placer(sectionImage, -100, -100)
    placer(sectionAudio, -100, 100)

    
    // EVENT ONCLICK
    for (const linkImage of linkImages) {
        linkImage.addEventListener("click", () => {
            placer(sectionCenter, 100, 100)
            placer(sectionVideo, 200, 200)
            placer(sectionWeb, 200, 0)
            placer(sectionImage, 0, 0)
            placer(sectionAudio, 0, 200)
        });
    }

    for (const linkVideo of linkVideos) {
        linkVideo.addEventListener("click", () => {
            placer(sectionCenter, -100, -100)
            placer(sectionImage, -200, -200)
            placer(sectionWeb, 0, -200)
            placer(sectionVideo, 0, 0)
            placer(sectionAudio, -200, 200)
        });
    }

    for (const linkWeb of linkWebs) {
        linkWeb.addEventListener("click", () => {
            main.style.backgroundColor = '#03491c';

            placer(sectionCenter, -100, 100)
            placer(sectionImage, -200, 0)
            placer(sectionVideo, 0, 200)
            placer(sectionWeb, 0, 0)
            placer(sectionAudio, -200, 200)
        });
    }

    for (const linkAudio of linkAudios) {
        linkAudio.addEventListener("click", () => {
            main.style.backgroundColor = '#3e0768';

            placer(sectionCenter, 100, -100)
            placer(sectionImage, 0, -200)
            placer(sectionVideo, 200, 0)
            placer(sectionAudio, 0, 0)
            placer(sectionWeb, 200, -200)
        });
    }

    for (const linkCenter of linkCenters) {
        linkCenter.addEventListener("click", () => {
            main.style.backgroundColor = '#180330';

            placer(sectionCenter, 0, 0)

            placer(sectionVideo, 100, 100)
            placer(sectionWeb, 100, -100)
            placer(sectionImage, -100, -100)
            placer(sectionAudio, -100, 100)        
        });
    }
})



