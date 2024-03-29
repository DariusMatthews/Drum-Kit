//adding event listener to button
//specifying a click event
//setting the click event to run handleClick function
//no () needed on function
document.querySelector("button").addEventListener("click", handleClick);

// function that reacts when button gets click
function handleClick() {
  alert("I got clicked!");
}

// also can be done like this
// called an anonymous function
document.querySelectorAll("button")[2].addEventListener("click", function () {
  alert("I got clicked!");
});

// adding event listener for document to hear keyboard presses
document.addEventListener("keydown", function(event) {
  // event.key gives input of which key was pressed
  makeSound(event.key);
  buttonAnimantion(event.key);
});

//creating variable for array of buttons
var drumButtons = document.querySelectorAll(".drum");

// for loop for every button click
for (var i=0; i <= drumButtons.length; i++) {

  drumButtons[i].addEventListener("click", function () {
    //'this' calls an objects' elements
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimantion(buttonInnerHTML);
  });
}

//creating function that takes variable input and sound output
function makeSound(key) {

  //switch statements to specify sound per input
  switch (key) {
    // defining case instance by text inside buttons
    case "w":
      //creating variable for audio
      var crash = new Audio('sounds/crash.mp3');
      //.play() to play variable
      crash.play();
    break;

    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    //similar to else statements
    default: console.log(key);

  }
}

//creating a function so buttons flash when clicked/keydown
function buttonAnimantion (currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  //timeout call to removed pressed class
  //100 is the amount of milliseconds before timeout
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
//passing functions as arguments

function add (num1, num2) {
  return num1 + num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

//using operator as dummy variable for functions
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

//calling the function
calculator(4,5,add);

// Constructor function
// first letter of function must be captialized
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  // creating method inside
  this.moveSuitcase = function () {
    alert("may i take your suitcase?");
    pickUpSuitcase();
    move();
  }
}
//creating bell boy object
var bellBoy1 = new BellBoy("Timmy", 19, true, ["french", "english"]);

bellBoy1.moveSuitcase();

// callback function - wait for an action to finish then execute functions
function anotherAddEventListener(typeOfEvent, callback) {

  var eventThatHappened = {
    evenType: "keypress",
    key: "p",
    durationOfKeypress: 2
  };

  if (eventThatHappened.evenType === typeOfEvent) {
    callback(eventThatHappened);
  }
}
