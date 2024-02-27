function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {
    this.title = document.getElementById("title").value;
    this.author = document.getElementById("author").value;
    this.isbn = document.getElementById("isbn").value;
    this.list = document.getElementById("list");
    this.msg = document.getElementById("msg");
}

UI.prototype.addNewBook = function (book) {
    const tableRow = document.createElement("tr");

    tableRow.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><button class="btn btn-danger btn-sm">Remove</button></td>
    `;

    this.list.appendChild(tableRow);
};

UI.prototype.showMsg = function (msg, className) {
    this.msg.innerText = msg;
    this.msg.classList.add(className);
    this.msg.classList.remove("d-none");

    setTimeout(() => {
        this.msg.innerText = "";
        this.msg.classList.remove(className);
        this.msg.classList.add("d-none");
    }, 3000);
};

UI.prototype.removeBook = function (target) {
    if (target.classList.contains("btn")) {
        target.parentElement.parentElement.remove();
    }
};

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const ui = new UI();

    if (!ui.title || !ui.author || !ui.isbn) {
        ui.showMsg("All Inputs are required.", "alert-danger");
    } else {
        const book = new Book(ui.title, ui.author, ui.isbn);
        ui.addNewBook(book);
        ui.showMsg("Book Added Successfully.", "alert-success");
    }
});

document.getElementById("list").addEventListener("click", function (e) {
    const ui = new UI();

    ui.removeBook(e.target);
    ui.showMsg("Deleted successfully.", "alert-success");
});