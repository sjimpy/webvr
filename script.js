
var scrollContainer = document.getElementById('maincontainer');
var camera = document.getElementById('camera');
var scrollDir;

// hier komen alle gedeeltes waar de camera een viewpoort heeft
var homecont = document.getElementById('focusOnHome');
var focusOnSchep = document.getElementById('focusOnSchep');
var focusOnSurf = document.getElementById('focusOnSurf');

var activeView = focusOnHome;
var scrollDir;

var titlecontainer = document.getElementById('chapters');
var titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

var content = document.getElementById('content');
var chapters = document.getElementById('chapters');
var contentPos = false;

for (var i = 0; i < titles.length; i++) {
  titles[i].setAttribute("id", titles[i].innerHTML.replace(/\s/g, '') + [i]);

  var link = document.createElement('a');
  link.href = "#" + titles[i].innerHTML.replace(/\s/g, '') + [i];
  link.addEventListener("click", function() {
    contentPosCheck();
  });
  link.innerHTML = titles[i].innerHTML;
  link.classList.add(titles[i].nodeName);
  titlecontainer.appendChild(link);
}
// console.log(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));

content.addEventListener("click", function() {
  contentPosCheck();
});

function contentPosCheck() {
  contentPos = !contentPos;
  if (contentPos) {
    chapters.style.top = "var(--nav-height)";
    chapters.style.pointerEvents = "all";
    content.innerHTML = "Close";
  }
  else {
    chapters.style.top = "-100%";
    chapters.style.pointerEvents = "none";
    content.innerHTML = "Table of contents";
  }
}

scrollContainer.addEventListener("scroll", function() {
  upOrDown();
  // console.log(activeView.id);
  // console.log(focusOnMaps.id);
  if (checkCameraChangeOnscroll(focusOnMaps)) {
      console.log("Map time");
      camera.setAttribute("orbit-controls", "target", "0 10 -5");
      camera.setAttribute("orbit-controls", "minDistance", "1");
      camera.setAttribute("orbit-controls", "maxDistance", "5");
      camera.getObject3D('camera').position.set(0, 2, 5);
  }
  else if (checkCameraChangeOnscroll(focusOnSurf)) {
      console.log("Surf time");
      camera.setAttribute("orbit-controls", "target", "0 1.5 -5");
      camera.setAttribute("orbit-controls", "minDistance", "1");
      camera.setAttribute("orbit-controls", "maxDistance", "5");
      camera.getObject3D('camera').position.set(0, 2, 5);
  }
  else if (checkCameraChangeOnscroll(focusOnSchep)) {
      console.log("schep time");
      camera.setAttribute("orbit-controls", "target", "-5 .4 -5");
      camera.setAttribute("orbit-controls", "minDistance", "1");
      camera.setAttribute("orbit-controls", "maxDistance", "5");
      camera.getObject3D('camera').position.set(0, 2, 5);
  }
  else if (checkCameraChangeOnscroll(focusOnHome)) {
      console.log("home time");
      camera.setAttribute("orbit-controls", "target", "0 0 0");
      camera.setAttribute("orbit-controls", "minDistance", "15");
      camera.setAttribute("orbit-controls", "maxDistance", "50");
      camera.getObject3D('camera').position.set(0, 2, 5);
  }
});



function checkCameraChangeOnscroll(el) {
  var top = el.offsetTop;
  if (scrollDir === "down") {
    if ((top - window.innerHeight) - scrollContainer.scrollTop < 0) {
        return("true");
    }
  }
  else if (scrollDir === "up") {
    if ((top - window.innerHeight) - scrollContainer.scrollTop < 0) {
        return("true");
    }
  }


}



var prevpos = 0;
function upOrDown() {
  if (scrollContainer.scrollTop >= prevpos) {
    scrollDir = "down";
  }
  else {
    scrollDir = "up";
  }
  prevpos = scrollContainer.scrollTop;
}
