// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
var randomItem1 = myArray[Math.floor(Math.random()*(myArray.length+1))];

document.body.innerHTML = "test "+randomItem+" Test "+randomItem1;