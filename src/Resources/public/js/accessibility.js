document.addEventListener("DOMContentLoaded", function () {
    // Funktion zur Hinzufügung der Accessibility-Icons und des `required`-Attributs
    function addAccessibilityIcons() {
        const labelIds = [
            "ctrl_label", "ctrl_alt", "ctrl_titleText", "ctrl_linkTitle",
            "ctrl_caption", "ctrl_subtitleFile", "ctrl_audioDescription", "ctrl_subtitleLanguage",
            "ctrl_textColor", "ctrl_backgroundColor"
        ];

        labelIds.forEach(function(id) {
            const labelDiv = document.querySelector(`label[for="${id}"]`);

            if (labelDiv) {
                // Überprüfen, ob das Accessibility-Icon bereits existiert
                if (!labelDiv.parentNode.querySelector('.accessibility-icon-container')) {
                    const iconDiv = document.createElement('div');
                    iconDiv.classList.add('accessibility-icon-container');
                    iconDiv.innerHTML = `
                        <span style="display: flex; align-items: center;">
                            <i class="fas fa-wheelchair" style="color: blue;"></i>
                        </span>
                    `;
                    labelDiv.parentNode.appendChild(iconDiv);
                }
            }

            const inputField = document.querySelector(`#${id}`);

            // Füge das required-Attribut hinzu
            if (inputField) {
                inputField.setAttribute('required', 'required');
            }
        });
    }

    // Funktion beim Laden der Seite ausführen
    addAccessibilityIcons();

    // Event-Listener für die Checkbox, die die Funktion erneut ausführt
    const checkbox = document.querySelector('#opt_overwriteMeta_0'); // Ersetze mit der ID der Checkbox

    if (checkbox) {
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                addAccessibilityIcons(); // Funktion erneut ausführen, wenn die Checkbox aktiviert wird
            }
        });
    }
});
