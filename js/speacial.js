//{3} Store (current value of the color in the name of its key ) in the local storage by getItem.

let mainColor = localStorage.getItem("color option");

// The logic to store values:

if(mainColor !== null){
    
// Store in local storage mainColor the value of mainColor,// documentElement:Gets a reference to the root(--main-color) node of the document.

document.documentElement.style.setProperty("--main-color", mainColor );

// Remove active class from all li

document.querySelectorAll(".colors-list li").forEach(li => {

    li.classList.remove("active");

    //Add active class using if the current color in local storage equal to setdata in datacolor

    if(li.dataset.color === mainColor){

        // Add class active

        li.classList.add("active")
    }
})
}


//{4} this moved here to allow local storage  see it, Random Background option as long as the condition is true the background image will display randomaly 

let backgroundOption=true; 

// Creating variable to control randomize background display Interval 

let backgroundInterval;

//{6} Check if there's local storage random backgroun item
let backgrounLocalItem = localStorage.getItem("background option");

//check if the local storage null to store values in local storage while refreshing

if(backgrounLocalItem !== null ) {

document.querySelectorAll(".random-background span").forEach(e => {
    e.classList.remove("active")});

if(backgrounLocalItem ==='true'){

    // Keep active on yes

    backgroundOption = true;
    randomaizeImages();
    document.querySelector(".random-background .yes").classList.add("active");
}

else {
    backgroundOption = false;
    clearInterval(backgroundInterval);
    document.querySelector(".random-background .no").classList.add("active");
}
}

// {1} Add class spin to the gear on click using ready fa-spin class  from fontawesome library.

 let spin = document.querySelector(".toggle .fa-cog");

spin.onclick = function(){

//	Toggles between tokens (fa-cog and fa-spin) in the list on click on gear on and off like switch.

    this.classList.toggle("fa-spin");

    let openSettings = document.querySelector(".setting-box");

//Onclick on gear it adds open token and remove it when on click on gear again, on and off like switch.  

    openSettings.classList.toggle("open");
}

//{2}  Switch Colors:

 const colorList = document.querySelectorAll(".colors-list li")

colorList.forEach(li =>{

//Change the maincolor in the root to the click element target using docmentElement , setProperty and call color by calling dataset and its value is color which acquired
li.addEventListener("click",(element) => {

// Set color value of clicked(element.currentTarget) li to --main-color by setProperty.

   document.documentElement.style.setProperty("--main-color",element.currentTarget.dataset.color);

   // Set color on local storage using setItem(key (the value which in the getItem),value --main-color which is element.currentTarget.dataset.color the same).

   localStorage.setItem("color option",element.currentTarget.dataset.color);
  
   //Handel classActive

 classActive(element);
})
})

// {5} Swich random background-image option:

const backgroundImage = document.querySelectorAll(".random-background span")

//Loop on all spans in this called element 

backgroundImage.forEach(span => {

//Add on every span event click  

span.addEventListener("click",(element) => { 

// Search in the clickable element that it targeted start from the parent element div random background for calss active 

   if(element.currentTarget.dataset.background === "yes"){
    // in yes case make the option true and run function 
    backgroundOption = true;

     randomaizeImages();
     //store in the local storage
     localStorage.setItem("background option",true);
   }

   else { // in no case make the option false and clear the interval 
    backgroundOption = false;
    clearInterval(backgroundInterval);
    localStorage.setItem("background option",false);
   }
   classActive(element);
})
})

//{4}  Function randomize images 

let landingPage= document.querySelector(".landing-page");

// Create array's image write the name of the images

let imgsArray=["01.jpg","02.jpg","03.jpg","04.webp","05.png"];

function randomaizeImages(){

if(backgroundOption === true){

// Set time to display random image using setInterval method calls a function at specified intervals (in milliseconds) ,continues calling the function until clearInterval() is called, or the window is closed.

backgroundInterval = setInterval(() => {

// Get Random number this number will be between (1 and 5 it wont be 0 because length desn't return zero) the number of the images' array length and write approximate floor to the upper number because it returns float number with comma

let randomNumber = Math.floor(Math.random()*imgsArray.length);


// Change the current image

landingPage.style.backgroundImage= 'url(" image/'+ imgsArray[randomNumber] +'")'
}, 10000);
}

}
randomaizeImages();

