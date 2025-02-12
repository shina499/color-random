let btn = document.getElementById("Button");
let codeText = document.getElementById("code");

function changeColor() {
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let red = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert("متن با موفقیت کپی شد! ✅"))
        .catch(err => console.error("خطا در کپی کردن متن: ", err));
}

btn.addEventListener("click", function() {
    let color = changeColor();
    copyToClipboard(color);
    document.body.style.backgroundColor = color;
    codeText.innerHTML = color;
}); 


