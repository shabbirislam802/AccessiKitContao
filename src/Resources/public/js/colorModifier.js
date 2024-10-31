document.addEventListener("DOMContentLoaded", function () {
    if (settings[0]['extended_color_function'] == '1') {
        document.querySelectorAll('[data-text-color], [data-background-color], [data-header-color]').forEach(function (element) {
            const textColor = element.getAttribute('data-text-color');
            const backgroundColor = element.getAttribute('data-background-color');
            const headerColor = element.getAttribute('data-header-color');

            // Apply text color to all child elements that are not buttons or links
            if (textColor) {
                element.querySelectorAll('*:not(button):not(a)').forEach(function (child) {
                    child.style.color = '#' + textColor;
                });
            }

            // Apply background color to button and link (a) child elements
            if (backgroundColor) {
                element.querySelectorAll('button, a').forEach(function (child) {
                    child.style.backgroundColor = backgroundColor;
                });
            }

            // Apply header color to all h elements with font size greater than 18px
            if (headerColor) {
                element.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function (header) {
                    const fontSize = window.getComputedStyle(header).fontSize;
                    if (parseFloat(fontSize) > 18) {
                        header.style.color = '#' + headerColor;
                    }
                });
            }
        });
    }
});
