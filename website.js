document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            const content = this.previousElementSibling;

            if (content.classList.contains("show")) {
                content.classList.remove("show");
                this.textContent = "Read More";
            } else {
                content.classList.add("show");
                this.textContent = "Read Less";
            }

        });
    });

});

// Typing effect
document.addEventListener("DOMContentLoaded", function () {

    const textElement = document.querySelector(".typing-text");
    if (!textElement) return;

    const fullText = textElement.getAttribute("data-text");
    let index = 0;

    function type() {
        if (index < fullText.length) {
            textElement.textContent += fullText.charAt(index);
            index++;
            setTimeout(type, 40);
        }
        // IMPORTANT: do nothing when finished.
        // Cursor will keep blinking automatically via CSS.
    }

    type();
});