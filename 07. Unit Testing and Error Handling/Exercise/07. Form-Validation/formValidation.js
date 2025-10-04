function validate() {
    const formRef = document.querySelector("form")

    formRef.addEventListener("submit", (event) => {
        event.preventDefault();
    });

    const submitButton = document.getElementById("submit");

    const usernameInputField = document.getElementById("username");
    const emailInputField = document.getElementById("email");
    const passwordInputField = document.getElementById("password");
    const confirmPasswordInputField = document.getElementById("confirm-password");

    const companyCheckbox = document.getElementById("company");
    const companyInfoDiv = document.getElementById("companyInfo");
    const companyNumberField = document.getElementById("companyNumber");

    const validMessageField = document.getElementById("valid");

    companyCheckbox.addEventListener("change", (event) => {
        if (companyCheckbox.checked) {
            companyInfoDiv.style.display = "block";
        } else {
            companyInfoDiv.style.display = "none";
        }
    });

    submitButton.addEventListener("click", (event) => {

        let allFieldsValid = true;

        const username = usernameInputField.value;
        const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        if (usernamePattern.test(username)) {
            usernameInputField.style.border = "";
        } else {
            usernameInputField.style.borderColor = "red";
            allFieldsValid = false;
        }

        const email = emailInputField.value;
        const emailPattern = /.+@.+\..+/;
        if (emailPattern.test(email)) {
            emailInputField.style.border = "";
        } else {
            emailInputField.style.borderColor = "red";
            allFieldsValid = false;
        }

        const password = passwordInputField.value;
        const confirmPassword = confirmPasswordInputField.value;
        const passwordPattern = /^\w{5,15}$/;

        const isPasswordFormatValid = passwordPattern.test(password);
        const isConfirmPasswordFormatValid = passwordPattern.test(confirmPassword);
        const doPasswordsMatch = password === confirmPassword;

        if (isPasswordFormatValid && doPasswordsMatch) {
            passwordInputField.style.border = '';
        } else {
            passwordInputField.style.borderColor = 'red';
            allFieldsValid = false;
        }

        if (isConfirmPasswordFormatValid && doPasswordsMatch) {
            confirmPasswordInputField.style.border = '';
        } else {
            confirmPasswordInputField.style.borderColor = 'red';
            allFieldsValid = false;
        }

        if (companyCheckbox.checked) {
            const companyNumber = Number(companyNumberField.value);
            if (companyNumber >= 1000 && companyNumber <= 9999) {
                companyNumberField.style.border = "";
            } else {
                companyNumberField.style.borderColor = "red";
                allFieldsValid = false;
            }
        }

        if (allFieldsValid) {
            validMessageField.style.display = "block";
        } else {
            validMessageField.style.display = "none";
        }
    });
}