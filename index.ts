// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

//var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

function random1()
{
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  return randomItem;
}

  appDiv.innerText = random1();  


