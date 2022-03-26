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




/*! Grained.js 
* Author : Sarath Saleem  - https://github.com/sarathsaleem 
* MIT license: http://opensource.org/licenses/MIT 
* GitHub : https://github.com/sarathsaleem/grained 
* v0.0.1 
*/
!function(a,b){"use strict";function c(a,c){function d(a,b,c,d){var e="";e=b.length?b+"{"+c+"}":c,"insertRule"in a?a.insertRule(e,d):"addRule"in a&&a.addRule(b,c,d)}var e=null,f=null,g=null;if("string"==typeof a&&(e=b.getElementById(a.split("#")[1])),!e)return void console.error("Grained: cannot find the element with id "+a);f=e.id,"absolute"!==e.style.position&&(e.style.position="relative"),e.style.overflow="hidden";var h=["","-moz-","-o-animation-","-webkit-","-ms-"],i={animate:!0,patternWidth:100,patternHeight:100,grainOpacity:.1,grainDensity:1,grainWidth:1,grainHeight:1,grainChaos:.5,grainSpeed:20};Object.keys(c).forEach(function(a){i[a]=c[a]});for(var j=function(){var a=b.createElement("canvas"),c=a.getContext("2d");a.width=i.patternWidth,a.height=i.patternHeight;for(var d=0;d<i.patternWidth;d+=i.grainDensity)for(var e=0;e<i.patternHeight;e+=i.grainDensity){var f=256*Math.random()|0;c.fillStyle="rgba("+[f,f,f,i.grainOpacity].join()+")",c.fillRect(d,e,i.grainWidth,i.grainHeight)}return a.toDataURL("image/png")},k=j(),l="",m=["0%:-10%,10%","10%:-25%,0%","20%:-30%,10%","30%:-30%,30%","40%::-20%,20%","50%:-15%,10%","60%:-20%,20%","70%:-5%,20%","80%:-25%,5%","90%:-30%,25%","100%:-10%,10%"],n=h.length;n--;){l+="@"+h[n]+"keyframes grained{";for(var o=0;o<m.length;o++){var p=m[o].split(":");l+=p[0]+"{",l+=h[n]+"transform:translate("+p[1]+");",l+="}"}l+="}"}var q=b.getElementById("grained-animation");q&&q.parentElement.removeChild(q);var r=b.createElement("style");r.type="text/css",r.id="grained-animation",r.innerHTML=l,b.body.appendChild(r);var s=b.getElementById("grained-animation-"+f);s&&s.parentElement.removeChild(s),r=b.createElement("style"),r.type="text/css",r.id="grained-animation-"+f,b.body.appendChild(r);var t="background-image: url("+k+");";if(t+='position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;',n=h.length,i.animate)for(;n--;)t+=h[n]+"animation-name:grained;",t+=h[n]+"animation-iteration-count: infinite;",t+=h[n]+"animation-duration: "+i.grainChaos+"s;",t+=h[n]+"animation-timing-function: steps("+i.grainSpeed+", end);";g="#"+f+"::before",d(r.sheet,g,t)}a.grained=c}(window,document);

var options = {
    "animate": true,
    "patternWidth": 800,
    "patternHeight": 800,
    "grainOpacity": 0.07,
    "grainDensity": 1,
    "grainWidth": 1,
    "grainHeight": 1
  }
  grained("#grained", options);