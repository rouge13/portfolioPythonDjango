function hidePhoneNumber() {
    var x = document.getElementById("phoneNumber");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function hideLocation() {
    var x = document.getElementById("location");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function hideNavigation__bar() {
    document.getElementById("navi-toggle").checked = false;


}

function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if (startTime === null ) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration)
        window.scrollTo(0,run);
        if (timeElapsed < duration) requestAnimationFrame(animation);

    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t*t*t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// var sectionFooter = document.querySelector('.sectionFooter');
//
// sectionFooter.addEventListener('click', function () {
//     smoothScroll();
// })

