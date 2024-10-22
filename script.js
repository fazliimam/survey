document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form responses
    const question1 = document.querySelector('input[name="question1"]:checked').value;
    const question2 = document.querySelector('input[name="question2"]:checked').value;
    const question3 = document.querySelector('input[name="question3"]:checked').value;

    // Create CSV data
    const csvContent = `data:text/csv;charset=utf-8,Question1,Question2,Question3\n${question1},${question2},${question3}`;

    // Create a download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "survey_responses.csv");

    // Append the link to the document and click to start download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
