const scriptURL = 'https://script.google.com/macros/s/AKfycbwieNjagSV-HFuE8I0458U9P4uS9PKTCGEFwMXAQXqyhPyKIFskcYHZLDmae9Y7rwPK/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();  // Prevents the default form submission

  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form)
  })
  .then(response => {
    // Redirect to the thank-you page after form submission
    window.location.href = 'thank-you.html'; // Redirection to thank-you page
  })
  .catch(error => {
    console.error('Error!', error.message);
    alert("There was an error submitting your form. Please try again.");
  });
});
