function sendMail (contactForm) {
    emailjs.send("service_6uv5c2b","template_wcealwy", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "body": contactForm.body.value,
        "subject": contactForm.subject.value,
    })
    .then (
        function(response) {
            console.log("SUCCESS", response);
        },
    function(error) {
        console.log("FAILED", error);
    });
    return false;
}