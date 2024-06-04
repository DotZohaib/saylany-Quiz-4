document.addEventListener('DOMContentLoaded', function () {
    // Add your JavaScript code here for animations or additional functionalities
    // For example, a simple rotation animation on hover
    const images = document.querySelectorAll('#left_body img');
    images.forEach(image => {
        image.addEventListener('mouseover', function () {
            this.style.transform = 'rotate(0deg)';
        });

        image.addEventListener('mouseout', function () {
            this.style.transform = 'rotate(45deg)';
        });
    });
});


{/* <form id="contact-form">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <button type="submit">Send Message</button>
</form>

<script>
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;

  if (!name || !email) {
    alert('Please fill in all required fields.');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email address.');
  } else {
    // Submit the form
  }
}); */}
