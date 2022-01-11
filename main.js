let imag = document.querySelector("img");

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let m = 0;
// start.addEventListener("click", () => {
//     car_running = setInterval(run, 50);
// });
stop.addEventListener("click", () => {
    clearInterval(car_running);
});

//Debounce Function...

function debounce(fn, deley) {
    let timeOutId;
    return function() {
        if (timeOutId) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(() => {
            fn();
        }, deley);
    };
}

start.addEventListener(
    "click",
    debounce(() => {
        console.log("Clicked");
        car_running = setInterval(run, 50);
    }, 500)
);

function run() {
    m += 5;
    imag.style.marginLeft = m + "px";

    if (m >= 1100) {
        m = 0;
    }
}