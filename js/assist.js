document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('#contactForm'); // Ensure this ID matches your HTML
    const thankYouModal = document.getElementById('thankYouModal');
    const closeButton = document.querySelector('.close-button');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            console.log("Form submission triggered");

            const name = contactForm.querySelector('input[placeholder="Enter Your Name"]').value.trim();
            const phone = contactForm.querySelector('input[placeholder="Enter Your Phone Number"]').value.trim();
            const email = contactForm.querySelector('input[placeholder="Enter Your Email Id"]').value.trim();
            const message = contactForm.querySelector('textarea[placeholder="Give us your suggestion"]').value.trim();

            console.log({ name, phone, email, message });

            const nameValid = name.length > 0;
            const phoneValid = /^\d{10}$/.test(phone);
            const emailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
            const messageValid = message.length > 0;

            let feedbackElement = document.getElementById('formFeedback');
            if (!feedbackElement) {
                feedbackElement = document.createElement('p');
                feedbackElement.id = 'formFeedback';
                contactForm.appendChild(feedbackElement);
            }

            if (nameValid && phoneValid && emailValid && messageValid) {
                const formData = { name, phone, email, message };
                localStorage.setItem("formData", JSON.stringify(formData));
                
                thankYouModal.style.display = "block";
                contactForm.reset(); 

                console.log('Form Data:', formData);
            } else {
                feedbackElement.textContent = 'Please fill in all fields with valid information.';
                if (!nameValid) {
                    console.log('Invalid Name: Name cannot be empty.');
                }
                if (!phoneValid) {
                    console.log('Invalid Phone Number: Must be a 10-digit number.');
                }
                if (!emailValid) {
                    console.log('Invalid Email Address: Please enter a valid email.');
                }
                if (!messageValid) {
                    console.log('Invalid Message: Message cannot be empty.');
                }
            }
        });

        // Close the modal when the close button is clicked
        closeButton.onclick = function() {
            thankYouModal.style.display = "none";
        }

        // Close the modal when clicking outside of the modal content
        window.onclick = function(event) {
            if (event.target === thankYouModal) {
                thankYouModal.style.display = "none";
            }
        }
    } else {
        console.error("Contact form element not found.");
    }
});
