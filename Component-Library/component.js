// Color Palette
document.getElementById("color-css").innerText =`
:root {
    --primary: #E6CCBE;
    --gray: #5A5353;
    --pink: #A07178;
    --violet: #6d4d69;
    --sage: #a9ad72;
}

body {
    background-color: var(--primary);
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: 0px;
}
`;

// Navbar
document.getElementById("navbar-html").innerText = `
<nav class="navbar">
    <span class="nav-items">
        <span class="material-icons" id="nav-menu">menu</span>
        <span>Website Title</span>
    </span>
    <span class="nav-items">
        <a class="link">Page 1</a>
        <a class="link">Page 2</a>
        <a class="link">Page 3</a>
        <a class="link">Page 4</a>
    </span>
</nav>
`;

document.getElementById("navbar-css").innerText = `
.navbar {
    position: fixed;
    top:0;
    left:0;
    right:0;
    padding: 15px;
    display: flex;
    background-color: var(--sage);
    justify-content: space-between;
    align-items: center;
}

.nav-items {
    display: flex;
    align-items: center;
    gap:15px;
}

.material-icons:hover {
    cursor:pointer;
}

.link:hover {
    cursor:pointer;
}
`;

// Navigation drawer

document.getElementById("drawer-html").innerText = `
<div class="drawer" open="false" id="navDrawer">
    <a><span class="material-icons">person</span>Profile</a>
    <a><span class="material-icons">home</span>Home</a>
    <a><span class="material-icons">star</span>Favorites</a>
    <a><span class="material-icons">settings</span>Settings</a>
</div>
`;

document.getElementById("drawer-css").innerText = `
.drawer {
    position: fixed;
    width: 300px;
    top:54px;
    left:-350px;
    bottom:0;
    box-shadow: 0 19px 30px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    min-height: 37%;
    height: auto;
    padding: 10px;
    background-color: var(--sage);
    transition: all .5s ease-in-out;
}

.drawer > a {
    display: flex;
    align-items: center;
    padding-bottom: 15px;

}

.drawer[data-open="true"] {
    left: 0px;
}
`;

document.getElementById("drawer-js").innerText = `
let isNavOpen = false;

document.getElementById("nav-menu").addEventListener("click", () => {
    isNavOpen = !isNavOpen;
    document.getElementById("navDrawer").dataset.open = isNavOpen.toString();
})
`;

// Buttons

document.getElementById("button-html").innerText = `
<button class="btn" pressed="false" id="btn1">
    <span>Share</span>
</button>
`;

document.getElementById("button-css").innerText = `
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    background-color: var(--pink);
    border-radius: 25px; 
    border: 3px solid var(--violet);
    margin: 10px;
    box-shadow: 0px 1px 6px rgba(0,0,0,.20), 0px 1px 4px rgba(0,0,0,.30);
}

.btn[data-pressed="true"] {
    box-shadow: none;
}

.btn:hover {
    transition: all 0.4s ease; 
    transition-property: background-color, box-shadow; 
    background-color: var(--violet);
    color: white;
    cursor:pointer;
    border: 3px solid black;
}
`;

document.getElementById("button-js").innerText = `
const btn = document.getElementById("btn");

btn.addEventListener("mousedown", () => {
    btn.dataset.pressed = true;
})
btn.addEventListener("mouseup", () => {
    btn.dataset.pressed = false;
})
`;

document.getElementById("fab-html").innerText =`
<button class="fab" pressed="false" id="fab-btn">
    <span class="material-icons">add</span>
</button>
`;

document.getElementById("fab-css").innerText =`
.fab {
    position: fixed;
    bottom:0;
    right:0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    background-color: var(--pink);
    border-radius: 50px; 
    border: 3px solid var(--violet);
    margin: 10px;
    box-shadow: 0px 1px 5px rgba(0,0,0, .20), 0px 3px 3px rgba(0,0,0,.30);
}

.fab[data-pressed="true"] {
    box-shadow: none;
}

.fab:hover {
    transition: all 0.4s ease; 
    transition-property: background-color, box-shadow; 
    background-color: var(--violet);
    color: white;
    cursor:pointer;
    border: 3px solid black;
}
`;

document.getElementById("fab-js").innerText =`
const fab = document.getElementById("fab-btn");

fab.addEventListener("mousedown", () => {
    fab.dataset.pressed = true;
})
fab.addEventListener("mouseup", () => {
    fab.dataset.pressed = false;
})
`;

// Animations
document.getElementById("animate1-html").innerText =`
<main class="animation-holder">
    <div class="loader"></div>
    <div class="loader2"></div>
    <div class="loader3"></div>
</main>
`;

