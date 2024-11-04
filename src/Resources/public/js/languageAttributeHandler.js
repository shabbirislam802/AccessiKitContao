document.addEventListener('DOMContentLoaded', function () {
    if (settings[0]['enable_language_setting'] == '1') {
        const elements = document.querySelectorAll('[data-element-language]');

        elements.forEach((element) => {
            const language = element.getAttribute('data-element-language');

            element.setAttribute('lang', language);

            element.removeAttribute('data-element-language');
        });
    }
});
