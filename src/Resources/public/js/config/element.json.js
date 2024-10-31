let jsonElement = {
    contao_object: [
        {
            "type": "content element",
            "group": "headline",
            "name": "Headline",
            "criteria": [
                {
                    "name": "9.1.3.1 Info and Relationships",
                    "description": "Structure and relationships between elements are programmatically determinable.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Use semantic HTML elements and proper labels to represent relationships between content.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.2 Meaningful Sequence",
                    "description": "Content is presented in a logical order that preserves meaning and operability.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Ensure content order is logical for screen readers and keyboard navigation.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.4 Orientation",
                    "description": "Content is operable in both orientations unless a specific orientation is essential.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure content is adaptable for both landscape and portrait orientations.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.3 Contrast (Minimum)",
                    "description": "Text has a contrast ratio of at least 4.5:1 against the background.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Use contrasting colors to ensure minimum contrast ratio for text.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.4 Resize Text",
                    "description": "Text is resizable up to 200% without loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Ensure text can be resized without disrupting layout.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Content reflows to fit the viewport width without requiring horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Ensure that content reflows to fit smaller screens without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.12 Text Spacing",
                    "description": "No loss of content or functionality occurs when text spacing is modified according to WCAG-specified metrics.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Allow for adjustments in text spacing without affecting layout or readability.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.2.4.3 Focus Order",
                    "description": "Focus order is logical and intuitive, following the visual order of the page.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Ensure interactive elements have a logical tab order following the page's visual sequence.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.6 Headings and Labels",
                    "description": "Headings and labels are descriptive and facilitate navigation and understanding of the content.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
                    },
                    "solution": "Use clear and descriptive headings and labels for navigation and content comprehension.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Content is parsed accurately by user agents; no HTML parsing errors are present.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML markup to ensure content is parsed correctly by user agents.",
                    "result": "Fulfilled",
                    "category": 1
                }
            ]
        },
        {
            "type": "content element",
            "group": "text",
            "name": "Text",
            "criteria": [
                {
                    "name": "9.1.1.1 Non-text Content",
                    "description": "Ensure images included in text have descriptive alt text.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Use descriptive alt text that conveys the same information as the image.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.1 Info and Relationships",
                    "description": "Verify that semantic elements like paragraphs and figures are correctly structured to reflect content relationships.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Use semantic HTML elements to convey relationships between content.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.2 Meaningful Sequence",
                    "description": "Ensure the content follows a meaningful sequence and flows logically for screen readers or keyboard navigation.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Ensure content order is logical for assistive technologies.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.4 Orientation",
                    "description": "Verify content adapts appropriately in both portrait and landscape orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure content is operable in both orientations unless a specific orientation is essential.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.1 Use of Colour",
                    "description": "Verify that information is not conveyed solely through color by checking for alternative cues.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Use additional indicators beyond color to convey information.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.4.3 Contrast Ratio",
                    "description": "Ensure text has a contrast ratio of at least 4.5:1 against the background.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Use contrasting colors to ensure minimum contrast ratio for text.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.4 Resize Text",
                    "description": "Ensure text can be resized up to 200% without loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Allow for text resizing without disrupting layout or functionality.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.5 Images of Text",
                    "description": "Verify that text is used to convey information rather than images of text, unless essential.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html"
                    },
                    "solution": "Use real text instead of images of text for content presentation.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Ensure content reflows to fit the viewport width without requiring horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Allow content to reflow to fit smaller screens without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.12 Text Spacing",
                    "description": "Verify that modifying text spacing does not result in loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Support text spacing adjustments without affecting readability.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Ensure HTML content is parsed accurately by user agents with no HTML parsing errors.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML markup to ensure accurate parsing by user agents.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.2 Name, Role, Value",
                    "description": "Ensure that all elements have correct names, roles, and values for assistive technologies.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Use ARIA attributes and semantic HTML to set names, roles, and values.",
                    "result": "Fulfilled",
                    "category": 1
                }
            ]
        },
        {
            "type": "content element",
            "group": "list",
            "name": "List",
            "criteria": [
                {
                    "name": "9.1.3.1 Info and Relationships",
                    "description": "Check if the ordered list uses semantic HTML to reflect the relationships between items.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Use <ol> and <li> tags to correctly structure list items in ordered lists.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.2 Meaningful Sequence",
                    "description": "Ensure the list items are presented in a meaningful sequence, reflecting logical ordering.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "List items should follow a logical and meaningful sequence.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.4 Orientation",
                    "description": "Verify content adapts appropriately in both portrait and landscape orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure content is operable in both orientations.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.1 Use of Colour",
                    "description": "Verify that no information is conveyed using color alone.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Ensure information is accessible without relying solely on color.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.4.3 Contrast Ratio",
                    "description": "Use a contrast-checking tool to verify the contrast ratio between the list text and its background.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure text meets a contrast ratio of at least 4.5:1.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.4 Resize Text",
                    "description": "Ensure text can be resized up to 200% without loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Allow text resizing up to 200% without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Ensure the list reflows properly without causing horizontal scrolling on smaller screens.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Enable content reflow for small screens without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.12 Text Spacing",
                    "description": "Verify that modifying text spacing does not result in loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Support adjustments in text spacing while maintaining readability.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.2.4.3 Focus Order",
                    "description": "Use keyboard navigation to ensure that list items are focusable in a logical order.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Ensure that list items follow a logical focus order.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.6 Headings and Labels",
                    "description": "Ensure the heading for the list is descriptive and reflects the content of the list.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
                    },
                    "solution": "Provide a descriptive heading that reflects the list content.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Ensure HTML content is parsed accurately by user agents with no HTML parsing errors.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML markup to avoid parsing errors.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.2 Name, Role, Value",
                    "description": "Check if list items have proper names, roles, and values programmatically defined for assistive technologies.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Define proper names, roles, and values for assistive technology compatibility.",
                    "result": "Fulfilled",
                    "category": 1
                }
            ]
        },
        {
            "type": "content element",
            "group": "table",
            "name": "Table",
            "criteria": [
                {
                    "name": "9.1.3.1 Info and Relationships",
                    "description": "Verify that table headers (<th>) are correctly associated with their respective data cells (<td>).",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Use correct semantic elements (<th>, <td>) to structure data and clarify relationships.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.2 Meaningful Sequence",
                    "description": "Ensure the reading order of the table content is logical and meaningful.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Table content should follow a logical reading sequence for both visual and screen reader users.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.4 Orientation",
                    "description": "Verify content adapts appropriately in both landscape and portrait orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure content is operable and readable in both orientations.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.1 Use of Colour",
                    "description": "Ensure color is not the sole means of conveying information within the table (e.g., highlighting rows).",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Provide visual or textual indicators in addition to color.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.4.3 Contrast (Minimum)",
                    "description": "Ensure table text meets the minimum contrast ratio of 4.5:1 against its background.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure text has a contrast ratio of at least 4.5:1.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.4 Resize Text",
                    "description": "Ensure text can be resized up to 200% without loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Allow text resizing up to 200% without requiring horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Ensure the table reflows properly without causing horizontal scrolling on smaller screens.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Allow table content to reflow for smaller screens without horizontal scrolling.",
                    "result": "Not Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.11 Non-text Contrast",
                    "description": "Ensure that borders and other non-text elements have a contrast ratio of at least 3:1 against their background.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Ensure non-text elements meet the minimum contrast ratio of 3:1.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.12 Text Spacing",
                    "description": "Verify that modifying text spacing does not result in loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Support adjustments in text spacing without affecting readability.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.2.4.3 Focus Order",
                    "description": "Use keyboard navigation to ensure that the table follows a logical focus order.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Ensure focus follows the logical order of table headers and cells.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Ensure HTML content is parsed accurately by user agents with no HTML parsing errors.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML markup to ensure accurate parsing by user agents.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.2 Name, Role, Value",
                    "description": "Use a screen reader to verify that all table elements (headers and cells) are correctly identified by their names and roles.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Define proper names, roles, and values for table elements for assistive technology compatibility.",
                    "result": "Fulfilled",
                    "category": 1
                }
            ]
        },
        {
            "type": "content element",
            "group": "accordion",
            "name": "Accordion",
            "criteria": [
                {
                    "name": "9.1.3.1 Info and Relationships",
                    "description": "Verify that each accordion heading is semantically connected to its corresponding content panel.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Ensure accordion headings are correctly labeled and associated with their content.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.2 Meaningful Sequence",
                    "description": "Ensure that the accordion content follows a meaningful sequence when opened or closed.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Maintain a logical content flow, whether the accordion is expanded or collapsed.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.4 Orientation",
                    "description": "Verify that the accordion content adapts appropriately in both landscape and portrait orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure content is readable in both orientations without losing functionality.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.1 Use of Colour",
                    "description": "Ensure that color alone is not used to indicate the state (open/closed) of the accordion.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Use icons or text cues in addition to color to indicate the accordion's state.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.4.3 Contrast (Minimum)",
                    "description": "Ensure text meets a contrast ratio of at least 4.5:1 against the background in both collapsed and expanded states.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure text contrast meets 4.5:1 minimum in both accordion states.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.4 Resize Text",
                    "description": "Ensure text can be resized up to 200% without loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Allow text resizing up to 200% without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Ensure the accordion adapts to smaller screens without causing horizontal scrolling or loss of readability.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Enable accordion reflow to fit various screen sizes without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.12 Text Spacing",
                    "description": "Verify that modifying text spacing does not result in loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Support adjustments in text spacing while maintaining readability.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.11 Non-text Contrast",
                    "description": "Verify that non-text elements like the accordion toggle icon meet the minimum contrast ratio of 3:1.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Ensure non-text elements meet a contrast ratio of 3:1.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.2.1.1 Keyboard Accessibility",
                    "description": "Ensure the accordion can be fully navigated and controlled via the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Allow accordion sections to be expanded and collapsed with Enter or Space.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.1.2 No Keyboard Trap",
                    "description": "Ensure that keyboard focus can be moved freely without getting trapped in the accordion.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow keyboard users to navigate away from accordion sections without getting trapped.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.3 Focus Order",
                    "description": "Ensure the keyboard focus moves logically through the accordion headings and content.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Ensure focus order matches the visual sequence of accordion headings and content.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.7 Focus Visible",
                    "description": "Ensure the focus indicator is clearly visible on accordion controls during keyboard navigation.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "Provide clear focus indicators on accordion controls for keyboard users.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Ensure HTML content is parsed accurately by user agents with no HTML parsing errors.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML markup to ensure accurate parsing by user agents.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.2 Name, Role, Value",
                    "description": "Verify that the accordion controls are correctly identified and their state (open/closed) is conveyed to the user.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Ensure assistive technologies recognize the accordion controls and convey the open/closed state.",
                    "result": "Fulfilled",
                    "category": 1
                }
            ]
        },
        {
            "type": "content element",
            "group": "slider",
            "name": "Slider",
            "criteria": [
                {
                    "name": "9.1.1.1 Non-text Content",
                    "description": "Check that all images in the slider have alt text.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Add descriptive alt text to all images in the slider.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.1 Info and Relationships",
                    "description": "Verify that relationships between slider content (headings, images, text) are marked up with semantic HTML.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Ensure that the structure of headings and text is clear and programmatically determinable.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.2 Meaningful Sequence",
                    "description": "Check if the content within the slider is presented in a logical, meaningful sequence.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Ensure content follows a meaningful order that reflects its visual order.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.4 Orientation",
                    "description": "Verify that the slider content adapts appropriately in both landscape and portrait orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure content is operable in both orientations.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.1 Use of Colour",
                    "description": "Ensure that colour is not the only method used to convey information.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Provide multiple means to convey information beyond colour alone.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.4.3 Contrast (Minimum)",
                    "description": "Use a contrast-checking tool to verify the contrast ratio of the text in the slider.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure text contrast meets the 4.5:1 minimum requirement.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.4 Resize Text",
                    "description": "Ensure text can be resized up to 200% without loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Allow text resizing up to 200% without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Ensure the slider reflows properly on small screens without causing horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Allow slider content to reflow for various screen sizes.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.11 Non-text Contrast",
                    "description": "Check the contrast of non-text elements like the navigation buttons.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Ensure non-text elements meet a contrast ratio of 3:1.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.2.1.1 Keyboard Accessibility",
                    "description": "Navigate through the slider using only the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Ensure 'Previous' and 'Next' buttons are accessible via keyboard.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.1.2 No Keyboard Trap",
                    "description": "Ensure that when focus is on the slider, the user can navigate away using standard keyboard navigation.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow users to move focus away from slider elements freely.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.3 Focus Order",
                    "description": "Verify the focus order of the slider controls and content using the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Ensure focus order aligns with the visual order, with navigation controls accessible before content.",
                    "result": "Not Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.4 Link Purpose (In Context)",
                    "description": "Ensure that all links within the slider are clear in context.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Provide clear, descriptive link text for all links in the slider.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.6 Headings and Labels",
                    "description": "Verify that headings in the slider appropriately describe the content.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
                    },
                    "solution": "Use descriptive headings to reflect slider content.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.7 Focus Visible",
                    "description": "Ensure that all interactive elements within the slider have visible focus indicators.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "Provide visible focus indicators for all slider controls.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Validate the HTML code using an HTML validator to check for any parsing errors or invalid markup.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML markup to avoid parsing errors.",
                    "result": "Fulfilled",
                    "category": 1
                }
            ]
        },
        {
            "type": "content element",
            "group": "file",
            "name": "File",
            "criteria": [
                {
                    "name": "9.1.1.1 Non-text Content",
                    "description": "Verify that all file links have appropriate link text that provides a descriptive alternative for non-text content.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Provide descriptive link text indicating the file name and type.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.1 Info and Relationships",
                    "description": "Ensure that the file links are semantically related to their corresponding descriptions.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Programmatically link file links and descriptions to maintain context.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.2 Meaningful Sequence",
                    "description": "Check if the file links are presented in a logical and meaningful sequence.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Ensure file links follow a meaningful order to reflect their relationship.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.4 Orientation",
                    "description": "Verify that content adapts appropriately in both landscape and portrait orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure content remains operable and readable in both orientations.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.1 Use of Colour",
                    "description": "Ensure that colour is not the only method used to convey information about the files.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Provide text or other indicators in addition to colour.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.4.3 Contrast (Minimum)",
                    "description": "Verify the contrast ratio between the file link text and the background.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure a minimum contrast ratio of 4.5:1 for file link text.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.4 Resize Text",
                    "description": "Ensure text can be resized up to 200% without loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Allow text resizing without horizontal scrolling or loss of functionality.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Verify that file content reflows to fit the viewport width without requiring horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Allow file content to reflow for smaller screens without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.12 Text Spacing",
                    "description": "Verify that modifying text spacing does not result in loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Ensure readability is maintained when text spacing is adjusted.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.11 Non-text Contrast",
                    "description": "Verify the contrast of non-text elements like file icons or download buttons.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Ensure non-text elements have a contrast ratio of 3:1.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.2.1.1 Keyboard Accessibility",
                    "description": "Navigate through the file links using only the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Ensure file links can be accessed and activated using keyboard controls.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.1.2 No Keyboard Trap",
                    "description": "Ensure that when focus is on the file links, the user can navigate away using standard keyboard navigation.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow keyboard users to navigate away from file links without being trapped.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.4 Link Purpose (In Context)",
                    "description": "Ensure that each file link’s purpose is clear in context.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Provide clear, descriptive link text for all file links.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.7 Focus Visible",
                    "description": "Ensure that all file links have visible focus indicators when navigated using the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "Ensure file links have clear focus indicators during keyboard navigation.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Validate the HTML code to ensure there are no parsing errors or invalid markup.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML markup to avoid parsing errors.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.2 Name, Role, Value",
                    "description": "Verify that each file link clearly identifies its name, role (link), and value (file type).",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Ensure file links provide accessible name, role, and value information.",
                    "result": "Fulfilled",
                    "category": 1
                }
            ]
        },
        {
            "type": "content element",
            "group": "hyperlink",
            "name": "Hyperlink",
            "criteria": [
                {
                    "name": "9.1.1.1 Non-text Content",
                    "description": "Verify that each hyperlink has descriptive text to explain its purpose.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Use descriptive link text indicating the purpose of each link.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.1 Info and Relationships",
                    "description": "Check that hyperlinks are programmatically related to their surrounding content.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Ensure hyperlinks maintain context and relationships with surrounding content.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.2 Meaningful Sequence",
                    "description": "Verify that hyperlinks are presented in a meaningful and logical order.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Present hyperlinks in a logical reading sequence.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.4 Orientation",
                    "description": "Verify that hyperlinks adapt appropriately in both landscape and portrait orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure content is operable in both orientations.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.1 Use of Colour",
                    "description": "Ensure that colour is not the sole indicator for hyperlinks.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Use underlining or other visual cues in addition to color to indicate hyperlinks.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.4.3 Contrast (Minimum)",
                    "description": "Check the contrast between hyperlink text and the background.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure hyperlink text has a contrast ratio of at least 4.5:1.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.4 Resize Text",
                    "description": "Ensure text can be resized up to 200% without loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Allow text resizing up to 200% without requiring horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Ensure hyperlinks reflow to fit the viewport width without requiring horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Allow hyperlink text to reflow for smaller screens.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.11 Non-text Contrast",
                    "description": "Verify the contrast of non-text elements like hover indicators or focus outlines for hyperlinks.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Ensure non-text elements meet a contrast ratio of at least 3:1.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.12 Text Spacing",
                    "description": "Verify that modifying text spacing does not result in loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Ensure hyperlink text remains readable with adjusted spacing.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.2.1.1 Keyboard Accessibility",
                    "description": "Test the ability to navigate through hyperlinks using only the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Ensure all hyperlinks are accessible via keyboard.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.1.2 No Keyboard Trap",
                    "description": "Ensure that when focus is on the hyperlinks, the user can navigate away using standard keyboard navigation.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow keyboard users to navigate away from hyperlinks without being trapped.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.4 Link Purpose (In Context)",
                    "description": "Verify that each hyperlink's purpose is clear from its context.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Provide clear, descriptive link text for all hyperlinks.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.7 Focus Visible",
                    "description": "Ensure that hyperlinks have a visible focus state when navigated via keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "Provide clear focus indicators on hyperlinks during keyboard navigation.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Validate the HTML code to ensure there are no parsing errors or invalid markup.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML markup to ensure accurate parsing by user agents.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.2 Name, Role, Value",
                    "description": "Verify that hyperlinks communicate their name (link text), role (link), and value (destination or action) to assistive technologies.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Ensure hyperlinks communicate accessible name, role, and value information.",
                    "result": "Fulfilled",
                    "category": 1
                }
            ]
        },
        {
            "type": "content element",
            "group": "top link",
            "name": "Top Link",
            "criteria": [
                {
                    "name": "9.1.1.1 Non-text Content",
                    "description": "Verify that the image within the 'Go to top' link has appropriate alternative text.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Provide alt text for the image or mark it as decorative if appropriate.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.1 Info and Relationships",
                    "description": "Ensure that the relationship between the link and the top of the page is programmatically conveyed.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Ensure the link clearly directs the user to the top of the page.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.2 Meaningful Sequence",
                    "description": "Verify that the 'Go to top' link is positioned logically within the content flow.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Position the 'Go to top' link at the bottom of the content.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.4 Orientation",
                    "description": "Verify that the link content adapts appropriately in both landscape and portrait orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure the link functions correctly in both orientations.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.1 Use of Colour",
                    "description": "Ensure that colour is not the only indicator for the presence of the 'Go to top' link.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Use an icon or underline in addition to color to indicate the link.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.4.3 Contrast (Minimum)",
                    "description": "Use a contrast checker to ensure that the link text (or icon) meets the minimum contrast ratio of 4.5:1.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure the link is clearly visible against its background.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.4 Resize Text",
                    "description": "Ensure text can be resized up to 200% without loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Allow text resizing without causing horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Ensure the link reflows to fit the viewport width without requiring horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Allow link text to reflow for smaller screens.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.12 Text Spacing",
                    "description": "Verify that modifying text spacing does not result in loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Ensure link text remains readable with adjusted spacing.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.11 Non-text Contrast",
                    "description": "Verify that non-text elements such as hover or focus outlines meet the contrast ratio of at least 3:1.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Ensure non-text elements have sufficient contrast for visibility.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.2.1.1 Keyboard Accessibility",
                    "description": "Test the ability to focus on the 'Go to top' link using the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Ensure the link is fully accessible via keyboard.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.1.2 No Keyboard Trap",
                    "description": "Ensure that when focus is on the 'Go to top' link, the user can navigate away using standard keyboard navigation.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow keyboard users to move focus away from the link without being trapped.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.4 Link Purpose",
                    "description": "Verify that the link text ('Go to top') clearly describes its purpose.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Provide descriptive link text such as 'Go to top'.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.7 Focus Visible",
                    "description": "Ensure that the link has a visible focus indicator when navigated using the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "Provide a clear focus outline on the link during keyboard navigation.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Validate the HTML code using an HTML validator to check for any parsing errors or invalid markup.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML markup to ensure accurate parsing by user agents.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.2 Name, Role, Value",
                    "description": "Verify that the link communicates its name (link text), role (link), and value (destination) programmatically.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Ensure the link communicates accessible name, role, and value information.",
                    "result": "Fulfilled",
                    "category": 1
                }
            ]
        },
        {
            "type": "content element",
            "group": "image",
            "name": "Image",
            "criteria": [
                {
                    "name": "9.1.1.1 Non-text Content",
                    "description": "Verify that the image within the content has appropriate alternative text.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Provide meaningful alt text for the image or an empty alt attribute for decorative images.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.1 Info and Relationships",
                    "description": "Ensure that the image is embedded within a semantic context, such as a <figure> element with an optional <figcaption>.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Use a <figure> element for the image and, if applicable, add a <figcaption> to describe it.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.2 Meaningful Sequence",
                    "description": "Verify that the image appears in a logical sequence relative to surrounding content.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Position the image within the content flow to enhance information clarity.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.4 Orientation",
                    "description": "Verify that the image adapts appropriately in both landscape and portrait orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure the image remains operable and coherent in both orientations.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.1 Use of Colour",
                    "description": "Ensure that the image does not rely solely on color to convey important information.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Complement color use with other visual elements to convey information.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.4.5 Images of Text",
                    "description": "Ensure that any text within the image is available in a machine-readable format.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html"
                    },
                    "solution": "Provide the text in a readable format if it appears in an image.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Ensure the image remains visible without causing horizontal scrolling at a viewport width of 320 pixels.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Allow the image to reflow for smaller screens without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.11 Non-text Contrast",
                    "description": "Ensure that important visual details in the image have sufficient contrast for visibility.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Maintain a contrast ratio of at least 3:1 for significant visual elements within the image.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.12 Text Spacing",
                    "description": "Verify that modifying text spacing does not affect readability or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Ensure readability remains intact when text spacing is adjusted.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.2.1.1 Keyboard Accessibility",
                    "description": "Ensure that interactive image elements (if any) are accessible via keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Allow full keyboard access to all interactive aspects of the image.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.1.2 No Keyboard Trap",
                    "description": "Ensure that the user can navigate away from the image using standard keyboard navigation.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow keyboard users to move focus away from the image freely.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.4 Link Purpose",
                    "description": "If the image is wrapped in a hyperlink, ensure that the link's purpose is clear from its context.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Provide descriptive link text indicating the image’s action or destination.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.7 Focus Visible",
                    "description": "Ensure that interactive images have a visible focus indicator when navigated via keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "Provide a clear focus outline on the image during keyboard navigation.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Validate the HTML code to check for any parsing errors related to the image element.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Ensure valid HTML for accurate interpretation by user agents.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.2 Name, Role, Value",
                    "description": "Ensure that assistive technologies can interpret the image, including the alt attribute, and communicate its name, role, and value.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Use semantic HTML and ARIA roles to convey the image’s purpose.",
                    "result": "Fulfilled",
                    "category": 1
                }
            ]
        },
        {
            "type": "content element",
            "group": "gallery",
            "name": "Gallery",
            "criteria": [
                {
                    "name": "9.1.1.1 Non-text Content",
                    "description": "Check if all images in the gallery have meaningful alt attributes.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Ensure every image in the gallery has a descriptive alt attribute.",
                    "result": "Not Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.1 Info and Relationships",
                    "description": "Ensure the gallery is appropriately structured using <figure> elements and captions.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Use semantic HTML elements to define relationships between images and captions.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.2 Meaningful Sequence",
                    "description": "Ensure the gallery's images follow a logical order that matches the content.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Order the images meaningfully within the gallery.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.3.4 Orientation",
                    "description": "Verify the gallery adapts appropriately in both landscape and portrait orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure the gallery functions in both orientations without information loss.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.1 Use of Colour",
                    "description": "Ensure the gallery does not rely solely on color to convey information.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Avoid using color alone to convey information in the gallery.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.1.4.3 Contrast (Minimum)",
                    "description": "Verify contrast between text (e.g., captions) and the background.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure text in the gallery has a minimum contrast ratio of 4.5:1.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.4 Resize Text",
                    "description": "Ensure text can be resized up to 200% without loss of content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Allow resizing of gallery text without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Ensure the gallery adapts properly without causing horizontal scrolling on small screens.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Allow gallery reflow for small screens without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.12 Text Spacing",
                    "description": "Ensure no loss of content or functionality when text spacing is modified.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Maintain readability when text spacing is adjusted.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.11 Non-text Contrast",
                    "description": "Ensure non-text elements, such as image thumbnails, have sufficient contrast.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Maintain a contrast ratio of at least 3:1 for non-text elements.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.1.4.13 Content on Hover/Focus",
                    "description": "Verify that content on hover or focus is accessible via keyboard and mouse.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level AA",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
                    },
                    "solution": "Allow content on hover/focus to be accessible with both keyboard and mouse.",
                    "result": "Fulfilled",
                    "category": 2
                },
                {
                    "name": "9.2.1.1 Keyboard Accessibility",
                    "description": "Navigate through the gallery using only the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Ensure all gallery elements are accessible via keyboard.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.1.2 No Keyboard Trap",
                    "description": "Ensure the user can navigate away from the gallery using standard keyboard navigation.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow keyboard users to move focus away from the gallery freely.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.3 Focus Order",
                    "description": "Ensure focus order when navigating through the gallery follows a logical flow.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Ensure focus follows a natural, sequential order through gallery items.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.2.4.4 Link Purpose",
                    "description": "Ensure that each image link's purpose (e.g., opening a full-size view) is clear from its context.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Provide descriptive text indicating the link’s purpose.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.2 Name, Role, Value",
                    "description": "Ensure that interactive elements, such as lightbox links, are properly announced by screen readers.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Provide accurate names, roles, and values for assistive technologies.",
                    "result": "Fulfilled",
                    "category": 1
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Validate the HTML code to check for any parsing errors related to the gallery element.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1 Level A",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Ensure valid HTML for accurate interpretation by user agents.",
                    "result": "Fulfilled",
                    "category": 1
                }
            ]
        },
        {
            "type": "content element",
            "group": "video",
            "name": "Video",
            "criteria": [
                {
                    "name": "7.1.1 Caption Playback",
                    "description": "Check if captions are available and can be played back alongside the video content.",
                    "wcag": {
                        "wcag_level": false,
                        "name": "EN 301 549",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/media-alternatives.html"
                    },
                    "solution": "Provide accessible captions that can be displayed alongside the video.",
                    "result": "Not Fulfilled",
                    "category": 7
                },
                {
                    "name": "7.1.2 Caption Synchronization",
                    "description": "Ensure that captions are synchronized accurately with the video playback.",
                    "wcag": {
                        "wcag_level": false,
                        "name": "EN 301 549",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/sync-media.html"
                    },
                    "solution": "Provide synchronized captions for the video content.",
                    "result": "Not Fulfilled",
                    "category": 7
                },
                {
                    "name": "7.1.3 Preservation of Captioning",
                    "description": "Ensure that captions remain visible and synchronized throughout the video playback.",
                    "wcag": {
                        "wcag_level": false,
                        "name": "EN 301 549",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/media-alternatives.html"
                    },
                    "solution": "Ensure captions remain consistent and visible throughout playback.",
                    "result": "Not Fulfilled",
                    "category": 7
                },
                {
                    "name": "7.1.4 Caption Characteristics",
                    "description": "Check that caption characteristics (size, color, placement) meet accessibility guidelines.",
                    "wcag": {
                        "wcag_level": false,
                        "name": "EN 301 549",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/media-alternatives.html"
                    },
                    "solution": "Ensure captions are readable and placed appropriately on the video.",
                    "result": "Not Fulfilled",
                    "category": 7
                },
                {
                    "name": "7.1.5 Spoken Subtitles",
                    "description": "Verify that spoken subtitles are available for non-spoken audio information.",
                    "wcag": {
                        "wcag_level": false,
                        "name": "EN 301 549",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/media-alternatives.html"
                    },
                    "solution": "Provide spoken subtitles for non-spoken audio information in the video.",
                    "result": "Not Fulfilled",
                    "category": 7
                },
                {
                    "name": "7.2.1 Audio Description Playback",
                    "description": "Ensure that audio descriptions can be played back alongside the video content.",
                    "wcag": {
                        "wcag_level": false,
                        "name": "EN 301 549",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/media-alternatives.html"
                    },
                    "solution": "Provide audio descriptions to complement the visual content.",
                    "result": "Not Fulfilled",
                    "category": 7
                },
                {
                    "name": "7.2.2 Audio Description Synchronization",
                    "description": "Ensure that audio descriptions are synchronized with the video playback.",
                    "wcag": {
                        "wcag_level": false,
                        "name": "EN 301 549",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/media-alternatives.html"
                    },
                    "solution": "Ensure audio descriptions are synchronized with video content.",
                    "result": "Not Fulfilled",
                    "category": 7
                },
                {
                    "name": "9.1.1.1 Non-text Content",
                    "description": "Check if the iframe tag includes a descriptive title attribute.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Add a meaningful title attribute to describe the video content.",
                    "result": "Not Fulfilled",
                    "category": 9
                },
                {
                    "name": "9.1.2.1 Audio-only and Video-only",
                    "description": "Verify whether an alternative is available for pre-recorded video content.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.2.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html"
                    },
                    "solution": "Provide a transcript as an alternative for video content.",
                    "result": "Not Fulfilled",
                    "category": 9
                },
                {
                    "name": "9.1.4.3 Contrast (Minimum)",
                    "description": "Use a contrast-checking tool to verify that video player controls meet the required contrast ratio.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure controls meet a minimum contrast ratio of 4.5:1.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "9.1.4.10 Reflow",
                    "description": "Ensure the video player adapts without causing horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Ensure the player reflows to fit smaller screens.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "9.2.1.1 Keyboard Accessibility",
                    "description": "Navigate to the video player using only the keyboard and interact with controls.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Ensure all controls are keyboard accessible.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "9.2.4.3 Focus Order",
                    "description": "Ensure the focus follows a logical sequence within the video player controls.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Arrange focus order logically within player controls.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "9.2.4.4 Link Purpose",
                    "description": "Verify that any links associated with the video player have clear purposes.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Ensure link text clearly indicates the link purpose.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "9.4.1.1 Parsing",
                    "description": "Validate the HTML code to check for any parsing errors related to the video element.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Ensure valid HTML for accurate interpretation by user agents.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "9.4.1.2 Name, Role, Value",
                    "description": "Ensure that assistive technologies can interpret the video player and its controls.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Define accessible names, roles, and values for player controls.",
                    "result": "Fulfilled",
                    "category": 9
                }
            ]
        },
        {
            "type": "content element",
            "group": "audio",
            "name": "Audio",
            "criteria": [
                {
                    "name": "Non-text Content",
                    "description": "Check if a text alternative, such as a transcript, is provided for the audio content.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Provide a transcript or alternative text for users who cannot hear the audio.",
                    "result": "Not Fulfilled",
                    "category": 9
                },
                {
                    "name": "Audio-only (Pre-recorded)",
                    "description": "Check if a text alternative is provided for the audio.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.2.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html"
                    },
                    "solution": "Provide a transcript for pre-recorded audio content.",
                    "result": "Not Fulfilled",
                    "category": 9
                },
                {
                    "name": "Orientation",
                    "description": "Rotate the device or browser window to different orientations and verify that the audio player remains functional and accessible.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure the audio player works correctly in both portrait and landscape modes.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Contrast (Minimum)",
                    "description": "Use a contrast-checking tool to verify that the audio player's controls meet the required contrast ratio.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure the audio player controls have a minimum contrast ratio of 4.5:1.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Reflow",
                    "description": "Resize the browser window and verify if the audio player adapts to smaller screen sizes without horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Ensure the audio player reflows correctly for smaller screens.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Keyboard Accessibility",
                    "description": "Check if the audio player and its controls can be operated using the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Ensure all audio player controls are accessible and operable via keyboard.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "No Keyboard Trap",
                    "description": "Navigate through the audio player using the keyboard and ensure that users can move focus away without getting trapped.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Ensure users can navigate away from the audio player using the keyboard.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Focus Order",
                    "description": "Ensure that the focus order of the audio controls follows the visual order.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Arrange the focus order logically within the audio player controls.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Label in Name",
                    "description": "Ensure that the accessible name of the audio controls matches their visible labels.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.5.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"
                    },
                    "solution": "Ensure accessible names match the visible labels for each control.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Parsing",
                    "description": "Inspect the audio element's markup to ensure it is valid and correctly structured for assistive technologies.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Ensure valid HTML markup for the audio element.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Name, Role, Value",
                    "description": "Use a screen reader to verify if the audio element and its controls are announced correctly.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Ensure the audio player and its controls have appropriate names, roles, and values.",
                    "result": "Fulfilled",
                    "category": 9
                }
            ]
        }
    ]
};
