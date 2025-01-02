import {useState, useEffect} from 'react';

export const useFormValidation = (initialState) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting , setIsSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                setIsSubmitting(false);
            } else {
                setIsSubmitting(false)
            }
        }   
    }, [errors, isSubmitting])

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true)
    };

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required"
        }
        if (!values.email){
            errors.email = "Email is required"
        }else if (!/\S+@\S+\.\S+/.test(values.email)){
            errors.email = "Email is invalid"
        }
        if (!values.message){
            errors.message = "Message is required"
        }
        return errors;
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        isSubmitting
    }
}

