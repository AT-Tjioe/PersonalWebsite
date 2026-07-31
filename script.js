document.addEventListener("DOMContentLoaded", () => {
    // 1. Highlight the current active page in the navigation menu
    const currentUrl = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        // If the link href matches the current file name, add the active class
        if (link.getAttribute("href") === currentUrl || (currentUrl === "" && link.getAttribute("href") === "index.html")) {
            link.style.color = "var(--accent-hover)";
            link.style.borderBottom = "2px solid var(--accent-hover)";
            link.style.paddingBottom = "4px";
        }
    });

    // 2. Smooth Form Submission Handling (Prevents sudden page reloads)
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Stop the page from reloading instantly
            
            // Get form values safely
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            
            // Modern confirmation UI feedback
            const submitButton = contactForm.querySelector("button[type='submit']");
            const originalText = submitButton.innerText;
            
            submitButton.innerText = "Sending...";
            submitButton.disabled = true;

            // Simulate server network delay
            setTimeout(() => {
                submitButton.innerText = "Message Sent! ✓";
                submitButton.style.background = "#10b981"; // Success Green
                
                alert(`Thank you, ${name}! Your inquiry has been sent. We will reply to ${email} shortly.`);
                contactForm.reset(); // Clear fields

                // Revert button status back to normal after a short pause
                setTimeout(() => {
                    submitButton.innerText = originalText;
                    submitButton.style.background = "var(--accent-color)";
                    submitButton.disabled = false;
                }, 3000);
            }, 1200);
        });
    }
});
