let jsonModule = {
    contao_object: [
        {
            "type": "module",
            "group": "form",
            "name": "form",
            "criteria": [
                {
                    "name": "Labeling and Structure",
                    "description": "Verify that each input element has an associated label and structure is programmatically determinable.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1 / 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Ensure each form input element is labeled and structurally correct for screen readers.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Contrast Check",
                    "description": "Verify that text has a contrast ratio of at least 4.5:1 against the background.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure all text elements, including buttons, have sufficient contrast.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Keyboard Accessibility",
                    "description": "Ensure all form fields receive visible focus and are keyboard-operable without traps.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1 / 2.1.2 / 2.4.7",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Make all fields, including checkboxes and radio buttons, accessible via keyboard.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Screen Reader Compatibility",
                    "description": "Screen reader should read each field's label and functionality accurately.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1 / 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Ensure all fields are screen reader-compatible.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Reflow",
                    "description": "The form should reflow correctly without horizontal scrolling on screen resize.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Ensure form layout reflows for all screen sizes.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Text Resizing",
                    "description": "Verify that text resizes to 200% without content loss or horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Ensure content remains readable and accessible at 200% text size.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Orientation",
                    "description": "Verify form layout adapts to both portrait and landscape orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure form displays correctly in any orientation.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Identify Input Purpose",
                    "description": "Check that input fields are identified for autofill purposes.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.5",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
                    },
                    "solution": "Ensure form inputs are labeled for browser autofill.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Focus Order",
                    "description": "The focus order should follow a logical sequence for smooth navigation.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Verify that focus follows a logical, predictable order.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Label in Name",
                    "description": "Form labels should be part of the accessible name for assistive technologies.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.5.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"
                    },
                    "solution": "Ensure labels are included in accessible names.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "On Focus",
                    "description": "Verify that no unexpected changes occur when form elements receive focus.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html"
                    },
                    "solution": "Prevent unexpected changes on focus.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "On Input",
                    "description": "Ensure no unexpected changes occur when data is entered into fields.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-input.html"
                    },
                    "solution": "Limit changes to only expected behaviors.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Parsing",
                    "description": "Inspect HTML for any parsing errors.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Ensure HTML markup is valid.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Status Messages",
                    "description": "Verify that status messages are accessible to screen readers.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
                    },
                    "solution": "Use ARIA roles or live regions to announce status changes.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Meaningful Sequence",
                    "description": "Verify the sequence of form elements follows a logical, meaningful order.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Arrange fields in a logical reading order.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Text Spacing",
                    "description": "Verify that text spacing adjustments do not affect content or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.12",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Ensure content remains accessible with adjusted spacing.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Headings and Labels",
                    "description": "Review that form headings and labels are clear and descriptive.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.6",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
                    },
                    "solution": "Provide clear, descriptive headings and labels.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "No Keyboard Trap",
                    "description": "Ensure the form has no keyboard traps; users can move freely.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow users to freely navigate with keyboard.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Error Identification",
                    "description": "Verify that error messages are clear and guide the user in correcting mistakes.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html"
                    },
                    "solution": "Provide clear, actionable error messages.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Labels or Instructions",
                    "description": "Ensure all form instructions and labels are clear.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"
                    },
                    "solution": "Provide clear guidance and labels for each field.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Error Suggestion",
                    "description": "Ensure helpful error suggestions are provided for incorrect data.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html"
                    },
                    "solution": "Offer actionable suggestions for fixing errors.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Name, Role, Value",
                    "description": "Ensure assistive technologies convey the name, role, and value of each form element.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Ensure form elements are correctly labeled with ARIA attributes.",
                    "result": "Fulfilled",
                    "category": 9
                }
            ]
        },
        {
            "type": "module",
            "group": "listing",
            "name": "listing",
            "criteria": [
                {
                    "name": "Labeling and Structure",
                    "description": "Ensure form elements, table headers, and rows in the listing module are labeled and structured for assistive tech.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1 / 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Add labels to form controls and table headers.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Meaningful Sequence",
                    "description": "Ensure content and navigation follow a logical sequence.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Arrange elements in a logical sequence for easy navigation.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Keyboard Accessibility",
                    "description": "Verify all form controls and interactive elements are accessible with keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1 / 2.1.2 / 2.4.7",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Ensure keyboard navigation is visible and traps are avoided.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Screen Reader Compatibility",
                    "description": "Screen reader should announce labels and content accurately.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1 / 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Review labels for clear screen reader announcements.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Contrast Check",
                    "description": "Check contrast of text and interactive elements in the listing.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure contrast ratios meet the 4.5:1 minimum for readability.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Reflow",
                    "description": "Verify that listing reflows correctly on smaller screens without horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Ensure listing content reflows for mobile compatibility.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Resize Text",
                    "description": "Verify that text resizes without content overlap or loss.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Ensure content remains readable and accessible at 200% text size.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Link Purpose",
                    "description": "Ensure link purposes are clear, especially for sorting and pagination.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose.html"
                    },
                    "solution": "Provide descriptive link text for context.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Focus Order",
                    "description": "Focus should follow a logical order within the listing module.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Ensure logical and sequential focus order.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Orientation",
                    "description": "The listing module should adjust to both portrait and landscape orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Support multiple device orientations.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Character Key Shortcuts",
                    "description": "Ensure no single-character shortcuts cause accidental activation or are remappable.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
                    },
                    "solution": "Disable single-character shortcuts, or make them focus-dependent.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Label in Name",
                    "description": "Accessible name should include the label for each interactive element.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.5.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"
                    },
                    "solution": "Ensure visible labels are included in accessible names.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "On Focus",
                    "description": "Verify that no unexpected changes occur when an element receives focus.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html"
                    },
                    "solution": "Prevent unexpected focus-induced changes.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "On Input",
                    "description": "Ensure no unexpected changes occur on user input.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-input.html"
                    },
                    "solution": "Limit input-induced changes to expected behaviors.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Consistent Identification",
                    "description": "Elements with the same function should have consistent labels throughout.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html"
                    },
                    "solution": "Provide consistent labeling across all elements with the same function.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Labels or Instructions",
                    "description": "Ensure each input field has a clear label or instructions.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"
                    },
                    "solution": "Provide instructions to assist users in completing forms accurately.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Parsing",
                    "description": "Inspect HTML structure for any parsing errors.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Ensure HTML markup is valid.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Text Spacing",
                    "description": "Verify that text spacing adjustments do not affect readability or functionality.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.12",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Ensure text spacing adjustments are handled well.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Bypass Blocks",
                    "description": "Provide a mechanism to skip repetitive content.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
                    },
                    "solution": "Add a 'skip to content' link or similar mechanism.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Headings and Labels",
                    "description": "Verify that headings and labels describe the content they reference.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.6",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
                    },
                    "solution": "Ensure all headings and labels are descriptive.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Focus Visible",
                    "description": "Ensure visible focus indicators are present on all interactive elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.7",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "Provide a visible focus state for all interactive elements.",
                    "result": "Partially Fulfilled",
                    "category": 9
                }
            ]
        },
        {
            "type": "module",
            "group": "search",
            "name": "search",
            "criteria": [
                {
                    "name": "Labeling and Structure",
                    "description": "Ensure the search input, radio buttons, and submit button have associated labels and legends.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1 / 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Use appropriate <label> tags and <fieldset> with <legend> for radio buttons.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Meaningful Sequence",
                    "description": "Verify that the Tab order follows a logical and intuitive sequence.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Arrange form elements in an intuitive order.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Keyboard Accessibility",
                    "description": "Ensure all form elements (input, radio buttons, submit) are accessible via keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1 / 2.4.7",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Add tabindex or adjust order to include all elements.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Screen Reader Compatibility",
                    "description": "Ensure labels and functionality are correctly announced by screen readers.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1 / 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Provide appropriate ARIA attributes or ensure proper HTML structure.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Contrast Check",
                    "description": "Check text elements for contrast ratios of at least 4.5:1.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Adjust color contrast for readability.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Reflow",
                    "description": "Ensure search form reflows correctly on smaller screens without horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Use responsive design practices to avoid horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Resize Text",
                    "description": "Verify form readability and functionality at 200% text size.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Ensure text enlarges without losing content or functionality.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Link Purpose",
                    "description": "Ensure search result links provide clear context and purpose.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Use descriptive link text or attributes to convey purpose.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Orientation",
                    "description": "Verify form usability in both portrait and landscape modes.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure layout adapts to orientation changes.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "No Keyboard Trap",
                    "description": "Ensure users can freely navigate in and out of form elements without traps.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Avoid keyboard traps in interactive elements.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Label in Name",
                    "description": "Ensure accessible names match visible labels for form elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.5.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"
                    },
                    "solution": "Match accessible names with visible labels.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "On Focus",
                    "description": "Ensure no unexpected changes occur when elements receive focus.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html"
                    },
                    "solution": "Prevent unintended focus changes.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "On Input",
                    "description": "Ensure no unexpected changes occur upon data entry in form fields.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-input.html"
                    },
                    "solution": "Limit changes to expected behaviors on input.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Consistent Identification",
                    "description": "Verify consistent labeling across similar elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html"
                    },
                    "solution": "Provide consistent labels for similar elements.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Labels or Instructions",
                    "description": "Ensure each form field has a clear label or instructions if needed.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"
                    },
                    "solution": "Provide clear labels and instructions for form elements.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Parsing",
                    "description": "Verify the HTML for parsing errors.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Ensure valid HTML structure.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Non-text Content",
                    "description": "Check non-text elements (e.g., icons) for appropriate alt text.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Add alt text or mark decorative elements appropriately.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Text Spacing",
                    "description": "Verify text spacing adjustments do not affect readability.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.12",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Ensure readability with adjusted text spacing.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Focus Order",
                    "description": "Ensure logical focus order across form fields.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Provide a meaningful and logical focus order.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Headings and Labels",
                    "description": "Verify that headings and labels are descriptive.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.6",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
                    },
                    "solution": "Ensure descriptive headings and labels.",
                    "result": "Fulfilled",
                    "category": 9
                }
            ]
        },
        {
            "type": "module",
            "group": "comment",
            "name": "comment",
            "criteria": [
                {
                    "name": "Labeling and Structure",
                    "description": "Ensure each form field has a corresponding label to be accessible by assistive technologies.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1 / 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Ensure all form fields, including the checkbox, have appropriate labels and legends.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Meaningful Sequence",
                    "description": "Ensure the Tab order follows a logical sequence.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Reorder elements to follow a logical navigation sequence, including the checkbox.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Keyboard Accessibility",
                    "description": "Ensure that all form fields, including the checkbox, are accessible by keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1 / 2.4.7",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Enable keyboard navigation for all fields, especially the checkbox.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Screen Reader Compatibility",
                    "description": "Ensure that all form fields are announced correctly by screen readers.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1 / 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Add legends and labels to improve screen reader accessibility, especially for the checkbox.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Contrast Check",
                    "description": "Ensure contrast ratio of text and buttons meets the 4.5:1 requirement.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Adjust contrast on comment text and submit button for better readability.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Reflow",
                    "description": "Ensure that the comment form reflows correctly on smaller screens.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Use responsive design practices to avoid horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Resize Text",
                    "description": "Verify that text resizing does not disrupt form usability.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Ensure text can resize without overlapping or losing content.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Link Purpose",
                    "description": "Ensure all links provide clear purposes based on context or attributes.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Use descriptive link text or attributes to indicate purpose.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Error Identification",
                    "description": "Ensure error messages are displayed for missing or invalid fields.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html"
                    },
                    "solution": "Provide programmatically determined error messages for missing or incorrect fields.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Identify Input Purpose",
                    "description": "Ensure input fields are identified for browser autofill.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.5",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
                    },
                    "solution": "Identify fields like Name, Email for autofill.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Non-text Contrast",
                    "description": "Ensure non-text elements like buttons have sufficient contrast.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.11",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Increase contrast for non-text elements to meet 3:1 ratio.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "On Focus",
                    "description": "Ensure no unexpected changes occur on form focus.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html"
                    },
                    "solution": "Prevent unintended focus changes.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "On Input",
                    "description": "Verify no unexpected changes on data entry.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-input.html"
                    },
                    "solution": "Ensure only expected changes occur on input.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Error Suggestion",
                    "description": "Provide helpful error suggestions for invalid data.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html"
                    },
                    "solution": "Provide suggestions for input errors (e.g., invalid email format).",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Text Spacing",
                    "description": "Ensure text spacing adjustments do not disrupt content.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.12",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Allow for adjusted spacing without loss of content.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Focus Order",
                    "description": "Ensure logical focus order across form fields.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Arrange focus order logically for user navigation.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Headings and Labels",
                    "description": "Ensure all headings and labels are descriptive.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.6",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
                    },
                    "solution": "Use descriptive labels and headings.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "No Keyboard Trap",
                    "description": "Ensure no keyboard traps are present.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow users to navigate freely without keyboard traps.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Label in Name",
                    "description": "Ensure accessible names include visible labels.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.5.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"
                    },
                    "solution": "Match accessible names with visible labels for all elements.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Parsing",
                    "description": "Verify well-formed HTML structure.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML to prevent parsing issues.",
                    "result": "Fulfilled",
                    "category": 9
                }
            ]
        },
        {
            "type": "module",
            "group": "navigation",
            "name": "navigation",
            "criteria": [
                {
                    "name": "Labeling and Structure",
                    "description": "Ensure each link is labeled correctly, with programmatically determinable relationships for submenus.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1 / 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Add aria-haspopup to parent links and aria-labels to ensure clear relationships.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Meaningful Sequence",
                    "description": "Ensure logical progression from top-level to submenu items in tab order.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Ensure a logical tab order and sequence for keyboard navigation.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Keyboard Accessibility",
                    "description": "Ensure all links and submenus are keyboard accessible without traps.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1 / 2.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Make all top-level and submenu links accessible via keyboard.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Skip Navigation",
                    "description": "Verify the functionality of 'Skip navigation' link.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
                    },
                    "solution": "Add a functional 'Skip navigation' link to allow bypassing repetitive content.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Focus Visibility",
                    "description": "Ensure visible focus indicators for all interactive elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.7",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "Provide visible focus indicators on all navigation links and submenus.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Link Purpose in Context",
                    "description": "Ensure that each link’s purpose is clear based on link text or context.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Use descriptive text for each navigation link.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Contrast Check",
                    "description": "Verify that navigation text has sufficient contrast.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure navigation text meets contrast ratio requirements of 4.5:1.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Reflow",
                    "description": "Ensure navigation reflows correctly on smaller screens without horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Use responsive design to ensure navigation adapts to screen sizes.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Hover or Focus Content",
                    "description": "Ensure submenus display on focus as well as hover.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.13",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
                    },
                    "solution": "Enable submenus to display on focus for keyboard accessibility.",
                    "result": "Not Fulfilled",
                    "category": 9
                },
                {
                    "name": "Orientation",
                    "description": "Verify correct functionality in both landscape and portrait orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure navigation adjusts to screen orientation changes.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Resize Text",
                    "description": "Ensure navigation remains functional when text size is increased.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Make navigation responsive to increased text sizes.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Text Spacing",
                    "description": "Ensure navigation remains accessible with adjusted text spacing.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.12",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Adjust layout to prevent issues with increased text spacing.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Consistent Navigation",
                    "description": "Verify navigation consistency across pages.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html"
                    },
                    "solution": "Ensure navigation remains consistent throughout the website.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Parsing",
                    "description": "Verify valid HTML structure in navigation.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML markup in navigation elements.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Non-text Content",
                    "description": "Ensure non-text elements have alt text or are marked decorative.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Provide alt attributes for icons or mark them as decorative.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Use of Colour",
                    "description": "Verify that color is not the sole method to convey information.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Use icons or text alongside color to indicate active links.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Multiple Ways",
                    "description": "Verify that users can access main content via multiple methods.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.5",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html"
                    },
                    "solution": "Provide multiple navigation options, such as a site map.",
                    "result": "Fulfilled",
                    "category": 9
                }
            ]
        },
        {
            "type": "module",
            "group": "news",
            "name": "news",
            "criteria": [
                {
                    "name": "Non-text Content",
                    "description": "Inspect images in news items for appropriate alt text.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Provide descriptive alt text for images or mark them as decorative.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Info and Relationships",
                    "description": "Ensure headings, paragraphs, time/date info are programmatically determinable.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Use HTML elements to structure content clearly.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Meaningful Sequence",
                    "description": "Verify reading order of content via visual and keyboard navigation.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Ensure a logical and meaningful sequence in content order.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Orientation",
                    "description": "Test adaptability of news module in different orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure content adapts without loss of information or function.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Identify Input Purpose",
                    "description": "Check if input fields have attributes for autofill.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.5",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
                    },
                    "solution": "Identify input fields for autofill.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Use of Colour",
                    "description": "Ensure color is not the only method to convey information.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Add additional indicators like underlines for links.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Contrast (Minimum)",
                    "description": "Check contrast of text and form elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure contrast ratio of at least 4.5:1 for text elements.",
                    "result": "Partially Fulfilled",
                    "category": 9
                },
                {
                    "name": "Resize Text",
                    "description": "Increase text size and verify readability.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Ensure readability and usability with larger text sizes.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Images of Text",
                    "description": "Check for images used to display text.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.5",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html"
                    },
                    "solution": "Avoid images of text unless essential.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Reflow",
                    "description": "Check reflow of content on small screens.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Ensure content reflows without horizontal scrolling.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Text Spacing",
                    "description": "Adjust text spacing and check readability.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.12",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Ensure readability with increased text spacing.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Non-text Contrast",
                    "description": "Analyze contrast of non-text elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.11",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Ensure a contrast ratio of at least 3:1 for non-text elements.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Content on Hover or Focus",
                    "description": "Check hover and focus behavior of interactive elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.13",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
                    },
                    "solution": "Ensure content displays properly on hover and focus.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Keyboard Accessibility",
                    "description": "Check accessibility of interactive elements via keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Ensure all interactive elements are keyboard accessible.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "No Keyboard Trap",
                    "description": "Ensure navigation without keyboard traps.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow keyboard users to navigate freely.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Focus Order",
                    "description": "Verify logical focus order through news elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Ensure a logical and meaningful focus order.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Link Purpose (In Context)",
                    "description": "Check link purposes for clarity.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Provide clear link text indicating purpose.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Label in Name",
                    "description": "Ensure accessible names match visible labels.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.5.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"
                    },
                    "solution": "Match accessible names to visible labels.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "On Focus",
                    "description": "Verify no unexpected changes occur on focus.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html"
                    },
                    "solution": "Ensure no unexpected changes on focus.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "On Input",
                    "description": "Ensure no unexpected changes occur upon data entry.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-input.html"
                    },
                    "solution": "Prevent unexpected changes on input.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Labels or Instructions",
                    "description": "Ensure labels or instructions are clear for all fields.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"
                    },
                    "solution": "Provide clear labels for form fields.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Error Suggestion",
                    "description": "Provide helpful error messages for invalid input.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html"
                    },
                    "solution": "Provide guidance on correcting errors.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Parsing",
                    "description": "Ensure no HTML parsing errors are present.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Use valid HTML markup in the news module.",
                    "result": "Fulfilled",
                    "category": 9
                },
                {
                    "name": "Status Messages",
                    "description": "Ensure status messages are accessible to screen readers.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
                    },
                    "solution": "Make status messages screen reader accessible.",
                    "result": "Fulfilled",
                    "category": 9
                }
            ]
        },
        {
            "type": "module",
            "group": "event calendar",
            "name": "Event Calendar",
            "criteria": [
                {
                    "name": "Info and Relationships",
                    "description": "Inspect the table structure of the calendar.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Use appropriate HTML elements like <thead>, <th>, and <td> to define relationships.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Meaningful Sequence",
                    "description": "Navigate through the calendar with the keyboard and screen reader.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Ensure content follows a logical sequence from navigation to dates and events.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Orientation",
                    "description": "Test the calendar module in different screen orientations (portrait and landscape).",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Ensure content adapts appropriately to screen orientation changes.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Use of Colour",
                    "description": "Check how weekends are distinguished from weekdays.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Use visual markers like bold text, not just color, to indicate weekends.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Contrast (Minimum)",
                    "description": "Use a contrast checker tool to measure text-to-background contrast.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure contrast ratio of at least 4.5:1 for text.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Resize Text",
                    "description": "Increase the browser's text size to 200% and verify readability.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Ensure text resizes without loss of functionality or content.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Reflow",
                    "description": "Simulate a small screen and check if the calendar layout adapts without horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Ensure content reflows to fit smaller screens without horizontal scrolling.",
                    "result": "Not Fulfilled"
                },
                {
                    "name": "Non-text Contrast",
                    "description": "Measure contrast of non-text elements like table borders.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.11",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Ensure non-text elements have a contrast ratio of at least 3:1.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Text Spacing",
                    "description": "Adjust the browser's text spacing settings.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.12",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Ensure readability and layout stability with increased text spacing.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Keyboard Accessibility",
                    "description": "Navigate the calendar using only the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "Ensure all interactive elements are accessible via keyboard.",
                    "result": "Fulfilled"
                },
                {
                    "name": "No Keyboard Trap",
                    "description": "Verify that users can navigate the calendar without becoming trapped.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow users to freely navigate using the keyboard.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Focus Order",
                    "description": "Use the Tab key to move through interactive elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Ensure focus follows a logical order through elements.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Link Purpose (In Context)",
                    "description": "Review the event links to ensure their purpose is clear.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Provide clear link text indicating each link’s purpose.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Multiple Ways",
                    "description": "Verify users can access event details through multiple methods.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.5",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html"
                    },
                    "solution": "Provide multiple ways to access events.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Focus Visible",
                    "description": "Check that interactive elements show a visible focus indicator.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.7",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "Ensure all focusable elements have a visible focus indicator.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Parsing",
                    "description": "Inspect the HTML for parsing errors or invalid markup.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Ensure the HTML structure is well-formed and free of errors.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Name, Role, Value",
                    "description": "Inspect form elements for correct exposure of name, role, and value.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Expose the name, role, and value programmatically for all form fields.",
                    "result": "Fulfilled"
                }
            ]
        },
        {
            "type": "module",
            "group": "event list",
            "name": "Event List",
            "criteria": [
                {
                    "name": "Info and Relationships",
                    "description": "Inspect the structure of the event list.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Use correct HTML elements like headings and lists to define relationships.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Meaningful Sequence",
                    "description": "Navigate through the event list using keyboard and screen reader.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "Ensure content sequence from date, title, and details link follows a logical order.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Orientation",
                    "description": "Test the event list module in different screen orientations.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "Adapt content to portrait and landscape orientation without content loss.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Use of Colour",
                    "description": "Check if information is conveyed solely through color.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Ensure information is conveyed through more than just color.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Contrast (Minimum)",
                    "description": "Use a contrast checker tool to measure contrast between text and background.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Ensure text has a contrast ratio of at least 4.5:1.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Resize Text",
                    "description": "Increase text size to 200% and check readability.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Ensure text resizing does not affect functionality or content.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Reflow",
                    "description": "Simulate a small screen size and check if the event list adapts without horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Ensure content reflows to fit smaller screens without horizontal scrolling.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Non-text Contrast",
                    "description": "Check contrast between non-text elements like borders and backgrounds.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.11",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Ensure non-text elements have a contrast ratio of at least 3:1.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Text Spacing",
                    "description": "Adjust text spacing settings and check readability.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.12",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Ensure text spacing adjustments do not affect readability or layout.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Keyboard Accessibility",
                    "description": "Navigate the event list using only the keyboard.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "All interactive elements should be accessible and focusable via keyboard.",
                    "result": "Fulfilled"
                },
                {
                    "name": "No Keyboard Trap",
                    "description": "Ensure users can navigate through the event list without becoming trapped.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "Allow users to navigate freely using the keyboard.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Focus Order",
                    "description": "Use the Tab key to navigate and check if the focus order is logical.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Ensure focus order is logical, progressing from event date to event link.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Link Purpose (In Context)",
                    "description": "Ensure each event link clearly indicates its purpose.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Provide clear context for event links through descriptive text.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Focus Visible",
                    "description": "Check visibility of focus indicators on all interactive elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.7",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "Ensure focus indicators are visible on all interactive elements.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Parsing",
                    "description": "Inspect HTML of the event list for parsing errors.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "Ensure HTML is well-formed and free of parsing errors.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Name, Role, Value",
                    "description": "Verify interactive elements expose their name, role, and value programmatically.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "Expose name, role, and value for all interactive elements to assistive technologies.",
                    "result": "Fulfilled"
                }
            ]
        },
        {
            "type": "module",
            "group": "newsletter",
            "name": "Newsletter",
            "criteria": [
                {
                    "name": "Non-text Content",
                    "description": "Inspect CAPTCHA images, buttons, and form elements to ensure they have appropriate text alternatives (aria-label, aria-describedby, alt attributes).",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Ensure all non-text content, such as CAPTCHA and form elements, have descriptive text alternatives.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Info and Relationships",
                    "description": "Check that labels are correctly associated with corresponding fields using the for and id attributes.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Ensure all form elements, such as the email input and checkboxes, are properly associated with their labels.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Meaningful Sequence",
                    "description": "Verify that the reading and navigation order is logical and intuitive.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "The reading and navigation order should follow the logical sequence of the form elements.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Orientation",
                    "description": "Change screen orientation from portrait to landscape and verify that the layout adapts accordingly.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "The layout should adjust properly in both portrait and landscape orientations.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Identify Input Purpose",
                    "description": "Check if fields such as Name and Email are identified for autofill purposes by assistive technologies.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.5",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
                    },
                    "solution": "Input fields should be correctly identified for autofill (e.g., Name, Email).",
                    "result": "Fulfilled"
                },
                {
                    "name": "Use of Colour",
                    "description": "Verify that information is not conveyed solely through color.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "The form should not use color as the sole means of conveying information.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Contrast (Minimum)",
                    "description": "Inspect the contrast ratio of buttons and form text using a contrast-checking tool (e.g., WAVE).",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Buttons and text should meet the minimum contrast requirement of 4.5:1.",
                    "result": "Partially Fulfilled"
                },
                {
                    "name": "Resize Text",
                    "description": "Increase the text size up to 200% and verify that content and functionality are maintained.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Text should resize up to 200% without loss of content or functionality.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Reflow",
                    "description": "Resize the browser window to simulate smaller screens and ensure the form adapts without requiring horizontal scrolling.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "The form should reflow properly without requiring horizontal scrolling.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Non-text Contrast",
                    "description": "Verify the contrast of non-text elements such as buttons and checkboxes using a contrast-checking tool.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.11",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Non-text elements should meet the minimum contrast requirement.",
                    "result": "Not Fulfilled"
                },
                {
                    "name": "Text Spacing",
                    "description": "Increase line height, letter spacing, and word spacing and check the readability of the form.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.12",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "The form should remain readable and usable with increased text spacing.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Keyboard Accessibility",
                    "description": "Use the Tab key to navigate through all form elements (email input, checkbox, submit button).",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "All form elements should be accessible via keyboard.",
                    "result": "Partially Fulfilled"
                },
                {
                    "name": "No Keyboard Trap",
                    "description": "Navigate through all form elements and ensure there are no keyboard traps.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "No keyboard traps should be present in the form.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Focus Order",
                    "description": "Navigate through the form using the keyboard and check that the focus order is logical and intuitive.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "The focus order should follow the logical sequence of the form.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Headings and Labels",
                    "description": "Verify that headings and labels are clear and descriptive of the form elements' purpose.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.6",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
                    },
                    "solution": "Headings and labels should be clear and descriptive.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Focus Visible",
                    "description": "Use the Tab key to navigate through all form elements and ensure focus is visible on all interactive elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.7",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "The focus indicator should be clearly visible on all form elements.",
                    "result": "Fulfilled"
                },
                {
                    "name": "On Focus",
                    "description": "Check that no unexpected changes occur when elements receive focus.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html"
                    },
                    "solution": "No unexpected changes should occur when focus is received.",
                    "result": "Fulfilled"
                },
                {
                    "name": "On Input",
                    "description": "Verify that no unexpected changes occur when input data is entered in a form field.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.2.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/on-input.html"
                    },
                    "solution": "No unexpected changes should occur when data is entered in the form fields.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Error Identification",
                    "description": "Submit the form without filling required fields (e.g., email), and check for error messages.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html"
                    },
                    "solution": "Clear error messages should appear to indicate the missing required fields.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Labels or Instructions",
                    "description": "Verify that all input fields have corresponding labels or instructions.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"
                    },
                    "solution": "Input fields should have labels or instructions to guide users.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Error Suggestion",
                    "description": "Submit incorrect data and check if error suggestions are provided to help correct input mistakes.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 3.3.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html"
                    },
                    "solution": "Clear error suggestions should be provided for correcting mistakes.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Parsing",
                    "description": "Check the HTML structure to ensure there are no parsing errors (e.g., missing tags or incorrect syntax).",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "The HTML should be well-formed and free of parsing errors.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Status Messages",
                    "description": "Verify that status messages (e.g., form submission confirmations) are programmatically conveyed to screen readers.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
                    },
                    "solution": "Status messages should be programmatically conveyed to assistive technologies.",
                    "result": "Fulfilled"
                }
            ]
        },
        {
            "type": "module",
            "group": "FAQ",
            "name": "FAQ",
            "criteria": [
                {
                    "name": "Non-text Content",
                    "description": "Inspect any images, icons, or non-text elements within the FAQ section.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                    },
                    "solution": "Ensure all non-text elements have appropriate alt text or aria-label attributes.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Info and Relationships",
                    "description": "Verify that headings (e.g., <h2>, <h3>) are correctly marked and associated with their respective sections.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    },
                    "solution": "Structure should be semantically correct, with each FAQ section logically associated with its heading.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Meaningful Sequence",
                    "description": "Check the reading and navigation order is logical and intuitive.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    },
                    "solution": "The sequence of content should follow a logical order.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Orientation",
                    "description": "Switch between portrait and landscape orientations to ensure the layout adjusts properly.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.3.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
                    },
                    "solution": "The layout should adapt correctly to both orientations.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Use of Colour",
                    "description": "Verify that information is not conveyed solely through color.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    },
                    "solution": "Information should not rely solely on color.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Contrast (Minimum)",
                    "description": "Check the contrast ratio of text and links using a contrast-checking tool.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    },
                    "solution": "Text and links should meet the minimum contrast requirement of 4.5:1.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Resize Text",
                    "description": "Increase the text size up to 200% and verify that content and functionality are maintained.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                    },
                    "solution": "Text should resize up to 200% without loss of content or functionality.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Reflow",
                    "description": "Resize the browser window to simulate smaller screens and ensure the content reflows properly.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.10",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                    },
                    "solution": "Content should reflow without horizontal scrolling.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Non-text Contrast",
                    "description": "Check the contrast of non-text elements, such as buttons and links, using a contrast-checking tool.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.11",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
                    },
                    "solution": "Non-text elements should meet the contrast requirement of 3:1.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Text Spacing",
                    "description": "Increase line height, letter spacing, and word spacing and check the readability of the FAQ section.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.12",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
                    },
                    "solution": "Content should remain readable and usable with increased text spacing.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Content on Hover or Focus",
                    "description": "Check if content appears when hovered or focused, such as tooltips.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 1.4.13",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
                    },
                    "solution": "Any content that appears on hover or focus should be accessible and visible.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Keyboard Accessibility",
                    "description": "Use the Tab key to navigate through all FAQ sections and interactive elements (links, back-to-top link).",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                    },
                    "solution": "All content should be accessible via keyboard.",
                    "result": "Fulfilled"
                },
                {
                    "name": "No Keyboard Trap",
                    "description": "Navigate through all FAQ sections using the keyboard and check for keyboard traps.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
                    },
                    "solution": "No keyboard traps should be present.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Focus Order",
                    "description": "Navigate the FAQ page using the keyboard and check that the focus order follows a logical sequence.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.3",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
                    },
                    "solution": "Focus should follow a logical order based on the visual layout of the page.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Link Purpose (In Context)",
                    "description": "Check that the purpose of all links is clear from the link text alone (e.g., “Back to top” link).",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.4",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
                    },
                    "solution": "Link purpose should be clear from the text alone, without requiring additional context.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Multiple Ways",
                    "description": "Verify that users can find content through multiple methods, such as via navigation menus or “Back to top” links.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.5",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html"
                    },
                    "solution": "Content should be accessible through multiple ways (e.g., links, search).",
                    "result": "Fulfilled"
                },
                {
                    "name": "Focus Visible",
                    "description": "Use the keyboard to navigate through the FAQ page and verify that the focus indicator is visible on all elements.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 2.4.7",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                    },
                    "solution": "The focus indicator should be clearly visible on all interactive elements.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Parsing",
                    "description": "Check the HTML structure to ensure there are no parsing errors (e.g., missing tags or incorrect syntax).",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.1",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
                    },
                    "solution": "The HTML should be well-formed and free of parsing errors.",
                    "result": "Fulfilled"
                },
                {
                    "name": "Name, Role, Value",
                    "description": "Verify that all interactive components expose their name, role, and value to assistive technologies.",
                    "wcag": {
                        "wcag_level": true,
                        "name": "WCAG 4.1.2",
                        "link": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                    },
                    "solution": "All interactive components should correctly expose their name, role, and value.",
                    "result": "Fulfilled"
                }
            ]
        }
    ]
};
