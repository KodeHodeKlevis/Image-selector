document.getElementById("images").addEventListener("change", () => changeImg());

function changeImg() {
  const option = document.getElementById("images").value;
  const img = document.getElementById("img");

    if (option === "imgCat") img.src = `./images/cat.jpg`;
        else if (option === "imgPigeon") img.src = `./images/pigeon.jpg`;
        else if (option === "imgDog") img.src = `./images/dog.jpg`;
        else img.src = "";
}