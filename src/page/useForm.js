import { useState } from "react";
import { useMutation } from "@apollo/client";
import Swal from 'sweetalert2'
import { CREATE_USER } from "../Graphql/mutation";

const UseForm = (callback, validate) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cfpassword: '',
    });
    const [error, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const [createUser] = useMutation(CREATE_USER, {
        onCompleted(success) {
            if (success) {
                Swal.fire({
                    title: "Sign up success!",
                    html: "Press Ok to login page",
                    icon: "success",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    didClose: () => {
                        window.location.replace("/login");
                    },
                });
            }
        },
        onError(errors) {
            if (errors) {
                const err = errors.message;
                Swal.fire({
                    title: "Not success!",
                    html: err,
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                });
            }
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));
        if (Object.keys(error).length === 0) {
            console.log('hello');
            const param = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
            };
            createUser({
                variables: { input: param }
            })
        }
    };

    return { handleChange, values, handleSubmit, error };
}

export default UseForm;