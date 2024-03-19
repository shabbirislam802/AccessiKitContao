const {jsPDF} = window.jspdf;

let data;

document.addEventListener("DOMContentLoaded", () => {
    let pageAnalyticDomButton = document.getElementById('wa-analyse-btn');
    if (!pageAnalyticDomButton) {
        return;
    }

    pageAnalyticDomButton.addEventListener('click', () => {
        showLoader(true);
        let pageUrlDomSelect = document.getElementById('ctrl_pageSelect');
        let accuracyDomSelect = document.getElementById('ctrl_accuracyClass');
        let reportDomDiv = document.querySelector('#wa-report .content #app');

        let pageUrl = pageUrlDomSelect.value;
        let reportType = accuracyDomSelect.value;
        console.log(pageUrl, reportType, reportDomDiv);

        if (!pageUrl || !reportType || !reportDomDiv) {
            showLoader(false);
            return;
        }

        pageAnalyticDomButton.setAttribute('disabled', 'disabled');

        let fullPageUrl = window.location.origin + '/' + pageUrl;
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        //Delete
        /*switch (reportType) {
            case "4":
                data = {
                    "status": {
                        "success": true,
                        "httpstatuscode": 200
                    },
                    "statistics": {
                        "pagetitle": "Google",
                        "pageurl": "https://google.com/",
                        "time": 1.27,
                        "creditsremaining": 1487,
                        "allitemcount": 20,
                        "totalelements": 186,
                        "waveurl": "https://wave.webaim.org/report?url=https://google.com/"
                    },
                    "categories": {
                        "error": {
                            "description": "Errors",
                            "count": 4,
                            "items": {
                                "language_missing": {
                                    "id": "language_missing",
                                    "description": "Document language missing",
                                    "count": 1,
                                    "xpaths": [
                                        "#"
                                    ]
                                },
                                "alt_spacer_missing": {
                                    "id": "alt_spacer_missing",
                                    "description": "Spacer image missing alternative text",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/CENTER[1]\/SPAN[1]\/DIV[1]\/DIV[1]\/TABLE[1]\/TBODY[1]\/TR[2]\/TD[1]\/IMG[1]"
                                    ]
                                },
                                "link_empty": {
                                    "id": "link_empty",
                                    "description": "Empty link",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[2]\/OL[1]\/LI[3]\/A[1]"
                                    ]
                                },
                                "label_missing": {
                                    "id": "label_missing",
                                    "description": "Missing form label",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/TEXTAREA[1]"
                                    ]
                                }
                            }
                        },
                        "contrast": {
                            "description": "Contrast Errors",
                            "count": 2,
                            "items": {
                                "contrast": {
                                    "id": "contrast",
                                    "description": "Very Low Contrast",
                                    "count": 2,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[1]\/A[1]",
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[2]\/A[1]"
                                    ],
                                    "contrastdata": [
                                        [
                                            2.48,
                                            "#9a9aff",
                                            "#ffffff",
                                            false
                                        ],
                                        [
                                            2.81,
                                            "#9a9a9a",
                                            "#ffffff",
                                            true
                                        ]
                                    ]
                                }
                            }
                        },
                        "alert": {
                            "description": "Alerts",
                            "count": 5,
                            "items": {
                                "h1_missing": {
                                    "id": "h1_missing",
                                    "description": "Missing first level heading",
                                    "count": 1,
                                    "xpaths": [
                                        "#"
                                    ]
                                },
                                "title_redundant": {
                                    "id": "title_redundant",
                                    "description": "Redundant title text",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/CENTER[1]\/DIV[1]\/A[1]\/IMG[1]"
                                    ]
                                },
                                "label_title": {
                                    "id": "label_title",
                                    "description": "Unlabeled form element with title",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/CENTER[1]\/FORM[1]\/TABLE[1]\/TBODY[1]\/TR[1]\/TD[2]\/DIV[1]\/INPUT[1]"
                                    ]
                                },
                                "link_suspicious": {
                                    "id": "link_suspicious",
                                    "description": "Suspicious link text",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[9]\/A[1]"
                                    ]
                                },
                                "heading_skipped": {
                                    "id": "heading_skipped",
                                    "description": "Skipped heading level",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[2]\/H2[1]"
                                    ]
                                }
                            }
                        },
                        "feature": {
                            "description": "Features",
                            "count": 1,
                            "items": {
                                "alt_link": {
                                    "id": "alt_link",
                                    "description": "Linked image with alternative text",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/CENTER[1]\/DIV[1]\/A[1]\/IMG[1]"
                                    ]
                                }
                            }
                        },
                        "structure": {
                            "description": "Structural Elements",
                            "count": 6,
                            "items": {
                                "table_layout": {
                                    "id": "table_layout",
                                    "description": "Layout table",
                                    "count": 3,
                                    "xpaths": [
                                        "\/BODY[1]\/CENTER[1]\/FORM[1]\/TABLE[1]\/TBODY[1]\/TR[1]\/TD[1]",
                                        "\/BODY[1]\/CENTER[1]\/SPAN[1]\/DIV[1]\/DIV[1]\/TABLE[1]\/TBODY[1]\/TR[1]\/TD[1]",
                                        "\/BODY[1]\/TABLE[1]\/TBODY[1]\/TR[1]\/TD[1]"
                                    ]
                                },
                                "ol": {
                                    "id": "ol",
                                    "description": "Ordered list",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[1]"
                                    ]
                                },
                                "h2": {
                                    "id": "h2",
                                    "description": "Heading level 2",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[2]\/H2[1]"
                                    ]
                                },
                                "iframe": {
                                    "id": "iframe",
                                    "description": "Inline Frame",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/IFRAME[1]"
                                    ]
                                }
                            }
                        },
                        "aria": {
                            "description": "ARIA",
                            "count": 4,
                            "items": {
                                "aria": {
                                    "id": "aria",
                                    "description": "ARIA",
                                    "count": 4,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[9]\/A[1]",
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[9]\/DIV[1]",
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[2]\/OL[1]\/LI[3]\/A[1]",
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[2]\/OL[1]\/LI[3]\/DIV[1]"
                                    ]
                                }
                            }
                        }
                    }
                };
                break;
            case "3":
                data = {
                    "status": {
                        "success": true,
                        "httpstatuscode": 200
                    },
                    "statistics": {
                        "pagetitle": "Google",
                        "pageurl": "https://google.com/",
                        "time": 1.27,
                        "creditsremaining": 1487,
                        "allitemcount": 20,
                        "totalelements": 186,
                        "waveurl": "https://wave.webaim.org/report?url=https://google.com/"
                    },
                    "categories": {
                        "error": {
                            "description": "Errors",
                            "count": 4,
                            "items": {
                                "language_missing": {
                                    "id": "language_missing",
                                    "description": "Document language missing",
                                    "count": 1,
                                    "xpaths": [
                                        "#"
                                    ]
                                },
                                "alt_spacer_missing": {
                                    "id": "alt_spacer_missing",
                                    "description": "Spacer image missing alternative text",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/CENTER[1]\/SPAN[1]\/DIV[1]\/DIV[1]\/TABLE[1]\/TBODY[1]\/TR[2]\/TD[1]\/IMG[1]"
                                    ]
                                },
                                "link_empty": {
                                    "id": "link_empty",
                                    "description": "Empty link",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[2]\/OL[1]\/LI[3]\/A[1]"
                                    ]
                                },
                                "label_missing": {
                                    "id": "label_missing",
                                    "description": "Missing form label",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/TEXTAREA[1]"
                                    ]
                                }
                            }
                        },
                        "contrast": {
                            "description": "Contrast Errors",
                            "count": 2,
                            "items": {
                                "contrast": {
                                    "id": "contrast",
                                    "description": "Very Low Contrast",
                                    "count": 2,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[1]\/A[1]",
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[2]\/A[1]"
                                    ],
                                    "contrastdata": [
                                        [
                                            2.48,
                                            "#9a9aff",
                                            "#ffffff",
                                            false
                                        ],
                                        [
                                            2.81,
                                            "#9a9a9a",
                                            "#ffffff",
                                            true
                                        ]
                                    ]
                                }
                            }
                        },
                        "alert": {
                            "description": "Alerts",
                            "count": 5,
                            "items": {
                                "h1_missing": {
                                    "id": "h1_missing",
                                    "description": "Missing first level heading",
                                    "count": 1,
                                    "xpaths": [
                                        "#"
                                    ]
                                },
                                "title_redundant": {
                                    "id": "title_redundant",
                                    "description": "Redundant title text",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/CENTER[1]\/DIV[1]\/A[1]\/IMG[1]"
                                    ]
                                },
                                "label_title": {
                                    "id": "label_title",
                                    "description": "Unlabeled form element with title",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/CENTER[1]\/FORM[1]\/TABLE[1]\/TBODY[1]\/TR[1]\/TD[2]\/DIV[1]\/INPUT[1]"
                                    ]
                                },
                                "link_suspicious": {
                                    "id": "link_suspicious",
                                    "description": "Suspicious link text",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[9]\/A[1]"
                                    ]
                                },
                                "heading_skipped": {
                                    "id": "heading_skipped",
                                    "description": "Skipped heading level",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[2]\/H2[1]"
                                    ]
                                }
                            }
                        },
                        "feature": {
                            "description": "Features",
                            "count": 1,
                            "items": {
                                "alt_link": {
                                    "id": "alt_link",
                                    "description": "Linked image with alternative text",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/CENTER[1]\/DIV[1]\/A[1]\/IMG[1]"
                                    ]
                                }
                            }
                        },
                        "structure": {
                            "description": "Structural Elements",
                            "count": 6,
                            "items": {
                                "table_layout": {
                                    "id": "table_layout",
                                    "description": "Layout table",
                                    "count": 3,
                                    "xpaths": [
                                        "\/BODY[1]\/CENTER[1]\/FORM[1]\/TABLE[1]\/TBODY[1]\/TR[1]\/TD[1]",
                                        "\/BODY[1]\/CENTER[1]\/SPAN[1]\/DIV[1]\/DIV[1]\/TABLE[1]\/TBODY[1]\/TR[1]\/TD[1]",
                                        "\/BODY[1]\/TABLE[1]\/TBODY[1]\/TR[1]\/TD[1]"
                                    ]
                                },
                                "ol": {
                                    "id": "ol",
                                    "description": "Ordered list",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[1]"
                                    ]
                                },
                                "h2": {
                                    "id": "h2",
                                    "description": "Heading level 2",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[2]\/H2[1]"
                                    ]
                                },
                                "iframe": {
                                    "id": "iframe",
                                    "description": "Inline Frame",
                                    "count": 1,
                                    "xpaths": [
                                        "\/BODY[1]\/IFRAME[1]"
                                    ]
                                }
                            }
                        },
                        "aria": {
                            "description": "ARIA",
                            "count": 4,
                            "items": {
                                "aria": {
                                    "id": "aria",
                                    "description": "ARIA",
                                    "count": 4,
                                    "xpaths": [
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[9]\/A[1]",
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[1]\/OL[1]\/LI[9]\/DIV[1]",
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[2]\/OL[1]\/LI[3]\/A[1]",
                                        "\/BODY[1]\/DIV[1]\/DIV[1]\/DIV[1]\/DIV[2]\/OL[1]\/LI[3]\/DIV[1]"
                                    ]
                                }
                            }
                        }
                    }
                };
                break;
            case "2":
                data = {
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
                            "count": 4,
                            "items": {
                                "language_missing": {
                                    "id": "language_missing",
                                    "description": "Document language missing",
                                    "count": 1
                                },
                                "alt_spacer_missing": {
                                    "id": "alt_spacer_missing",
                                    "description": "Spacer image missing alternative text",
                                    "count": 1
                                },
                                "link_empty": {
                                    "id": "link_empty",
                                    "description": "Empty link",
                                    "count": 1
                                },
                                "label_missing": {
                                    "id": "label_missing",
                                    "description": "Missing form label",
                                    "count": 1
                                }
                            }
                        },
                        "contrast": {
                            "description": "Contrast Errors",
                            "count": 2,
                            "items": {
                                "contrast": {
                                    "id": "contrast",
                                    "description": "Very Low Contrast",
                                    "count": 2
                                }
                            }
                        },
                        "alert": {
                            "description": "Errors",
                            "count": 5,
                            "items": {
                                "h1_missing": {
                                    "id": "h1_missing",
                                    "description": "Missing first level heading",
                                    "count": 1
                                },
                                "title_redundant": {
                                    "id": "title_redundant",
                                    "description": "Redundant title text",
                                    "count": 1
                                },
                                "label_title": {
                                    "id": "label_title",
                                    "description": "Unlabeled form element with title",
                                    "count": 1
                                },
                                "link_suspicious": {
                                    "id": "link_suspicious",
                                    "description": "Suspicious link text",
                                    "count": 1
                                },
                                "heading_skipped": {
                                    "id": "heading_skipped",
                                    "description": "Skipped heading level",
                                    "count": 1
                                }
                            }
                        },
                        "feature": {
                            "description": "Features",
                            "count": 1,
                            "items": {
                                "alt_link": {
                                    "id": "alt_link",
                                    "description": "Linked image with alternative text",
                                    "count": 1
                                }
                            }
                        },
                        "structure": {
                            "description": "Structural Elements",
                            "count": 5,
                            "items": {
                                "table_layout": {
                                    "id": "table_layout",
                                    "description": "Layout table",
                                    "count": 2
                                },
                                "ol": {
                                    "id": "ol",
                                    "description": "Ordered list",
                                    "count": 1
                                },
                                "h2": {
                                    "id": "h2",
                                    "description": "Heading level 2",
                                    "count": 1
                                },
                                "iframe": {
                                    "id": "iframe",
                                    "description": "Inline Frame",
                                    "count": 1
                                }
                            }
                        },
                        "aria": {
                            "description": "ARIA",
                            "count": 4,
                            "items": {
                                "aria": {
                                    "id": "aria",
                                    "description": "ARIA",
                                    "count": 4
                                }
                            }
                        }
                    }
                };
                break;
            case "1":
                console.log("test");
                data = {
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
                };
                break;
        }

        let html = generateReportHtml(data);
        reportDomDiv.innerHTML = html;
        pageAnalyticDomButton.removeAttribute('disabled');
        showLoader(false);
        return;*/
        //END Delete
        fetch(`https://wave.webaim.org/api/request?key=v8hHxuP53645&url=${fullPageUrl}&format=json&reporttype=${reportType}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                let html = generateReportHtml(result);
                reportDomDiv.innerHTML = html;
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                pageAnalyticDomButton.removeAttribute('disabled');
                showLoader(false);
            });
    });

    function generateReportHtml(data) {
        let html = `
    <div id="accessibility-report">
        <header>
            <div>
                <h2 class="sub_headline sub_headline_index">Seitentitel: ${data.statistics.pagetitle}</h2>
                <h2 class="sub_headline sub_headline_index">Seiten-URL: ${data.statistics.pageurl}</h2>
            </div>
        </header>
        <main>
    `;

        Object.entries(data.categories).forEach(([categoryName, categoryDetails]) => {
            html += `
        <details>
          <summary>${categoryName} (${categoryDetails.count}) - ${categoryDetails.description}</summary>
        `;

            if (categoryDetails.items) {
                Object.entries(categoryDetails.items).forEach(([itemName, itemDetails]) => {
                    html += `<div class="item-detail"><strong>${itemName.toUpperCase()} (${itemDetails.count}):</strong> ${itemDetails.description}`;
                    if (itemDetails.xpaths) {
                        html += `<div>XPaths: ${itemDetails.xpaths.join(', ')}</div>`;
                    }
                    html += `<div class="btn-block"><button onclick="loadWaveItemDetails('${itemName}')" class="load-information-btn">Load Details for ${itemName.toUpperCase()}</button></div>`;
                    html += `<div id="details-${itemName}" class="item-details-container"></div>`;
                    html += `</div>`;
                });
            }

            html += `</details>`;
        });

        html += `
        </main>
        <footer>
            <div class="tl_formbody_submit">
                <div class="tl_submit_container">
                    <button name="save" id="save" class="tl_submit" accesskey="s" onclick="saveData()">Speichern</button>
                    <button name="createPDF" id="saveNclose" class="tl_submit" accesskey="c" onclick="generatePDF()">PDF Datei erstellen</button>
                </div>
            </div>
        </footer>
    </div>`;

        return html;
    }

    function showLoader(activate = false) {
        document.getElementsByClassName('loader')[0].style.display = (activate) ? 'block' : 'none';
    }

    window.loadWaveItemDetails = function (itemId) {
        const url = `https://wave.webaim.org/api/docs?id=${itemId}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById('details-' + itemId).innerHTML = `
                    <strong>${data.title}</strong><br>
                    Purpose: ${data.purpose}<br>
                    Actions: ${data.actions}<br>
                    <ul>
                        ${data.guidelines.map(guideline => `<li><a href="${guideline.link}" target="_blank">${guideline.name}</a></li>`).join('')}
                    </ul>
                `;
            })
            .catch(error => console.error('Error loading item details:', error));
    }

    window.generatePDF = function () {
        function estimateTextHeight(text, fontSize, maxWidth, lineHeightFactor = 1.2) {
            doc.setFontSize(fontSize);
            const lines = doc.splitTextToSize(text, maxWidth);
            return (lines.length * fontSize * lineHeightFactor) + 10;
        }

        const doc = new jsPDF({
            orientation: 'p',
            unit: 'pt',
            format: 'a4',
            lineHeight: 1.2
        });
        const maxWidth = 595 - 60;
        const currentX = 40;
        let currentY = 30;


        const pageTitleHeight = estimateTextHeight(`Seitentitel: ${data.statistics.pagetitle}`, 18, maxWidth);
        doc.text(
            doc.splitTextToSize(`Seitentitel: ${data.statistics.pagetitle}`, maxWidth),
            currentX,
            currentY,
            {maxWidth: maxWidth}
        );
        currentY += pageTitleHeight;

        const pageUrlHeight = estimateTextHeight(`Seitenlink: ${data.statistics.pageurl}`, 18, maxWidth);
        doc.text(
            doc.splitTextToSize(`Seitenlink: ${data.statistics.pageurl}`, maxWidth),
            currentX,
            currentY,
            {maxWidth: maxWidth}
        );
        currentY += pageUrlHeight;

        const tableColumnNames = ['Kategorie', 'Beschreibung', 'Anzahl', 'Details/XPaths'];
        let tableRows = [];
        let hasDetails = false;

        Object.entries(data.categories).forEach(([_, categoryDetails]) => {
            if (categoryDetails.items) {
                hasDetails = true;
            }
        });

        if (!hasDetails) {
            Object.entries(data.categories).forEach(([categoryName, categoryDetails]) => {
                let row = [
                    categoryName, // Kategorie
                    categoryDetails.description || 'N/A',
                    categoryDetails.count.toString(),
                    'N/A'
                ];
                tableRows.push(row);
            });
        } else {
            Object.entries(data.categories).forEach(([categoryName, categoryDetails]) => {
                if (categoryDetails.items) {
                    Object.entries(categoryDetails.items).forEach(([itemId, itemDetails]) => {
                        let detailText = 'N/A';

                        if (itemDetails.xpaths && itemDetails.xpaths.length > 0) {
                            detailText = itemDetails.xpaths.join(", ");
                        } else if (itemDetails.selectors && itemDetails.selectors.length > 0) {
                            detailText = itemDetails.selectors.join(", ");
                        }

                        let row = [
                            itemId,
                            itemDetails.description,
                            itemDetails.count.toString(),
                            detailText
                        ];
                        tableRows.push(row);
                    });
                }
            });
        }

        doc.autoTable({
            head: [tableColumnNames],
            body: tableRows,
            startY: currentY,
            styles: {overflow: 'linebreak'},
            theme: 'striped',
            tableWidth: 'auto',
        });

        doc.save('detailReport.pdf');
    }

    window.saveData = function () {
        const reportData = {
            title: data.statistics.pagetitle,
            report_data: data
        };

        fetch('/api/v1/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reportData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                }
                return response.json();
            })
            .then(data => console.log('Erfolg:', data))
            .catch((error) => console.error('Fehler:', error));
    }
});

