// Navigation Drawer
let isNavOpen = false;

document.getElementById("nav-menu").addEventListener("click", () => {
    isNavOpen = !isNavOpen;
    document.getElementById("navDrawer").dataset.open = `${isNavOpen}`;
})

// Buttons
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const fab = document.getElementById("fab-btn");

btn1.addEventListener("mousedown", () => {
    btn1.dataset.pressed = true;
})
btn1.addEventListener("mouseup", () => {
    btn1.dataset.pressed = false;
})

btn2.addEventListener("mousedown", () => {
    btn2.dataset.pressed = true;
})
btn2.addEventListener("mouseup", () => {
    btn2.dataset.pressed = false;
})

fab.addEventListener("mousedown", () => {
    fab.dataset.pressed = true;
})
fab.addEventListener("mouseup", () => {
    fab.dataset.pressed = false;
})

// Animation
const box = document.getElementById("box");
const square = document.getElementById("small-square");

box.addEventListener("click", () => {
    box.classList.remove("square"); // reset animation
    void box.offsetWidth; // trigger reflow
    box.classList.add("square"); // start animation

    square.classList.remove("small-square");
    void square.offsetWidth; // trigger reflow
    square.classList.add("small-square"); // start animation

});

// Image Carousel
const pics = document.querySelectorAll(".pic");
let curSlide = 0;
let maxNum = pics.length - 1;

pics.forEach((pic, index) => {
    pic.style.transform = `translateX(${100 * index}%)`;
});

setInterval(function () {
    if (curSlide === maxNum) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    pics.forEach((pic, index) => {
        pic.style.transform = `translateX(${(index-curSlide) * 100}%)`;
    })
}, 2500);