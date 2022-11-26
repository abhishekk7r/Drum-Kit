var noOfDrumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonValue = this.innerHTML;
    makeSound(buttonValue);
    buttomAnimation(buttonValue);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttomAnimation(event.key);
});

const makeSound = (key) => {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(key);
      break;
  }
};


function buttomAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
