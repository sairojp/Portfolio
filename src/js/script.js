(function () {
    "use strict"; 
    console.log('js');
    emailjs.init('_Wt5U4aG0KZ6g6ZFj');  

    const form = document.querySelector('#form');
    const formControl = document.querySelectorAll('#form .form-control');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Button clicked")
        const serviceID = 'service_58igqws';
        const templateID = 'template_t4kfbxf';
        
        // Check inputs before sending
        if (checkInputs.call(form)) {
            emailjs.sendForm(serviceID, templateID, form)
                .then(() => {
                    alert('Message sent successfully!');
                    form.reset(); // reset the form after submission
                }, (err) => {
                    alert(JSON.stringify(err));
                });
        }
    });

    function checkInputs() {
        const emailValue = this.email.value.trim().toLowerCase();

        if (emailValue === '') {
            setErrorFor('Empty Field');
            this.email.focus();
            return false; // Prevent sending if there is an error
        } else if (!checkEmail(emailValue)) {
            setErrorFor('Sorry, invalid format');
            this.email.focus();
            return false; // Prevent sending if there is an error
        } else {
            setSuccessFor();
            return true; // Allow sending if all checks pass
        }
    }

    function setErrorFor(message) {
        const small = formControl[1].querySelector('small');
        formControl[1].className = 'form-control error';
        small.innerText = message;
        console.log('error');
    }

    function setSuccessFor() {
        for (let i = 0; i < formControl.length; i++) {
            formControl[i].className = 'form-control success';
        }
    }

    // REGEX
    function checkEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
})();
