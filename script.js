const pButton = document.getElementById("p-button");
const imgButton = document.getElementById("img-button");
const pDiv = document.getElementById("p-div");
const imgDiv = document.getElementById("img-div");

pDiv.style.display = "none";
imgDiv.style.display = "none";

pButton.addEventListener("click", function () {
    pDiv.style.display = "block";
    imgDiv.style.display = "none";

    const p = document.createElement("p");
    p.textContent = "This is a new paragraph!";

    p.style.backgroundColor = "black";
    p.style.color = "white";
    p.style.padding = "10px";

pDiv.appendChild(p);
});


imgButton.addEventListener("click", function () {
    imgDiv.style.display = "block";
    pDiv.style.display = "none";

    const img = document.createElement("img");
    img.src = "https://picsum.photos/200";
    img.alt = "Random image";
    img.width = 200;

    imgDiv.appendChild(img);
});