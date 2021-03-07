/* 
    pointer.js was created by OwL for use on websites, 
     and can be found at https://seattleowl.com/pointer.
*/

const pointer = document.createElement("div")
pointer.id = "pointer-dot"
const ring = document.createElement("div")
ring.id = "pointer-ring"
document.body.insertBefore(pointer, document.body.children[0])
document.body.insertBefore(ring, document.body.children[0])

let mouseX = -100
let mouseY = -100
let ringX = -100
let ringY = -100
let isHover = false
let mouseDown = false
const init_pointer = (options) => {

    window.onmousemove = (mouse) => {
        mouseX = mouse.clientX
        mouseY = mouse.clientY
    }

    window.onmousedown = (mouse) => {
        mouseDown = true
    }

    window.onmouseup = (mouse) => {
        mouseDown = false
    }

    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    }
    window["trace"] = trace

    const getOption = (option) => {
        let defaultObj = {
            pointerColor: "#750c7e",
            ringSize: 15,
            ringClickSize: (options["ringSize"] || 15) - 10,
        }
        if (options[option] == undefined) {
            return defaultObj[option]
        } else {
            return options[option]
        }
    }

    const render = () => {
        ringX = trace(ringX, mouseX, 0.2)
        ringY = trace(ringY, mouseY, 0.2)

        if (document.querySelector(".p-action-click:hover")) {
            pointer.style.borderColor = getOption("pointerColor")
            isHover = true
        } else {
            pointer.style.borderColor = "white"
            isHover = false
        }
        ring.style.borderColor = getOption("pointerColor")
        if (mouseDown) {
            ring.style.padding = getOption("ringClickSize") + "px"
        } else {
            ring.style.padding = getOption("ringSize") + "px"
        }

        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}


//botones de paginas////////


$(function () {
    $("#Proyectos").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#contenido_2").offset().top
        }, 700);
        document.getElementById("barra").style.left = "0";
    document.getElementById("contenido").style.marginLeft = "0px";
    document.getElementById("contenido_2").style.marginLeft = " 0px";
    document.getElementById("contenido_3").style.marginLeft = " 0px";
    document.getElementById("contenido_4").style.marginLeft = " 0px";
    document.getElementById("contenido_5").style.marginLeft = " 0px";
    document.getElementById("blur").style.opacity="0%";
    document.getElementById("menu_out").style.visibility = 'hidden';
    document.getElementById("logo").style.visibility = 'visible';
        return false;


    });
    $("#Servicios").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#contenido_3").offset().top
            
        }, 700);
    document.getElementById("barra").style.left = "0";
    document.getElementById("contenido").style.marginLeft = "0px";
    document.getElementById("contenido_2").style.marginLeft = " 0px";
    document.getElementById("contenido_3").style.marginLeft = " 0px";
    document.getElementById("contenido_4").style.marginLeft = " 0px";
    document.getElementById("contenido_5").style.marginLeft = " 0px";
    document.getElementById("blur").style.opacity="0%";
    document.getElementById("menu_out").style.visibility = 'hidden';
    document.getElementById("logo").style.visibility = 'visible';
        return false;
    });


    $("#info").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#contenido_4").offset().top
        }, 700);
        document.getElementById("barra").style.left = "0";
    document.getElementById("contenido").style.marginLeft = "0px";
    document.getElementById("contenido_2").style.marginLeft = " 0px";
    document.getElementById("contenido_3").style.marginLeft = " 0px";
    document.getElementById("contenido_4").style.marginLeft = " 0px";
    document.getElementById("contenido_5").style.marginLeft = " 0px";
    document.getElementById("blur").style.opacity="0%";
    document.getElementById("menu_out").style.visibility = 'hidden';
    document.getElementById("logo").style.visibility = 'visible';
        return false;
    });



    $("#contactanos").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#contenido_5").offset().top
        }, 700);
        document.getElementById("barra").style.left = "0";
    document.getElementById("contenido").style.marginLeft = "0px";
    document.getElementById("contenido_2").style.marginLeft = " 0px";
    document.getElementById("contenido_3").style.marginLeft = " 0px";
    document.getElementById("contenido_4").style.marginLeft = " 0px";
    document.getElementById("contenido_5").style.marginLeft = " 0px";
    document.getElementById("blur").style.opacity="0%";
    document.getElementById("menu_out").style.visibility = 'hidden';
    document.getElementById("logo").style.visibility = 'visible';
        return false;
    });


    $("#home").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#contenido").offset().top
        }, 700);
        document.getElementById("barra").style.left = "0";
    document.getElementById("contenido").style.marginLeft = "0px";
    document.getElementById("contenido_2").style.marginLeft = " 0px";
    document.getElementById("contenido_3").style.marginLeft = " 0px";
    document.getElementById("contenido_4").style.marginLeft = " 0px";
    document.getElementById("contenido_5").style.marginLeft = " 0px";
    document.getElementById("blur").style.opacity="0%";
    document.getElementById("menu_out").style.visibility = 'hidden';
    document.getElementById("logo").style.visibility = 'visible';
        return false;
    });

    
});

//loading finalisado////////

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
    document.getElementById("studio").style.animationName = 'example';
});




///// hide menu ////////////
function hide() {
    document.getElementById("barra").style.left = "72px";
    
    document.getElementById("menu_out").style.visibility = 'visible';
    document.getElementById("logo").style.visibility = 'hidden';
    document.getElementById("home").style.marginLeft = " 0px";
    document.getElementById("Proyectos").style.marginLeft = " 0px";
    document.getElementById("Servicios").style.marginLeft = " 0px";
    document.getElementById("info").style.marginLeft = " 0px";
    document.getElementById("contactanos").style.marginLeft = " 0px";
    document.getElementById("blur").style.visibility = 'visible';

 
 

}

function show() {
    document.getElementById("barra").style.left = "0px";
    document.getElementById("menu_out").style.visibility = 'hidden';
    document.getElementById("logo").style.visibility = 'visible';
    document.getElementById("home").style.marginLeft = " -50px";
    document.getElementById("Proyectos").style.marginLeft = " -70px";
    document.getElementById("Servicios").style.marginLeft = " -80px";
    document.getElementById("info").style.marginLeft = " -90px";
    document.getElementById("contactanos").style.marginLeft = " -100px";
    document.getElementById("blur").style.visibility = 'hidden';
}

//function menuanimacion(x) {
//document.getElementById("linea_01").style.transform = "rotate(45deg)";
// document.getElementById("linea_01").style.top =" 5px";
//document.getElementById("linea_02").style.transform = "rotate(-45deg)";
// document.getElementById("linea_02").style.bottom =" 5px";
// document.getElementById("linea_03").style.opacity="0%";
//}

//function normalmenu(x) {
//document.getElementById("linea_01").style.transform = "rotate(0deg)";
// document.getElementById("linea_02").style.transform = "rotate(0deg)";
//  document.getElementById("linea_02").style.bottom ="0";
// document.getElementById("linea_01").style.top =" 0";
// document.getElementById("linea_03").style.opacity="100%";

//}

// slide animation //


AOS.init({
    duration: 900,
})

//no right click //



//$('body').bind('contextmenu', function(e){

//alert("We're sorry. Right-Click is not available");

//return false;

//});

