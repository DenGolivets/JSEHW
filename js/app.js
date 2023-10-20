const appForm = document.querySelector('.app-form');
const appList = document.querySelector('.app-list');

function createTask(title, text) {
    const li = document.createElement("li");
    const appTitle = document.createElement("h2");
    const appText = document.createElement("p");
    const deleteButton = document.createElement("button");

    appTitle.textContent = title;
    appText.textContent = text;
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
    appList.removeChild(li);
    });

    li.appendChild(appTitle);
    li.appendChild(appText);
    li.appendChild(deleteButton);
    appList.appendChild(li);
    applyStyles(deleteButton, "random-color", "flat-button");
    applyStyles(appText, "custom-font");
}

appForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("app-title").value;
    const text = document.getElementById("app-text").value;
    if (title && text) {
    createTask(title, text);
    appForm.reset();
    }
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyStyles(element, ...styles) {
    element.classList.add(...styles);
    if (styles.includes("random-color")) {
    element.style.backgroundColor = getRandomColor();
    }
}

  
        // deleteButton.classList.add("flat-button");
        // deleteButton.classList.add('delete-button-styles');
        // appText.classList.add("custom-font");


