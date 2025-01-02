import useState from 'react';
import { sendEmail } from '../utils/emailjs';
// import { useFormValidation } from '../hooks/useFormValidation';

const INITIAL_STATE = {
    name: "",
    email: "",
    message: ""
}

function Contact() {
    const [values, setValues] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("")



    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            try {
                await sendEmail(values);
                setSubmitStatus("Message sent successfully");
                // Reset the form
                setValues(INITIAL_STATE);
            } catch (error) {
                setSubmitStatus("Failed to send message");
                console.log(error)
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleDarkModeChange = (newDarkMode) => {
        setIsDarkMode(newDarkMode)
    };

    const validate = (values) => {
        let errors = {};
        if (!values.name.trim()){
            errors.name = "Name is required";
        }

        if (!values.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email is invalid";
        }
        if (!values.message.trim()) {
            errors.message = "Message is required";
        }
        return errors;
    }


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-primary-bg'>
        <p className="text-[55px] font-jamjuree font-bold bg-gradient-to-r from-lemon via-purple to-dark-light bg-clip-text text-transparent">Get in touch</p>
        <p className="text-[20px] font-jamjuree text-dark-light mt-[20px] mb-[25px] w-[70%] text-center">With 2 years of experience as a designer and developer, I have worked with many clients worldwide, built numerous frontend, backend, and AI applications, managed various projects, and contributed to Opensource projects</p>
        <form onSubmit={onSubmit} className="">
            <div>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your name" 
                    onChange={handleChange} 
                    value={values.name} 
                    className={`w-full ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    onChange={handleChange}
                    value={values.email}
                    className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
        </form>
    </div>
  )
}

export default Contact