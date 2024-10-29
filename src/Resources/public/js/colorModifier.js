document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-text-color], [data-background-color]').forEach(function (element) {
        const textColor = element.getAttribute('data-text-color');
        const backgroundColor = element.getAttribute('data-background-color');

        // Textfarbe auf alle Kind-Elemente anwenden, die keine Buttons sind
        if (textColor) {
            element.querySelectorAll('*:not(button)').forEach(function (child) {
                child.style.color = '#' + textColor;
                console.log(child.style.color );
            });
        }

        // Hintergrundfarbe nur auf Button-Kind-Elemente anwenden
        if (backgroundColor) {
            element.querySelectorAll('button').forEach(function (button) {
                button.style.backgroundColor = backgroundColor;
            });
        }
    });
});
