document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting
    
    // get the form data
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const subject = document.getElementById('subject').value;
    
    // construct the email body with a line break after the message and user's name
    const emailBody = `${message}\n\nSincerely,\n${name}`;
    
    // create a mailto link with the email body as the message parameter									
    const mailtoLink = `mailto:kriegeranalytics@gmail?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    
    // navigate to the mailto link
    window.location.href = mailtoLink;
});
