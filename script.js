const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let rows = document.querySelectorAll("#tableBody tr");

    rows.forEach(row => {

        row.style.display =
        row.textContent.toLowerCase().includes(value)
        ? ""
        : "none";

    });

});
