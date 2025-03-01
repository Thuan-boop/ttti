document.getElementById("yesButton").addEventListener("click", function() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("loveMessage").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth * 0.8;
    let y = Math.random() * window.innerHeight * 0.8;
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
