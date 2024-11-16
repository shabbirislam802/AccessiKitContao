document.addEventListener("DOMContentLoaded", function () {
    if (settings[0]['extended_color_function'] == '1') {
        document.querySelectorAll('[data-text-color], [data-background-color], [data-header-color]').forEach(function (element) {
            const textColor = element.getAttribute('data-text-color');
            const backgroundColor = element.getAttribute('data-background-color');
            const headerColor = element.getAttribute('data-header-color');

            if (textColor) {
                element.querySelectorAll('*').forEach(function (child) {
                    child.style.color = '#' + textColor;
                });
            }

            if (backgroundColor) {
                element.querySelectorAll('button, a').forEach(function (child) {
                    child.style.backgroundColor = '#' + backgroundColor;
                });
            }

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
