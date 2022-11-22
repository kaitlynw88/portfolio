console.log("Hello fellow developer! Welcome to my website, I hope you like it")


const projectContainer = document.getElementById("projectContainer");
const project = document.querySelector(".project");
const prevButton = document.getElementById("projectArrowPrev");
const nextButton = document.getElementById("projectArrowNext");

nextButton.addEventListener("click", () => {
    const projectWidth = project.clientWidth;
    projectContainer.scrollLeft += projectWidth;
});

prevButton.addEventListener("click", () => {
    const projectWidth = project.clientWidth;
    projectContainer.scrollLeft -= projectWidth;
});