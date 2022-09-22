const eatEl = document.getElementById("eat");
const driveEl = document.getElementById("drive");
const rideEl = document.getElementById("ride");
const heroTitle = document.getElementById("heroH1");
const heroPar = document.getElementById("heroP");
const heroBtn1El = document.getElementById("heroBtn1");
const heroBtn2El = document.getElementById("heroBtn2");
const heroSection = document.getElementById("section-hero");
const driveAll = document.querySelector(".drive");
const eatAll = document.querySelector(".eat");
const rideAll = document.querySelector(".ride");

function changeHeroDrive() {
  heroTitle.innerText = "Get in the driver's seat and get paid";
  heroPar.innerText =
    "Drive on the platform with the largest network of active riders.";
  heroBtn1El.innerText = "Sign up to drive";
  heroBtn2El.innerText = "Learn more about driving and delivering";
  heroSection.style.backgroundImage = "url('./assets/images/hero.png')";
  driveAll.style.borderBottom = "4px solid var(--color-dark)";
  eatAll.style.border = "none";
  rideAll.style.border = "none";
}

driveEl.addEventListener("click", changeHeroDrive);

function changeHeroEat() {
  heroTitle.innerText = "Discover delicious eats";
  heroPar.innerText = "Order delivery from restaurants you love.";
  heroBtn1El.innerText = "Order now";
  heroBtn2El.innerText = "Own a restaurant? Partner with Uber Eats";
  heroSection.style.backgroundImage = "url('./assets/images/hero2.png')";
  driveAll.style.border = "none";
  eatAll.style.borderBottom = "4px solid var(--color-dark)";
  rideAll.style.border = "none";
}

eatEl.addEventListener("click", changeHeroEat);

function changeHeroRide() {
  heroTitle.innerText = "Request a ride now";
  heroPar.innerText = "Maintenance...";
  heroBtn1El.innerText = "Request now";
  heroBtn2El.innerText = "Schedule for later";
  heroSection.style.backgroundImage = "url('./assets/images/hero3.png')";
  driveAll.style.border = "none";
  eatAll.style.border = "none";
  rideAll.style.borderBottom = "4px solid var(--color-dark)";
}

rideEl.addEventListener("click", changeHeroRide);
