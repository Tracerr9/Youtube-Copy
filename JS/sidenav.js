function openNav() {
    document.getElementById("top-sidenav").style.width = "224px";
    document.getElementById("main-sidenav").style.width = "228px";
    document.getElementById("main-sidenav").style.overflow = "scroll";
    document.getElementById("top-sidenav").style.backgroundColor = "white";
    document.getElementById("main-sidenav").style.backgroundColor = "white";
    document.getElementById("screen").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("screen").style.zIndex = "2";
    document.body.style.overflow = "hidden";
  }

function closeNav() {
    document.getElementById("top-sidenav").style.width = "0px";
    document.getElementById("main-sidenav").style.width = "0px";
    document.getElementById("main-sidenav").style.overflow = "hidden";
    document.getElementById("top-sidenav").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("main-sidenav").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("screen").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("screen").style.zIndex = "-5";
    document.body.style.overflow = "visible";
}