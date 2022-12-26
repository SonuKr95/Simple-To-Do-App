"use strict"; //https://www.w3schools.com/js/js_strict.asp

const task = document.querySelector(".task");
const addButton = document.querySelector(".add");
const task_container = document.querySelector(".task-container");
const deleteButton = document.querySelectorAll(".delte");

addButton.addEventListener("click", () => {
  /*
Check the condition that if user try to add empty value in the task field it gives an alert, else the code continue to execute
*/

  if (task.value.length === 0) {
    alert("Task field cannot be empty");
  } else {
    let toDO = document.createElement("p"); //creates a paragraph HTML element
    toDO.className = "mytodo"; //setting the class name of the dynamically created paragaph elemt
    let delButton = document.createElement("button"); //creates a button HTML element
    let buttonText = document.createTextNode("X");
    delButton.appendChild(buttonText); //appended the button text in the dynamically created  button
    toDO.textContent = task.value; //setting the text content of todo paragraph = user input task
    task_container.appendChild(toDO); //appended the todo paragraph in the div task_container
    toDO.appendChild(delButton); //appended the delete button iside the todo paragraph
    delButton.className = "delte"; //setting the class name of the dynamically created button
  }
});

/*Added the click event listener on the .task-container div which the parent of the paragraph element,
https://www.freecodecamp.org/news/event-delegation-javascript/
added if condition to check that if event is happend in the delete button,
added event composed path on the event button 
https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
The composedPath() method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked.
now checking the element class name, if element class name === mytodo
then setting the style of the mytodo paragraph to none
*/

task_container.addEventListener("click", function (e) {
  if (e.target.classList.value == "delte") {
    e.composedPath().forEach((element) => {
      if (element.className != "mytodo") {
      } else {
        element.style.display = "none";
      }
    });
  }
});
