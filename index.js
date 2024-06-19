space = document.getElementById("space");
story = document.getElementById("story");

texts = [
    "True Harbour",
    "Coming Soon",
    "*hopefully",
    "follow us on our socials",
    "see u soon :P"

];

for (i = 0; i < texts.length; i++) {
    line = document.createElement("div");
    line.classList.add("line");
    money = document.createElement("img");
    money.src = "money.jpg";
    line.appendChild(money);
    space.appendChild(line);
    money.addEventListener("mousedown", function() {
        story.innerHTML = texts[this];
    }.bind(i));
}
