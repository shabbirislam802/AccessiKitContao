document.addEventListener("DOMContentLoaded", () => {
    let pageAnalyticDomButton = document.getElementById('wa-analyse-btn');

    if (!pageAnalyticDomButton) {
        return;
    }

    pageAnalyticDomButton.addEventListener('click', () => {
        showLoader(true);
        let pageUrlDomSelect = document.getElementById('ctrl_pageSelect');
        let accuracyDomSelect = document.getElementById('ctrl_accuracyClass');
        let reportDomDiv = document.querySelector('#wa-report .conent #app');

        let pageUrl = pageUrlDomSelect.value;
        let reportType = accuracyDomSelect.value;

        if (!pageUrl || !reportType || !reportDomDiv) {
            return;
        }

        pageAnalyticDomButton.setAttribute('disabled', 'disabled');

        let fullPageUrl = window.location.origin + '/' + pageUrl;
        //fullPageUrl = 'https://dev.mayority-game.com/'
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        const {jsPDF} = window.jspdf;
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'pt',
            format: 'a4',
            lineHeight: 1.2
        });

        // TODO delete after dev
        /*let data =
            {
                "status": {
                    "success": true,
                    "httpstatuscode": 200
                },
                "statistics": {
                    "pagetitle": "Google",
                    "pageurl": "https://google.com/",
                    "time": 1.27,
                    "creditsremaining": 1487,
                    "allitemcount": 21,
                    "totalelements": 234,
                    "waveurl": "https://wave.webaim.org/report?url=https://google.com/"
                },
                "categories": {
                    "error": {
                        "description": "Errors",
                        "count": 4
                    },
                    "contrast": {
                        "description": "Contrast Errors",
                        "count": 2
                    },
                    "alert": {
                        "description": "Alerts",
                        "count": 5
                    },
                    "feature": {
                        "description": "Features",
                        "count": 1
                    },
                    "structure": {
                        "description": "Structural Elements",
                        "count": 5
                    },
                    "aria": {
                        "description": "ARIA",
                        "count": 4
                    }
                }
            };*/
        // END

        fetch(`https://wave.webaim.org/api/request?key=v8hHxuP53645&url=${fullPageUrl}&format=json&reporttype=${reportType}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                showLoader(false);

                let html = generateReportHtml(result);
                reportDomDiv.innerHTML = html;

                pageAnalyticDomButton.removeAttribute('disabled');
            })
            .catch((error) => {
                showLoader(false);
                console.error(error)
                pageAnalyticDomButton.removeAttribute('disabled');
            });

    });

    function generateReportHtml(data) {
        let html = `
        <div id="accessibility-report">
            <header>
                <div>
                    <p>Seitentitel: ${data.statistics.pagetitle}</p>
                    <p>Seiten-URL: ${data.statistics.pageurl}</p>
                </div>
            </header>
            <main>
        `;

        Object.entries(data.categories).forEach(([categoryName, categoryDetails]) => {
            html += `
            <details>
              <summary>${categoryName} (${categoryDetails.count})</summary>
              <p>${categoryDetails.description}</p>
            </details>
        `;
        });

        html += `
            </main>
            <footer>
                <div class="tl_formbody_submit">
                    <div class="tl_submit_container">
                      <button name="save" id="save" class="tl_submit" accesskey="s">Speichern</button>
                      <button name="createPDF" id="saveNclose" class="tl_submit" accesskey="c">PDF Datei erstellen</button>
                    </div>
                </div>
            </footer>
        </div>`;

        return html;
    }

    function showLoader(activate = false){
        document.getElementsByClassName('loader')[0].style.display = (activate) ? 'block' : 'none';
    }
});
