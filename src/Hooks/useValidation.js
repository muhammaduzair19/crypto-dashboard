const useValidation = ({ email, password }) => {
    
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


export default useValidation;