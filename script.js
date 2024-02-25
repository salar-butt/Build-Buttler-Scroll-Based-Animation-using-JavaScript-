window.addEventListener("scroll", setScrollVar);

function setScrollVar() {
    const htmlElement = document.documentElement;
    const windowHeight = htmlElement.clientHeight;
    const scrollPosition = htmlElement.scrollTop;
    const percentScrolled = (scrollPosition / windowHeight) * 100;
    console.log(percentScrolled, "scrolled");
    showHideImages(percentScrolled);
}

function showHideImages(percentScrolled) {
    var img1 = document.getElementById('img-1');
    var img2 = document.getElementById('img-2');
    var img3 = document.getElementById('img-3');


    if (percentScrolled <=10) {
        img1.style.opacity = "0";
        img2.style.opacity = "0";
        img3.style.opacity = "0";
    }

    if (percentScrolled > 0 && percentScrolled < 100) {
        img1.style.opacity = "1";
        img1.style.top = "60%";
        img1.style.transform = "rotate(360deg)";
        img2.style.opacity = "0";
        img3.style.opacity = "0";
    }
    else if (percentScrolled >= 100 && percentScrolled < 200) {
        img2.style.opacity = "1";
        img2.style.transform = "rotate(360deg)";
        img2.style.top = "60%";
        img1.style.opacity = "0";
        img3.style.opacity = "0";
    }
    else if (percentScrolled >= 200) {
        img3.style.opacity = "1";
        img3.style.transform = "rotate(360deg)";
        img3.style.top = "60%";
        img1.style.opacity = "0";
        img2.style.opacity = "0";
    }
}
