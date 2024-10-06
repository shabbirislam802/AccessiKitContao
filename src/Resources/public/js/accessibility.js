document.addEventListener("DOMContentLoaded", function () {
    const labelDiv = document.querySelector('label[for="ctrl_label"]');

    if (labelDiv) {
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('accessibility-icon-container');

        iconDiv.innerHTML = `
             <span style="display: flex; align-items: center;">
                <span style="border-radius: 50%; background-color: #007bff; color: white; padding: 10px; font-size: 24px;">
                    &#x267F;
                </span>
                <span style="margin-left: 10px;">Barrierefreiheit</span>
            </span>
        `;

        labelDiv.parentNode.appendChild(iconDiv);
    }

    const inputField = document.querySelector('#ctrl_label');

    // Füge das required-Attribut hinzu
    if (inputField) {
        inputField.setAttribute('required', 'required');
    }
});
