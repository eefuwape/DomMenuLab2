// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Task 1.0 Select and cache the <main> element in a variable named mainEl

let mainEl = document.querySelector("main")

// Task 1.1 Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

mainEl.style.backgroundColor = "var(--main-bg)"

// Task 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

// Task 1.3 Add a class of flex-ctr to mainEl

mainEl.classList.add("flex-ctr")

// Task 2.0 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl

const topMenuEl = document.querySelector("#top-menu")

// Task 2.1 Set the height topMenuEl element to be 100%

topMenuEl.style.height = "100%"

// Task 2.2 Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

// Task 2.3 Add a class of flex-around to topMenuEl

topMenuEl.classList.add("flex-around")

// Task 3.1 Iterate over the entire menuLinks array and for each "link" object:

// Create an <a> element.

// On the new element, add an href attribute with its value set to the href property of the "link" object

// Set the new element's content to the value of the text property of the "link" object

// Append the new element to the topMenuEl element

for (let i=0; i < menuLinks.length; i++) {
  let aEl = document.createElement("a")
  aEl.setAttribute("href", menuLinks[i].href.valueOf())
  aEl.textContent = menuLinks[i].text.valueOf()
  document.getElementById("top-menu").appendChild(aEl)
}

// Task 4.0
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

const subMenuEl = document.querySelector("#sub-menu")
console.log(subMenuEl)
// Task 4.1
// Set the height subMenuEl element to be 100%.

subMenuEl.style.height = "100%"

// Task 4.2
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

// Task 4.3
// Add the class of flex-around to the subMenuEl element.

subMenuEl.classList.add("flex-around")

// Task 4.4
// Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style.position = "absolute"

// Task 4.5
// Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.top = "40px"

// Task 5.1
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

const topMenuLinks = document.querySelectorAll("#top-menu a")
console.log(topMenuLinks)

// Declare a global showingSubMenu variable and initialize it to false;

let showingSubMenu = false

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault() method.

// The second line of code function should immediately return if the element clicked was not an <a> element.

// console.log the content of the <a> to verify the handler is working.

// Progress Check
// Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.

// Clicking anywhere other than on a link should do nothing.

topMenuEl.addEventListener("click", function(evt) {
  evt.preventDefault()
  if (evt.target.tagName !== "A") {
    console.log("A link was not clicked on.")
    console.log(evt.target.tagName)
  } else {
      console.log(evt.target.textContent)
  }    
})

// Task 5.3
// Next in the event listener, if the clicked <a> link has a class of active:

// Remove the active class from the clicked <a> element.
// Set the showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.
// return to exit the handler.

// Task 5.4
// Next, the event listener should remove a class name of active from each <a> element in topMenuLinks- whether the activeclass exists or not.

// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

// Task 5.5
// Next, the event listener should add a class name of activeto the <a>element that was clicked.

// Task 5.6
// Set showingSubMenuto trueif the clicked <a>element's "link" object within menuLinkshas a subLinksproperty (all do, except for the "link" object for ABOUT), otherwise, set it to false.

// Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7

// Progress Check
// Clicking any of the links should make that link "active" and clear the others: