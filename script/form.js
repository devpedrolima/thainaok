document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
      document.getElementById('form-notification').innerText = 'Please fill in all fields.';
      return;
    }

    // Send the form data to the server or perform any other actions here

    document.getElementById('form-notification').innerText = 'Your message has been sent.';
    document.getElementById('contact-form').reset();
  });