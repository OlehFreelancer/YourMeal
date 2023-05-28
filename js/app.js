(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const modalController = ({modalElement, modalElementOpen, modalElementClose}) => {
        const modal = document.querySelector(modalElement);
        const modalOpens = document.querySelectorAll(modalElementOpen);
        modal.style.cssText = `\n\t\tvisibility: hidden;\n\t\topacity: 0;\n\t\ttransition: opacity 0.4s linear;\n\t`;
        const closeModal = event => {
            const target = event.target;
            if (target === modal || target.closest(modalElementClose)) {
                modal.style.opacity = 0;
                setTimeout((() => {
                    modal.style.visibility = "hidden";
                }), 400);
            }
        };
        const openModal = () => {
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
        };
        modalOpens.forEach((btn => {
            btn.addEventListener("click", openModal);
        }));
        modal.addEventListener("click", closeModal);
    };
    modalController({
        modalElement: ".modal--1",
        modalElementOpen: ".item-choice__img--1, .item-choice__title--1",
        modalElementClose: ".modal__close"
    });
    modalController({
        modalElement: ".modal--2",
        modalElementOpen: ".item-choice__img--2, .item-choice__title--2",
        modalElementClose: ".modal__close"
    });
    modalController({
        modalElement: ".modal--3",
        modalElementOpen: ".item-choice__img--3, .item-choice__title--3",
        modalElementClose: ".modal__close"
    });
    modalController({
        modalElement: ".modal--4",
        modalElementOpen: ".item-choice__img--4, .item-choice__title--4",
        modalElementClose: ".modal__close"
    });
    modalController({
        modalElement: ".modal--5",
        modalElementOpen: ".item-choice__img--5, .item-choice__title--5",
        modalElementClose: ".modal__close"
    });
    modalController({
        modalElement: ".modal--6",
        modalElementOpen: ".item-choice__img--6, .item-choice__title--6",
        modalElementClose: ".modal__close"
    });
    (function() {
        const wrapper = document.querySelector(".order__container");
        const basket = document.querySelector(".basket");
        const basketOpen = document.querySelector(".basket__title");
        const basketClose = document.querySelector(".basket__close");
        basketOpen.addEventListener("click", (() => {
            basket.classList.add("basket__active");
        }));
        basketClose.addEventListener("click", (() => {
            basket.classList.remove("basket__active");
        }));
        wrapper.addEventListener("click", (() => {
            basket.classList.remove("basket__active");
        }));
    })();
    window["FLS"] = true;
    isWebp();
})();