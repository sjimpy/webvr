
var scrollContainer = document.getElementById('maincontainer');
var camera = document.getElementById('camera');
var scrollDir;

// hier komen alle gedeeltes waar de camera een viewpoort heeft
var homecont = document.getElementById('focusOnHome');
var focusOnSchep = document.getElementById('focusOnSchep');
var focusOnSurf = document.getElementById('focusOnSurf');
var focusOnShoe = document.getElementById('focusOnShoe');
var focusOnShoe2 = document.getElementById('focusOnShoe2');
var focusOnShirt = document.getElementById('focusOnShirt');
var focusOnAll = document.getElementById('focusOnAll');

var activeView = focusOnHome;
var currentlyInView;
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

setInterval(function () {

}, 100);



scrollContainer.addEventListener("scroll", function() {
  upOrDown();
  if (checkCameraChangeOnscroll(focusOnAll)) {
      activeView = focusOnAll;
      changeCameraPosition();
  }
  else if (checkCameraChangeOnscroll(focusOnShirt)) {
      activeView = focusOnShirt;
      changeCameraPosition();
  }
  else if (checkCameraChangeOnscroll(focusOnShoe2)) {
      activeView = focusOnShoe2;
      changeCameraPosition();
  }
  else if (checkCameraChangeOnscroll(focusOnShoe)) {
      activeView = focusOnShoe;
      changeCameraPosition();
  }
  else if (checkCameraChangeOnscroll(focusOnSurf)) {
      activeView = focusOnSurf;
      changeCameraPosition();
  }
  else if (checkCameraChangeOnscroll(focusOnSchep)) {
      activeView = focusOnSchep;
      changeCameraPosition();
  }
  else if (checkCameraChangeOnscroll(focusOnHome)) {
      activeView = focusOnHome;
      changeCameraPosition();
  }
});



changeCameraPosition();
function changeCameraPosition() {
  switch (activeView) {
    case focusOnHome:
    if (currentlyInView != activeView.id) {
      currentlyInView = "focusOnHome";
      camera.setAttribute("orbit-controls", "target", "0 0 0");
      camera.setAttribute("orbit-controls", "minDistance", "15");
      camera.setAttribute("orbit-controls", "maxDistance", "50");
      camera.getObject3D('camera').position.set(0, 2, 5);
    }
    break;

    case focusOnSchep:
    if (currentlyInView != activeView.id) {
      currentlyInView = "focusOnSchep";
      camera.setAttribute("orbit-controls", "target", "4 .8 -4");
      camera.setAttribute("orbit-controls", "minDistance", "1");
      camera.setAttribute("orbit-controls", "maxDistance", "5");
      camera.getObject3D('camera').position.set(0, 2, 5);
    }
    break;

    case focusOnSurf:
    if (currentlyInView != activeView.id) {
      currentlyInView = "focusOnSurf";
      camera.setAttribute("orbit-controls", "target", "4 2 4");
      camera.setAttribute("orbit-controls", "minDistance", "2");
      camera.setAttribute("orbit-controls", "maxDistance", "5");
      camera.getObject3D('camera').position.set(0, 2, 5);
    }
    break;

    case focusOnShirt:
    if (currentlyInView != activeView.id) {
      currentlyInView = "focusOnShirt";
      camera.setAttribute("orbit-controls", "target", "-4 1 -4");
      camera.setAttribute("orbit-controls", "minDistance", "1");
      camera.setAttribute("orbit-controls", "maxDistance", "2");
      camera.getObject3D('camera').position.set(0, 3, 5);
    }
    break;

    case focusOnShoe:
    if (currentlyInView != activeView.id) {
      currentlyInView = "focusOnShoe";
      camera.setAttribute("orbit-controls", "target", "-5 .15 4");
      camera.setAttribute("orbit-controls", "minDistance", "1");
      camera.setAttribute("orbit-controls", "maxDistance", "2");
      camera.getObject3D('camera').position.set(0, 3, 5);
    }

    case focusOnShoe2:
    if (currentlyInView != activeView.id) {
      currentlyInView = "focusOnShoe2";
      camera.setAttribute("orbit-controls", "target", "-3 .15 5");
      camera.setAttribute("orbit-controls", "minDistance", "1");
      camera.setAttribute("orbit-controls", "maxDistance", "2");
      camera.getObject3D('camera').position.set(0, 3, 5);
    }
    break;

    case focusOnAll:
    if (currentlyInView != activeView.id) {
      currentlyInView = "focusOnAll";
      camera.setAttribute("orbit-controls", "target", "0 0 0");
      camera.setAttribute("orbit-controls", "minDistance", "10");
      camera.setAttribute("orbit-controls", "maxDistance", "15");
      camera.getObject3D('camera').position.set(0, 8, 10);
    }
    break;
  }
}



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
