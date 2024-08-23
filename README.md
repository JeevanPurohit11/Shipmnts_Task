# README for Excel File Upload Web Application
# MERN Deployment URL : https://shipmnts-frontend.vercel.app/
## Project Overview

This web application allows users to upload Excel files (.xls or .xlsx) containing data for authors and their books. The application will validate the uploaded data, display it for user review, and store the validated data in a database upon user confirmation.

## Features

- **File Upload**: Users can upload Excel files containing author and book data.
- **Data Display**: The contents of the uploaded Excel sheet are displayed in a table format for review.
- **Data Validation**: The application validates the uploaded data to ensure it meets required formats and constraints.
- **Database Storage**: Validated data is stored in a database after user confirmation.
- **Error Handling**: The application provides feedback for any errors encountered during the upload process.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express framework
- **Database**: MongoDB (or any preferred database)
- **Excel Parsing**: `xlsx` or `exceljs` library for Node.js

## Steps to Implement

### 1. Frontend Implementation

- Create a web page with a file upload form that allows users to select and upload their Excel files.

### 2. Backend Implementation

- Set up a backend server using Node.js and Express to handle file uploads and data processing.

### 3. Data Parsing and Validation

- Use a library to parse the uploaded Excel file and extract author and book data.
- Validate each row of data to ensure it matches expected formats (e.g., string for names, numeric for ISBN).
- Handle missing or invalid data appropriately.

### 4. Database Integration

- Prepare the database schema and tables to store author and book data.
- Implement functionality to save validated data into the database.

### 5. User Interface

- After parsing and validating the data, display it in a table format on the web page for user review.
- Provide options for users to confirm or cancel the upload.

### 6. Error Handling and Feedback

- Implement error handling for file upload failures, data validation errors, and database storage issues.
- Provide appropriate error messages to guide users through the process.

## Usage Instructions

1. **Uploading Excel Files**:
   - Navigate to the upload page.
   - Select an Excel file containing author and book data.
   - Click the "Upload" button.

2. **Reviewing Data**:
   - After uploading, review the displayed data in the table format.
   - Check for any validation errors highlighted in the table.

3. **Confirming Upload**:
   - If the data is correct, click the "Confirm" button to save the data to the database.
   - If there are errors, click "Cancel" to discard the upload.

4. **Error Messages**:
   - If any errors occur during the upload or validation process, appropriate messages will be displayed to guide you.

## Deliverables

- A fully functional web application with file upload functionality.
- Clear documentation on how to use the application, including instructions for uploading Excel files, reviewing data, and confirming uploads.

## Conclusion

This application aims to streamline the process of uploading and managing author and book data via Excel files, ensuring a user-friendly experience with robust validation and error handling.

Citations:
[1] https://support.microsoft.com/en-us/office/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring-7152aa8b-b791-414c-a3bb-3024e46fb104?ad=us&rs=en-us&ui=en-us
[2] https://community.onestreamsoftware.com/t5/Workflow-and-Data-Integration/Excel-Template-upload-Data-Source-setup/td-p/20747
[3] https://support.microsoft.com/en-us/office/import-or-link-to-data-in-an-excel-workbook-a1952878-7c58-47b1-893d-e084913cc958
[4] https://help.tallysolutions.com/tally-prime/import-data/download-sample-excel-files-with-data-for-import/
[5] https://www.datacamp.com/tutorial/python-excel-tutorial
[6] https://adcogov.org/sites/default/files/7156.pdf
[7] https://stackoverflow.com/questions/51084434/how-to-upload-an-excel-sheet-file-using-react-js-and-display-data-to-a-table
[8] https://clickup.com/blog/excel-database/
