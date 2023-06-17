// Import initNcaptcha from 'lnc-n-captcha'
import initNCaptcha from 'lnc-n-captcha';
window.addEventListener('DOMContentLoaded', () => {
    //Method to init nCaptcha for element with id nCaptcha-verification
    initNCaptcha();
    // Get the form element
    const form = document.getElementById('example-form');
    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        // Check if the nCaptcha is valid
        if (!window?.nCaptchaWallet?.nCaptcha?.isValid) {
            // Prevent the form from being submitted
            event.preventDefault();
            // Optionally, you can display an error message or perform other actions
            alert('please verify form with nCaptcha');
        }
    });
});