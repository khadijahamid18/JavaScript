// API
// Application programming Interface

// AJAX Call
// Async Javascript and XML
// JSON = Javascript Object Notation

// 4 types of request
// GET , POST , PUT / patch , Delete

// http://api.alquran.cloud/v1/ayah/262

// 1 Xmlhttprequest object
// 2 Promises
// 3 async await


// Today's topic is only get request

const input = document.getElementById("searchInput");
const submitBtn = document.getElementById("submit");
const output = document.getElementById("output");
const tOutput = document.getElementById("toutput");
const form = document.querySelector('form');

function getAyah(ayahNumber) {
    // Step 1
    const request = new XMLHttpRequest();
    const request2 = new XMLHttpRequest();
    // Step 2
    request.open("GET", `http://api.alquran.cloud/v1/ayah/${ayahNumber}`);
    request2.open(
        "GET",
        `http://api.alquran.cloud/v1/ayah/${ayahNumber}/en.asad`
    );
    // Step 3
    request.send();
    request2.send();
    // Step 4
    request.addEventListener("load", function () {
        const response = JSON.parse(this.responseText);
        const ayah = response.data.text;
        output.innerText = ayah;
    });

    request2.addEventListener("load", function () {
        const response = JSON.parse(this.responseText);
        const ayah = response.data.text;
        tOutput.innerText = ayah;
    });
}

// submitBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     const ayahNumber = input.value;
//     getAyah(ayahNumber);
// });

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ayahNumber = input.value;
    getAyah(ayahNumber);
})