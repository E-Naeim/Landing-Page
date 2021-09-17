/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/*Define Global Variables*/

//Number of sections
let sectionsNumber = document.querySelectorAll("section");

//navbar
let nav = document.getElementById("navbar__list");

//current number paraghraph
const currentParagraph = document.getElementById("current_paragraph");

//counter
let counter = sectionsNumber.length;
currentParagraph.textContent = `Number of sections currently: ${counter}`;

//Main section
const mainSection = document.getElementById("sections_main");

//add new button
const addNew = document.getElementById("add_new");

//li

// build the nav
sectionsNumber.forEach((element, index, arry) => {
  let newLi = document.createElement("li");
  newLi.innerHTML = `<li class = "${element.getAttribute(
    "id"
  )}" data-nav = ${element.getAttribute(
    "data-nav"
  )}> <a  href = "#${element.getAttribute("id")}"> ${element.getAttribute(
    "data-nav"
  )} </a> </li>`;
  nav.appendChild(newLi);
});

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//Add new section FUNCTION
function addNewSection() {
  counter++;
  mainSection.insertAdjacentHTML(
    "beforeend",
    `<section id="section${counter}" data-nav="section ${counter}">
  <div class="landing__container">
    <h2>Section ${counter}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      fermentum metus faucibus lectus pharetra dapibus. Suspendisse
      potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
      lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
      convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
      eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
      nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
      lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
      tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
      vitae elit. Integer nec libero venenatis libero ultricies molestie
      semper in tellus. Sed congue et odio sed euismod.
    </p>
  
    <p>
      Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
      gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
      Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
      consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
      elementum tortor mollis non.
    </p>
  </div>
  </section>`
  );
  currentParagraph.textContent = `Number of sections currently: ${counter}`;
  sectionsNumber = document.querySelectorAll("section");
}

//Add new nav list FUNCTION
function navi() {
  nav.textContent = "";
  sectionsNumber.forEach((element, index, arry) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = `<li class = "${element.getAttribute(
      "id"
    )}" data-nav = ${element.getAttribute(
      "data-nav"
    )}> <a  href = "#${element.getAttribute("id")}"> ${element.getAttribute(
      "data-nav"
    )} </a> </li>`;
    nav.appendChild(newLi);
  });
}

//update sections and lists classes FUNCTION
function updateLists() {
  sectionsNumber.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - (sectionHeight - 10)) {
      current = section.getAttribute("id");
    }
  });

  sectionsNumber.forEach((section) => {
    section.classList.remove("your-active-class");
    if (section.id === current) {
      section.classList.add("your-active-class");
    }
  });

  let lists = document.querySelectorAll("li");
  lists.forEach((li) => {
    li.classList.remove("your-active-class");
    if (li.className === current) {
      li.classList.add("your-active-class");
    }
  });
}

// Scroll to anchor ID using scrollTO event

//End Main Functions

//Begin Events

//add new section and nav EVENTS
addNew.addEventListener("click", addNewSection);
addNew.addEventListener("click", navi);
window.addEventListener("click", updateLists);

// Set lists and sections as active EVENTS
window.addEventListener("load", updateLists);
window.addEventListener("scroll", updateLists);

//Scroll To Top Button
const button = document.getElementById("btn");
window.onscroll = function () {
  if (window.scrollY > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