//{7} Select skills selector

let ourSkill = document.querySelector(".skilles");

window.onscroll = function(){

    //Skills offest top
    let skillsOffsetTop = ourSkill.offsetTop;
//  console.log(skillsOffsetTop) THE POSITION of skills ON SCROLL TOP IN PIXELS
    //Skills outer height
    let skillsOutrHeight = ourSkill.offsetHeight;
    // console.log(skillsOutrHeight) the height of skils with padding margin

    // Window height
    let windowHeight = window.innerHeight;
// console.log(windowHeight) the height of the window which contains the template and occures scrolling
    //Window scroll top
    let windowScrollTop =window.scrollY;
    // console.log(windowScrollTop)returns the position of each element in the woindow from top to bottom the called element (skilles) 
    if(windowScrollTop > ( windowHeight - skillsOffsetTop + skillsOutrHeight ))
     { 
        // if the element which is scrolling bigger than ( skills with its position and its height subtracted with window height )
// loop on all spn to dispay data-progress
let allSkills = document.querySelectorAll(".progress-box .progress-holder span")
allSkills.forEach(skill => {
    skill.style.width = skill.dataset.progress;
})
}
}
//{8} Create popup with the image
//first store images in array 
let gallery = document.querySelectorAll(".gallery img")

// After querySelectorAll there's loop forEach
gallery.forEach(img => {

    // in this loop need to do click and event to excute motion 
    img.addEventListener("click",(e) => {
        // Create overlay element 
        let overLay = document.createElement("div");

        // Add class to overLay which later will designe in css
        overLay.className = "popup-overlay";

// Append overlay to the body
document.body.appendChild(overLay);

// 1-Create popup box
let popupBox = document.createElement("div");

//2-Add className to popup box
popupBox.className = "popup-box";

// Create heading to the image
let headingImage = document.createElement("h3");

// craete text for the heading Image which is the alternative text of the img
let textHeading = document.createTextNode(img.alt);

//In case ther's an alt 
if(textHeading !== null){
//Append textHeading to headingImage
headingImage.appendChild(textHeading);

}

//Append headingImage to popupBox
popupBox.appendChild(headingImage); 

// Create the image
let popupImage = document.createElement("img");

// Set image source when click on the img it took clickative img source 
popupImage.src = img.src;

// Add popupimage to popupbox
popupBox.appendChild(popupImage);

// 3-After images became inside the popupbox Append popup box to body then the final step is 4- css designe
document.body.appendChild(popupBox);

// Create close button
let closeButton = document.createElement("span");

// Create X inside span
let textButton = document.createTextNode("X");

//Append X to Spann
closeButton.appendChild(textButton);

//Add class to close button to design it in css
closeButton.className = "close-button";

//Append close button to popup box
popupBox.appendChild(closeButton);



 })
});

// Remove popup box by clicking on close button as it is a created element not existed in html so when click happens must in document
document.addEventListener("click", (event) => {

    if(event.target.className == "close-button")
    {

        //Remove the current popup which is the parent
        event.target.parentNode.remove()
        document.querySelector(".popup-overlay").remove();
        // target property returns the element on which the event occurred here the occured event is box so it returns box and do the removing action , incotaray the currentTarget property ,which returns element whose event listener trigged the event here it return close-button  
    }
});
// {9} Bullets and nav bar links
 const bullets = document.querySelectorAll(".navigation-bullets .bullet");
 const links = document.querySelectorAll(".nav a");
function scrollToaSomeWhere(elements) { 
    // elements which must click on them to go over the speacific destination
    // the element in foreach is the single iteam in the elements
    // the e in eventListener is the function that will occure
    elements.forEach(element => {

        element.addEventListener("click", e => {
            e.preventDefault();
document.querySelector(e.target.dataset.section).scrollIntoView({
behavior:'smooth'}
)
})

        } )
    }
scrollToaSomeWhere(links);
scrollToaSomeWhere(bullets); 

