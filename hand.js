const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

let nums = document.querySelectorAll(".num1");
let container = document.querySelector(".container");

let test = false; // when the function doesn't start




//// Counter
const createOdometer = (el, value) => {
  const odometer = new Odometer({
    el: el,
    value: 0,
  });

  let hasRun = false;

  const options = {
    threshold: [0, 0.9],
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!hasRun) {
          odometer.update(value);
          hasRun = true;
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
};

const subscribersOdometer = document.querySelector(".subscribers-odometer");
createOdometer(subscribersOdometer, 80000);

// const videosOdometer = document.querySelector(".videos-odometer");
// createOdometer(videosOdometer, 790);

const projectsOdometer = document.querySelector(".projects-odometer");
createOdometer(projectsOdometer, 4500);