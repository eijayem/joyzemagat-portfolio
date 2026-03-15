document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const button = document.getElementById("submit-btn");

    if (!form) return;

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        button.disabled = true;
        button.innerText = "Sending...";
        
        const data = new FormData(event.target);
        
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks! Your message has been sent.";
                status.style.color = "var(--jacarta)";
                form.reset();
                button.innerText = "Sent!";
 
                document.querySelector('.form-wrapper').style.opacity = "0.7";
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form.";
                    }
                });
            }
        }).catch(error => {
            status.innerHTML = "Oops! Form not found";
            status.style.color = "var(--brown-chocolate)";
        }).finally(() => {
            button.disabled = false;
            if(button.innerText !== "Sent!") {
                button.innerText = "Submit";
            }
        });
    });
});