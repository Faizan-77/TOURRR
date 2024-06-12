document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    if (destination && date && name && email && phone) {
      alert('Thank you for your booking, ' + name + '! We will contact you soon.');
      // Here, you can add code to send this data to your server or API for processing.
    } else {
      alert('Please fill out all the fields.');
    }
  });
  