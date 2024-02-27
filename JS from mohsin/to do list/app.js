const inputFeild = document.querySelector(".input-feild");
const btn = document.querySelector(".btn-submit");
let list = document.querySelector("#list");
const h2 = document.querySelector(".message");

// Global Values

let count = 0;
function checkTodo() {
    if (count === 0) {
        h2.style.display = "block";  // block means show
    } else {
        h2.style.display = "none";
    }
}

// Event Listeners

btn.addEventListener("click", addTodo);
list.addEventListener("click", deleteAndCompleteTodo);

// Functions

function addTodo(e) {
    checkTodo();
    e.preventDefault();
    const inputValue = inputFeild.value;
    // Create div
    const div = document.createElement("div");
    // create li
    const li = document.createElement("li");
    li.innerText = inputValue;
    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    // create complete button
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";

    div.appendChild(li);
    div.appendChild(deleteBtn);
    div.appendChild(completeBtn);

    list.appendChild(div);
    count++;
    checkTodo();

    inputFeild.value = "";
}

function deleteAndCompleteTodo(e) {
    if (e.target.innerText === "Complete") {
        e.target.parentElement.classList.toggle("complete");
    }

    if (e.target.innerText === "Delete") {
        e.target.parentElement.remove();
        count--;
        checkTodo();
    }
}

// const div = document.getElementById("div");
// const list = document.getElementById("list");
// const item = document.getElementById("item");
// const link = document.getElementById("link");

// div.addEventListener("click", function (event) {
//     if (event.target.classList.contains("link")) {
//         console.log(event.target);
//     }
// });

// list.addEventListener("click", function () {
//     console.log("Event Called on List");
// });

// item.addEventListener("click", function () {
//     console.log("Event Called on Item");
// });

// link.addEventListener("click", function () {
//     console.log("Event Called on Link");
// });