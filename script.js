var txtArea = document.querySelector("#TxtArea");
var addBtn = document.querySelector("#addBtn");
var clr = document.querySelector("#colorInput");
var str = [];

txtArea.addEventListener("keydown", (x) => {
    if (x.key === "Backspace") {
        str.pop();
    } else if (x.key === "Enter") {
        str.push("\n");
    } else str.push(x.key);
});

addBtn.addEventListener("click", () => {
    str = str.join("");
    if (txtArea.value.trim() === "") {
        alert("Please Write Something.");
        txtArea.animate([
            { transform: 'translateX(6px)' },
            { transform: 'translateX(0)' },
            { transform: 'translateX(-6px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 150,
            easing: 'ease-in-out',
            iterations: 5
        });
        return;
    }

    var notesContainer = document.querySelector("#notes-container");

    // Create a new note div
    var newDiv = document.createElement("div");
    newDiv.className = "notes";
    newDiv.style.backgroundColor = clr.value;
    newDiv.innerText = str;
    newDiv.style.height = "fit-content";
    newDiv.style.width = "fit-content";
    newDiv.style.borderRadius = "7px";
    newDiv.style.padding= "2px";
    var crossBtn = document.createElement("button");
    crossBtn.innerHTML = "x";
    crossBtn.className = "delete-btn";
    crossBtn.style.backgroundColor = `${clr.value}`;
    crossBtn.style.padding = "5px";
    crossBtn.style.fontSize = "20px";
    crossBtn.style.border="none";
    crossBtn.style.cursor = "pointer"

    crossBtn.addEventListener("click", () => {
        notesContainer.removeChild(newDiv);
        if (notesContainer.children.length === 0) {
            document.querySelector("h4").style.display = "block";
        }
    });

    newDiv.appendChild(crossBtn);
    notesContainer.appendChild(newDiv);
    document.querySelector("h4").style.display = "none";

    str = [];
    txtArea.value = "";
});
