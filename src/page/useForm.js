import { useState , useEffect } from "react";

const UseForm = (validate) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        cfpassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        setErrors(validate(values));
        setSubmitting(true);
    };

    return {handleChange, values, handleSubmit, errors};
}

export default UseForm;