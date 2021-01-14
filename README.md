
#Landing Page


## Dynamically build out Nav bar

1. Use JS to dynamically create a nav bar with associated anchor links

* Gather all sections and set the navItmes array to the id tag of each element
```javascript
let sectionz = document.getElementsByClassName("section");

sectionz = Array.from(sectionz);

const navItems = sectionz.map(element => {
   return element.id;
});
```

* Loop through the navItems array gathered by the above ```
.getElementsByClassName``` selector and style/link the elements 
accordingly.

```javascript
navItems.forEach(item=> {
    const navItem = document.createElement("li");
    const linked = document.createElement("a");
    navItem.classList.add("navbar_section", `${item}`);
    linked.href = `#${item}`;
    linked.textContent = item;
    navItem.setAttribute('id', `tar_id_${item}`);
    const index = navItems.indexOf(`${item}`);
    if(index === 0){
        navItem.classList.add("cls_active")
    }
    parent.appendChild(navItem);
    navItem.appendChild(linked);
});
```

## Sticky Nav Bar with Active States
2.Create a nav bar that always shows in the viewport letting the user know which section they're using which takes advantage of the intersection observer api.

 * Setup up the IntersectionObserver object on each to observe each section and provide a callback function that takes action when an object crosses the viewport threshold laid out in the options var

```javascript
const options = {
    threshold: 1
};

const observer = new IntersectionObserver(changeNav, options);


const sections = document.querySelectorAll(".section");
console.log(sections);
sections.forEach((section)=> {
    observer.observe(section);
});

```

  * Setup the callback function so when an entry(i.e section..) is showing in the viewport apply an active state class with css attributes to nav bar item that is being diplayed

```javascript
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
```