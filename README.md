# Contao Accessi Kit Contao bundle

## Web Accessibility Tool for Contao CMS

### MoSCoW Requirements

#### Must Have

##### Functional

- [x] **F1**: The system must display a view with settings when the "Web Accessibility" tab is clicked.
- [x] **F2**: The system must offer a dropdown to select from current pages created in Contao.
- [x] **F3**: The system must enable administrators to send an API request to the WAVE Accessibility Tool to analyze the selected page, with an option to specify the analysis precision via a dropdown menu.
- [x] **F4**: The system must display the analysis results from the WAVE Accessibility Tool, highlighting accessibility issues on the selected page.
- [x] **F5**: The system must provide options for administrators to download the report as a PDF.

##### Non-Functional

- [x] **NF1**: The system must ensure a user-friendly interface for navigating and interacting with the "Web Accessibility" settings and reports.
- [x] **NF3**: The system must be designed to integrate seamlessly with the existing Contao backend without disrupting its current functionality.

#### Should Have

##### Functional

- [x] **F6**: The system should provide options for administrators to save the report.
- [x] **F7**: The system should store saved reports in a separate tab within the "Web Accessibility" section for future reference.
- [x] **F8**: The system should allow for filtering or searching through saved reports to help administrators find specific analyses quickly.
- [x] **F9**: The system should include tooltips or help sections to guide administrators on how to interpret the accessibility analysis results and potentially remediate identified issues.

##### Non-Functional

- [ ] **NF2**: The system must ensure high performance (under 5 seconds) and responsiveness when interacting with the WAVE Accessibility Tool API and displaying results.
- [x] **NF4**: The system should support easy updates and maintenance to adapt to potential changes in the WAVE Accessibility Tool API or Contao CMS updates.
- [x] **NF5**: The system should ensure the accessibility report download process is intuitive and straightforward.

#### Could Have

##### Functional

- [ ] **F10**: The system should provide a summary overview of accessibility issues identified in each report for quick assessment.
- [ ] **F11**: The system could offer a feature to schedule periodic accessibility checks for selected pages and automatically save or email the reports.

##### Non-Functional

- [x] **NF6**: The system could be designed with a modular architecture, allowing for the addition of automation features or integration with other tools in future phases.
- [ ] **NF7**: The system could provide customization options for the report's appearance and the information included in the PDF download.

#### Won't Have

##### Functional

- [x] **F12**: The system won't include automatic correction features for identified accessibility issues in this phase.
- [x] **F13**: The system won't extend the functionality to automatically analyze new pages or content without manual initiation by an administrator.

##### Non-Functional

- [x] **NF8**: The system won't require any modifications to the core Contao CMS codebase, ensuring that updates to Contao do not affect the plugin's functionality.
