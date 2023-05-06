let site1 = document.getElementById("site1");
let site2 = document.getElementById("site2");

function showSite(siteNum) {
    if (siteNum == 1) {
        site1.classList.add("active");
        site2.classList.remove("active");
        document.querySelector(".buttons button:nth-child(1)").classList.add("active");
        document.querySelector(".buttons button:nth-child(2)").classList.remove("active");
    } else {
        site2.classList.add("active");
        site1.classList.remove("active");
        document.querySelector(".buttons button:nth-child(2)").classList.add("active");
        document.querySelector(".buttons button:nth-child(1)").classList.remove("active");
    }
}

document.querySelector(".buttons button:nth-child(1)").addEventListener("click", function() {
    showSite(1);
});

document.querySelector(".buttons button:nth-child(2)").addEventListener("click", function() {
    showSite(2);
});


