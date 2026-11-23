
// UPDATE FOOTER YEAR

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// HIGHLIGHT THE SELECTED MENU SECTION

const links = document.querySelectorAll(".menu a");

// Identify the current page
const currentPage = window.location.pathname.split("/").pop() || "index.html";

// Automatically highlight the current page
links.forEach(function(link) {

    const destination = link.getAttribute("href");

    // Ignore links that point directly to sections
    if (destination && !destination.includes("#")) {

        if (destination === currentPage) {
            link.classList.add("active");
        }

    }

});


// UPDATE ACTIVE LINK WHEN CLICKING THE MENU

links.forEach(function(link) {

    link.addEventListener("click", function() {

        links.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});