// {2} Handle Active class
function classActive(ev) {

    // Loop on all elements with class active

    ev.target.parentElement.querySelectorAll(".active").forEach(e => {
        // Remove active class 
    e.classList.remove("active")
       });
       //Add classlist to target element li
       ev.target.classList.add("active")
};

// {10} Display Bullets

let bulletsSpan = document.querySelectorAll(".display-bullets span");

let navigationBullets = document.querySelector(".navigation-bullets");

let localStorageBullets = localStorage.getItem("bullets-option");

// Store class active and values to local storage

if (localStorageBullets !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove(".active");

    });

  if (localStorageBullets==='block') {
    
    // Store the value of navigation bullets dispaly block to keep it in localStorage after refreshing
    navigationBullets.style.display = 'block';
// Store active class for show  element in local storage
    document.querySelector(".display-bullets .yes").classList.add("active");

  }

  else{
     // Store the value of display in local storage to keep it in localStorage after refreshing in case of local storage = 'block'
     navigationBullets.style.display = 'none';

     // Store active class in local storage in case of hide elment

     document.querySelector(".display-bullets .no").classList.add("active");
  }
}
//Handle bullets hide and show
bulletsSpan.forEach(span => {
   span.addEventListener("click" , e => {

    classActive(e);

   if(span.dataset.display==='show'){

    navigationBullets.style.display = 'block';

    //Add values to local storage

    localStorage.setItem("bullets-option",'block');

   }
   else {

    navigationBullets.style.display = 'none';

    //Add values to local storage

    localStorage.setItem("bullets-option",'none');

   }});
});

// Reset Option

document.querySelector(".reset-option").onclick = function () {

// Remove items from localstorage 
localStorage.clear();
// localStorage.removeItem("color option");
// localStorage.removeItem("background option");
// localStorage.removeItem("bullet-option");
    
//Reload window
window.location.reload();
};
 
// {11} Contact input
// {12} Store mode options 
let modeStorage = localStorage.getItem("mode option");

if(modeStorage !== null){

    document.body.classList.add(modeStorage);  
}


const inputs = document.querySelectorAll(".contact-input");
const mode = document.querySelector(".mode");
const allElement = document.querySelectorAll("*");
mode.addEventListener("click" , () => {
    document.body.classList.toggle("dark");
    allElement.forEach(el => {
        el.classList.add("transition");
        setTimeout(() => {
            el.classList.remove("transition")
        }, 1000);
    })
    localStorage.setItem("mode option",document.body.classList.contains("dark") ? "dark" : "day");
    //the body element has the class "dark" or not. The classList.contains("dark") method returns true if the class "dark" is present in the class list of the element, and false otherwise.
//condition ? expressionIfTrue : expressionIfFalse; ? means if the condition is true it evaluate the expression after ? if not the next one after : 
//body.classList.contains("dark") ? "dark" : "day": This is a ternary operator. If the condition (body.classList.contains("dark")) is true, it evaluates to the value before the : (colon), which is "dark". If the condition is false, it evaluates to the value after the colon, which is "day".
})
inputs.forEach(inp => {
    inp.addEventListener("focus", ()=> {
inp.parentNode.classList.add("focus");
inp.parentNode.classList.add("not-empty");

    });
    inp.addEventListener("blur", ()=> {
        
        if (inp.value == "") {
            inp.parentNode.classList.remove("not-empty");
        }
        inp.parentNode.classList.remove("focus");
            });
});

// Display sort-top and nav menu

let toggleBtn = document.querySelector(".toggle-menu");
let nav = document.querySelector(".nav");

toggleBtn.onclick = function(e) {
    e.stopPropagation();
    this.classList.toggle("menu-active");
    nav.classList.toggle("open");
};

//Click outside the menu to close it

document.addEventListener("click", (e) => {

    if(e.target!==toggleBtn && e.target!== nav){
      
// Check if the menu has open class
if(nav.classList.contains("open")){
    // Switch between class
    toggleBtn.classList.toggle("menu-active");
    nav.classList.toggle("open");
  
}

    }
    
});

//Stop Propagation on click on menu

nav.onclick = function(ev){
    ev.stopPropagation();
}







