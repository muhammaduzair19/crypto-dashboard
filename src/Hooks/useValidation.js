export const useLoginValidation = ({ email, password }) => {

    console.log(email, "email");
    console.log(password, "password");
    const errors = {};

    if (!email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
    }

    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }


    return errors;
};

export const useConfirmPasswordValidation = ({ password, confirmPassword }) => {

    console.log(password, "password");
    console.log(confirmPassword, "confirmPassword");
    const errors = {};

    if (!password && !confirmPassword) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
    else if (password.length !== confirmPassword.length) {
        errors.confirmPassword = 'Passwords should match';
    }
    else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords should match';
    }

    return errors;
};

