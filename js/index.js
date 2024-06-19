space = document.getElementById("space");
story = document.getElementById("story");

texts = [
    "I won't show you guys what it feels like when their <div class=\"link\"><a href=\"/learn\">gay</a></div> cell is \"vibrating,\" but I can show you guys what it feels like when uneasiness is about to happen. I won't go entirely to uneasiness. But it's like I'm not trying to take away that feeling from people and I don't want people lying on me because it can only be a one time thing",
    "Under fear. I do believe Nicki Minaj has been sending money to <div class=\"link\"><a href=\"/lambda\">criminals</a></div> in Ayiti, Jamaica, and Trinidad. He said I have to pay him to leave me alone, either way he's mad because people think Trinidad means a place for transgenders.",
    "Please check this out. I believe it. I didn't want to <div class=\"link\"><a href=\"/lead\">break</a></div> people's heart but I can't keep this to myself with the way that investigation went. I started looking in to him then I saw interviews of her in the \"news.\"",
    "I never touched the liquid. I've never dealt with bad smell so I don't <div class=\"link\"><a href=\"/rubber\">want</a></div> to whatever it and honestly.",
    "He was set on <div class=\"link\"><a href=\"/import\">fire</a></div>."

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
