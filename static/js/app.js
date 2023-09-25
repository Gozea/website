// Animation on scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
        }
    });  
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Decoration button
const iconList = ["fa-heart", "fa-ghost", "fa-gamepad", "fa-diamond", "fa-dragon", "fa-hand-fist", "fa-mug-hot", "fa-music", "fa-shield-halved", "fa-gears", "fa-code", "fa-bug", "fa-keyboard", "fa-terminal", "fa-palette", "fa-crosshair", "fa-stamp", "fa-splotch", "fa-paintbrush", "fa-hippo", "fa-bolt", "fa-gift", "fa-umbrella", "fa-fire", "fa-thumbs-up"]
const animList = ["fa-beat", "fa-beat-fade", "fa-bounce", "fa-fade", "fa-flip", "fa-shake", "fa-spin", "fa-spin-reverse"]

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}

function addDecoration() {
    const banner = document.querySelector("#banner");
    const e = document.createElement("div");
    e.classList.add("fa-solid")
    e.classList.add(get_random(iconList));
    e.classList.add(get_random(animList));
    banner.appendChild(e);
    e.style.position = "absolute"
    e.style.left = Math.floor(Math.random()*100) + "%"
    e.style.top = Math.floor(Math.random()*100) + "%"
}


// Animation on hover

const a_tags = document.querySelectorAll("a");
a_tags.forEach((el) => {
    el.addEventListener('mouseenter', function() {
        el.classList.add("fa-fade");
    });
    el.addEventListener('mouseleave', function() {
        el.classList.remove("fa-fade");
    });
});

const button_tags = document.querySelectorAll("button");
button_tags.forEach((el) => {
    el.addEventListener('mouseenter', function() {
        el.classList.add("fa-beat");
    });
    el.addEventListener('mouseleave', function() {
        el.classList.remove("fa-beat");
    });
});

