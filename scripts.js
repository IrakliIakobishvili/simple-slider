const Slider = {
    list    : document.querySelector(".slider__list"),
    items   : document.querySelectorAll(".slider__list__item"),
    netxBtn : document.querySelector(".nextBtn"),
    prevBtn : document.querySelector(".prevBtn"),
    active  : "slider__list__item--active",
    index : 0,
    autoplay: "",
    next: function() {
        if(Slider.index === Slider.items.length-1) {
            Slider.index = 0;
            Slider.items[Slider.items.length-1].classList.remove(Slider.active);
            Slider.items[Slider.index].classList.add(Slider.active);
        }else {
            Slider.index++;
            Slider.items[Slider.index-1].classList.remove(Slider.active);
            Slider.items[Slider.index].classList.add(Slider.active);
        }
    },
    prev: function() {
        if(Slider.index === 0) {
            Slider.index = Slider.items.length-1;
            Slider.items[0].classList.remove(Slider.active);
            Slider.items[Slider.index].classList.add(Slider.active);
        }else {
            Slider.index--;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            Slider.items[Slider.index+1].classList.remove(Slider.active);
            Slider.items[Slider.index].classList.add(Slider.active);
        }
    },
    checkKey: function(e) {
        // e = e || window.event;           
        if (e.keyCode == '37') {
           // left arrow
           Slider.prev();
        }else if (e.keyCode == '39') {
           // right arrow
           Slider.next();
        }
    },
    openFullscreen: function() {
        elem = Slider.list;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
    },
    playSlider: function() {
        Slider.autoplay = setInterval(Slider.next,2000);
    },
    stopSlider: function() {
        clearInterval(Slider.autoplay);
    }
}

Slider.playSlider();
Slider.netxBtn.addEventListener("click",Slider.next);
Slider.prevBtn.addEventListener("click",Slider.prev);
document.onkeydown = Slider.checkKey;

Slider.list.addEventListener("click",Slider.openFullscreen);
Slider.list.addEventListener("mouseover",Slider.stopSlider);
Slider.list.addEventListener("mouseout",Slider.playSlider);

[Slider.prevBtn,Slider.netxBtn].forEach((element) => {
    element.addEventListener("click",function(e){
        e.stopPropagation();
    });
});