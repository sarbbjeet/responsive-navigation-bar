window.onload = () => {
    document.querySelector(".side-menu>.close").style.display = "none";
    document.querySelector(".side-menu>.menu").style.display = "block";
};

document.querySelector(".side-menu").addEventListener("click", () => {
    if (!document.querySelector("nav>ul").classList.contains("side-nav-active")) {
        document.querySelector(".side-menu>.close").style.display = "block";
        document.querySelector(".side-menu>.menu").style.display = "none";
        document.querySelector("nav>ul").classList.add("side-nav-active");
    } else {
        document.querySelector("nav>ul").classList.remove("side-nav-active");
        document.querySelector(".side-menu>.close").style.display = "none";
        document.querySelector(".side-menu>.menu").style.display = "block";
    }

    console.log("great");
});