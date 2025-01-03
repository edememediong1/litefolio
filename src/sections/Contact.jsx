import {useState, useRef} from 'react';
import {sendEmail}  from '../utils/emailjs';
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

    const formRef = useRef()

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
                const templateParams = {
                    from_name: values.name,
                    from_email: values.email,
                    message: values.message,
                  };
                await sendEmail(templateParams);
                setSubmitStatus("Message sent successfully");
                // Reset the form
                setValues(INITIAL_STATE);
            } catch (error) {
                console.error(error)
                setSubmitStatus("Failed to send message");
                
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    // const handleDarkModeChange = (newDarkMode) => {
    //     setIsDarkMode(newDarkMode)
    // };

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
    <div className='flex flex-col items-center justify-center h-[170vh] p-10 w-screen bg-primary-bg'>
        <p className="text-[55px] font-jamjuree font-bold bg-gradient-to-r from-lemon via-purple to-dark-light bg-clip-text text-transparent">Get in touch</p>
        <p className="text-[20px] font-jamjuree text-dark-light mt-[20px] mb-[25px] w-[70%] text-center">With 2 years of experience as a designer and developer, I have worked with many clients worldwide, built numerous frontend, backend, and AI applications, managed various projects, and contributed to Opensource projects</p>
        <form onSubmit={onSubmit} className="space-y-5 w-[70%] bg-[#1f273a] p-8 rounded-md shadow-md">
            <div>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your name" 
                    onChange={handleChange} 
                    value={values.name} 
                    className={` w-full p-4 rounded-md outline-none bg-primary-bg text-[#c2bad2] font-jamjuree ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-[5px]">{errors.name}</p>}
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    onChange={handleChange}
                    value={values.email}
                    className={`w-full p-4 rounded-md outline-none bg-primary-bg text-[#c2bad2] font-jamjuree ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div>
                <textarea 
                name="message"
                placeholder='Your message'
                onChange={handleChange}
                value={values.message}
                className={`w-full h-[150px] p-3 rounded-md resize-none outline-none bg-primary-bg text-[#c2bad2] font-jamjuree ${errors.message ? 'border-red-500' : ""}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full p-4 text-[#c2bad2] font-jamjuree bg-primary-bg">
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submitStatus && <p className="text-center mt-4">{submitStatus}</p>}
        </form>
    </div>
  )
}

export default Contact