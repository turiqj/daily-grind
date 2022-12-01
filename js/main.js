//alert("hola!");

/*

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page 
    that rotates unique colors and content for each weekday (Sunday to Saturday) 
    into the page.  The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item 
    (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content

    the items we need are:

    image (a pic of the coffee)
    alt (a description of the pic of people who can't see it)
    description (a note about the coffee)
    weekday
    color (to support the coffee)

    The unique color could affect the background HTML, or an element on the page for each day of the week.  
    All of the above must occur within one page.

*/

function coffeeTemplate(coffee){
    return `<p>  
            <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
             <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee<strong> ${coffee.name}</strong>, ${coffee.desc}
            </p>`;
}

let myDate = new Date();
let today= myDate.getDay();
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 //convert the string to an integer 
 today = parseInt(today);

switch(today){
    case 0:
        today = "Sunday";
        coffee = {
            color:"purple",
            name:"Frappaccino",
            pic:"frappaccino.jpg",
            alt:"A picture of a frappaccino",
            day:"Sunday",
            desc:`Frappaccino's are elite, even on a Sunday!`

        };
        break;
   
    case 1:
        today = "Monday";
        coffee = {
            color:"pink",
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A picture of a bubble tea",
            day:"Monday",
            desc:`I like me some bubble tea!`

        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color:"brown",
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A picture of a caramel latte",
            day:"Tuesday",
            desc:`It's cold, so a caramel latte sounds good right now!`

        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color:"black",
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A picture of a cold brew",
            day:"Wednesday",
            desc:`I need some serious caffeine, give me some cold brew!`

        };
        break;

        case 4:
        today = "Thursday";
        coffee = {
            color:"Blue",
            name:"Drip",
            pic:"drip.jpg",
            alt:"A picture of drip coffee",
            day:"Thursday",
            desc:`I need my drip coffee now!`

        };
        break;

        case 5:
            today = "Friday";
            coffee = {
                color:"Green",
                name:"Mocha",
                pic:"mocha.jpg",
                alt:"A picture of a mocha coffee",
                day:"Friday",
                desc:`I like me some mocha!`
    
            };
            break;

            case 6:
                today = "Saturday";
                coffee = {
                    color:"Orange",
                    name:"Pumpkin Spice Latte",
                    pic:"pumpkin-spice-latte.jpg",
                    alt:"A picture of a pumpkin spice latte",
                    day:"Saturday",
                    desc:`Pumpkin Spice is so good, especially on a fall day!`
        
                };
                break;
    

    default:
        alert("Something went wrong!");
}

console.log(coffee);

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;