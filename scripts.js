const Slider = {
    list    : document.querySelector(".slider__list"),
    items   : document.querySelectorAll(".slider__list__item"),
    netxBtn : document.querySelector(".nextBtn"),
    prevBtn : document.querySelector(".prevBtn"),
    active  : "slider__list__item--active",
    index : 0,
    next: function() {
        if(Slider.index === Slider.items.length-1) {
            Slider.index = 0;
            Slider.items[Slider.items.length-1].classList.remove(Slider.active);
            Slider.items[Slider.index].classList.add(Slider.active);
        }else {
            Slider.index++;
            // Slider.items.forEach(function(elemen){elemen.classList.remove(Slider.active)});
            Slider.items[Slider.index-1].classList.remove(Slider.active);
            console.log(Slider.index)
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
            // Slider.items.forEach(function(elemen){elemen.classList.remove(Slider.active)});
            Slider.items[Slider.index+1].classList.remove(Slider.active);
            Slider.items[Slider.index].classList.add(Slider.active);
        }
    }
}

Slider.netxBtn.addEventListener("click",Slider.next);
Slider.prevBtn.addEventListener("click",Slider.prev);