document.getElementById("animate1-css").innerText =`
.animation-holder {
    display: flex;
    justify-content: center;
    gap:25px;
    padding: 20px;
}

.loader {
    padding: 35px;
    background-color: var(--violet);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 9px 15px, rgba(0, 0, 0, 0.22) 0px 5px 10px;
    border-radius: 50%;
    animation: loading-animation1;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.loader2 {
    padding: 35px;
    background-color: var(--sage);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 9px 15px, rgba(0, 0, 0, 0.22) 0px 5px 10px;
    border-radius: 50%;
    animation: loading-animation2;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.loader3 {
    padding: 35px;
    background-color: var(--violet);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 9px 15px, rgba(0, 0, 0, 0.22) 0px 5px 10px;
    border-radius: 50%;
    animation: loading-animation3;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes loading-animation1 {
    0% {
        background-color: var(--violet);
    }
    33% {
        background-color: var(--sage);
    }
    66% {
        background-color: var(--violet);
    }
}

@keyframes loading-animation2 {
    0% {
        background-color: var(--sage);
    }
    33% {
        background-color: var(--violet);
    }
    66% {
        background-color: var(--violet);
    }
}

@keyframes loading-animation3 {
    0% {
        background-color: var(--violet);
    }
    33% {
        background-color: var(--violet);
    }
    66% {
        background-color: var(--sage);
    }
}
`;

document.getElementById("animate2-html").innerText =`
<div class="animation-holder">
    <div class="square" id="box">
        <div class="small-square" id="small-square"></div>
    </div>
</div>
`;

document.getElementById("animate2-css").innerText =`
.animation-holder {
    display: flex;
    justify-content: center;
    gap:25px;
    padding: 20px;
}

.square {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: var(--violet);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 20px, rgba(0, 0, 0, 0.22) 0px 5px 10px;
    animation: animation1;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
}

.small-square {
    width: 50px;
    height: 50px;
    background-color: var(--pink);
    animation: animation2;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;

}

.square:hover {
    cursor:pointer;
}

@keyframes animation1 {
    0% {
        transform:rotateY(2160deg);
        background-color: var(--violet);
    }
    50% {
        background-color: var(--sage);
    }
    99% {
        transform: rotateY(0deg);
        background-color: var(--violet);
    }
}

@keyframes animation2 {
    0% {
        background-color: var(--pink);
    }
    50% {
        background-color: var(--primary);
    }
    99% {
        background-color: var(--pink);
    }
}
`;

document.getElementById("animate2-js").innerText =`
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
`;

document.getElementById("animate3-html").innerText =`
<main class="container">
    <div class="box">
        <div class="text">SpinUp</div>
    </div>
</main>
`;

document.getElementById("animate3-css").innerText =`
.text {
    position:relative;
    color:var(--sage);
    font-size: x-large;
    animation: example 5s linear infinite;
}

.box {
    border: solid 3px var(--gray);
    width:150px;
    height: 100px;  
}

@keyframes example {
    0%   {color:var(--sage); left:0px; top:0px;}
    25%  {color:var(--pink); left:75px; top:75px;}
    50%  {color:var(--sage); left:0px; top:75px;}
    75%  {color:var(--pink); left:75px; top:0px;}
    100% {color:var(--sage); left:0px; top:0px;}
}
`;

// Image carousel
document.getElementById("image-html").innerText =`
<div class="center">
    <div class="carousel">
        <div class="pic">
            <img src="https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_1280.jpg"/>
        </div>
        <div class="pic">
            <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"/>
        </div>
        <div class="pic">
            <img src="https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_1280.jpg"/>  
        </div>
        <div class="pic">
            <img src="https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg"/>
        </div>
    </div>
</div>
`;

document.getElementById("image-css").innerText =`
.carousel {
    width: 100%;
    max-width: 650px;
    height: 250px;
    position: relative;
    overflow: hidden;
}

.pic {
    width: 100%;
    max-width: 650px;
    height: 250px;
    position: absolute;
    transition: all 0.5s;
}

.pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.center {
    display:flex;
    justify-content: center;
}
`;

document.getElementById("image-js").innerText =`
const pics = document.querySelectorAll(".pic");
let curSlide = 0;
let maxNum = pics.length - 1;

pics.forEach((pic, index) => {
    pic.style.transform = \`translateX(\${100 * index}%)\`;
});

setInterval(function () {
    if (curSlide === maxNum) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    pics.forEach((pic, index) => {
        pic.style.transform = \`translateX(\${(index-curSlide) * 100}%)\`;
    })
}, 2500);
`;