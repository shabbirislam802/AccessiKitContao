document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('toggle-widget').addEventListener('click', () => {
        const widgetContent = document.getElementById('widget-content');
        widgetContent.style.display = widgetContent.style.display === 'none' ? 'block' : 'none';
    });

    function loadAccordionData() {
        const widgetContent = document.getElementById('widget-content');

        function createAccordion(data, type) {
            const section = document.createElement('div');
            section.innerHTML = `<h3 style='background:#f0f0f0; padding:5px;'>${type.toUpperCase()}</h3>`;
            data.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'accordion-item';

                const itemHeader = document.createElement('h4');
                itemHeader.style = 'cursor:pointer; padding:5px; background:#ddd;';
                itemHeader.textContent = item.name;

                const itemContent = document.createElement('div');
                itemContent.className = 'accordion-item-content';
                itemContent.style.display = 'none';

                // Toggle Funktion
                itemHeader.addEventListener('click', () => {
                    itemContent.style.display = itemContent.style.display === 'none' ? 'block' : 'none';
                });

                // Kriterien laden
                item.criteria.forEach(criteria => {
                    const criteriaDiv = document.createElement('div');
                    criteriaDiv.style = 'padding:5px 10px; border-bottom:3px solid #000;';
                    criteriaDiv.setAttribute('data-result', criteria.result); // Dynamische Farbzuweisung

                    // WCAG Link oder Text
                    const wcagContent = criteria.wcag.wcag_level
                        ? `<a href='${criteria.wcag.link}' target='_blank'>${criteria.wcag.name}</a>`
                        : criteria.wcag.name;

                    // HTML-Inhalt für das Kriterium
                    criteriaDiv.innerHTML = `
        <strong>${criteria.name}</strong><br>
        <p>${criteria.description}</p>
        <div>WCAG: ${wcagContent}</div>
        <div>Solution: ${criteria.solution}</div>
        <div>Result: ${criteria.result}</div>
    `;
                    itemContent.appendChild(criteriaDiv);
                });



                itemDiv.appendChild(itemHeader);
                itemDiv.appendChild(itemContent);
                section.appendChild(itemDiv);
            });
            widgetContent.appendChild(section);
        }

        // Accordion für Elemente und Module laden
        createAccordion(jsonElement.contao_object, 'Content Elements');
        createAccordion(jsonModule.contao_object, 'Modules');
    }

    // Daten beim Laden der Seite laden
    loadAccordionData();
})
