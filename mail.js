 // Get the form element
 const contactForm = document.getElementById('contact-form');

 // Add an event listener to handle form submission
 contactForm.addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent the default form submission

     // Collect form data
     const name = document.querySelector('input[name="name"]').value;
     const email = document.querySelector('input[name="email"]').value;
     const projectDetails = document.querySelector('textarea[name="project_details"]').value;

     // Validate if any field is empty
     if (!name || !email || !projectDetails) {
         alert("Please fill in all fields before submitting.");
         return;
     }

     // Send email using EmailJS
     emailjs.send("service_2kgxqwh", "YOUR_TEMPLATE_ID", {
         name: name,
         email: email,
         project_details: projectDetails,
         to_email: "athar.ai.developer@gmail.com"  // Send to your email
     })
     .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         alert("Your message has been sent successfully!");
         contactForm.reset(); // Reset the form after submission
     }, function(error) {
         console.log('FAILED...', error);
         alert("Failed to send the message. Please try again later.");
     });
 });