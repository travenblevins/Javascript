

function displayContent(selector, content) {
    selector = document.getElementById(selector);
    selector.textContent = content;
}

export { displayContent };