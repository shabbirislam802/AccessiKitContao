document.addEventListener("DOMContentLoaded", () => {
    let pageAnalyticDomButton = document.getElementById('wa-analyse-btn');

    if (!pageAnalyticDomButton) {
        return;
    }

    pageAnalyticDomButton.setAttribute('disabled', 'disabled');

    pageAnalyticDomButton.addEventListener('click', () => {
        let pageUrlDomSelect = document.getElementById('ctrl_pageSelect');
        let accuracyDomSelect = document.getElementById('ctrl_accuracyClass');
        let reportDomDiv = document.getElementById('wa-report');

        let pageUrl = pageUrlDomSelect.value;
        let reportType = accuracyDomSelect.value;

        if (!pageUrl || !reportType || !reportDomDiv) {
            return;
        }

        let fullPageUrl = window.location.origin + '/' + pageUrl;
        fullPageUrl = 'https://dev.mayority-game.com/'
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`https://wave.webaim.org/api/request?key=v8hHxuP53645&url=${fullPageUrl}&format=json&reporttype=${reportType}`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                let html = '<div>';
                let reportDomDiv = document.getElementById('wa-report');

                if(!result || !reportDomDiv){
                    return;
                }

                console.log(result);
                //TODO: report html

                html += '</div>';
            })
            .catch((error) => console.error(error));

        pageAnalyticDomButton.removeAttribute('disabled');
    });
});