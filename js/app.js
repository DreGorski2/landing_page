//Creates a HTMLCollections of all elements with class section
let sectionz = document.getElementsByClassName("section");

//Convert the HTMLCollection object into an array object
sectionz = Array.from(sectionz);

//Set the navItems array object items to the id of the section id tags
const navItems = sectionz.map(element => {
   return element.id;
});

//Creates an element object variable for the nav bar so we can dynamically add elements to it
const parent = document.querySelector(".navbar");

//Loop through the section id's and create a list element and href link for each item section
navItems.forEach(item=> {
    const navItem = document.createElement("li");
    const linked = document.createElement("a");
    navItem.classList.add("navbar_section", `${item}`);
    linked.href = `#${item}`;
    linked.textContent = item;
    navItem.setAttribute('id', `tar_id_${item}`);
    // linked.classList.add("navItem__link");
    const index = navItems.indexOf(`${item}`);
    if(index === 0){
        navItem.classList.add("cls_active")
    }
    parent.appendChild(navItem);
    navItem.appendChild(linked);
});


// create a callback function for the intersection observer to use to apply styling to the elements activly being viewed
const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log(entry);
            //remove currently active section
            document.querySelector('.cls_active').classList.remove('cls_active');

            //get the target id of the active class
            const id = entry.target.getAttribute('id');

            // apply active state formatting to newly activated element
            document.querySelector(`[href="#${id}"]`).classList.add('cls_active')
        }
    });
};


const options = {
    threshold: 1
};

// setup intersection observer with a callback function
const observer = new IntersectionObserver(changeNav, options);

// loop over section telling the observer to observe each section
const sections = document.querySelectorAll(".section");
console.log(sections);
sections.forEach((section)=> {
    observer.observe(section);
});
