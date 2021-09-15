import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup.string()
        .trim()
        .required('Name is required!'),
    lastName: yup.string()
        .trim()
        .required('Name is required!'),
    email: yup
        .string()
        .email("Must be a valid email address!")
        .required("Email is required."),
    password: yup.string()
        .trim()
        .required('Password is required!')
        .min(6, 'Password must be atleast 6 characters long.'),
    terms: yup.boolean()
        .oneOf([true], "Terms Of Service Must Be Accepted.")
    
        

})

export default formSchema;