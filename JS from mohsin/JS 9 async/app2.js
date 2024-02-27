const input = document.getElementById("searchInput")
const btn = document.getElementById("submit")
const output = document.getElementById("output")

function getPage(pageNumber) {
    // Step 1 
    const request = new XMLHttpRequest();

    // Step 2
    request.open("GET", `http://api.alquran.cloud/v1/page/${pageNumber}/en.asad`);

    // Step 3
    request.send();

    // Step 4
    request.addEventListener("load", function() {
        // const response = JSON.parse(this.responseText);
        // // const page = response.data.text;
        // // output.innerText = page;
        // console.log(response);
        // console.log(this.responseText);
        // // output.innerText = page;
        const response = JSON.parse(this.responseText);
        const ayah = response.data.text;
        output.innerText = ayah;
    });
}

btn.addEventListener("click", function(e) {
    e.preventDefault();
    const pageNumber = input.value;
    getPage(pageNumber);
    console.log(pageNumber);
}); 




