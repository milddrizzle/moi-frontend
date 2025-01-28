import { useState } from "react"
import { isAlpha, isEmpty } from "validator";
import isEmail from "validator/lib/isEmail";

interface UserEmailProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    step: number;
}

const UserEmail = ({ step, setStep }: UserEmailProps) => {
    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        first_name_error: '',
        email_error_name: ''
    })

    const [delay, setDelay] = useState(true)

    if (step === 1) {
        setTimeout(() => {
            setDelay(false)
        }, 5000)
    }

    const updateInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.name === "first_name" ? setFormData({ ...formData, first_name_error: "", [event.target.name]: event.target.value }) : setFormData({ ...formData, email_error_name: "", [event.target.name]: event.target.value })
    }

    const updateInputOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.name === "first_name" ? setFormData({ ...formData, first_name_error: "", [event.target.name]: event.target.value }) : setFormData({ ...formData, email_error_name: "", [event.target.name]: event.target.value })
    }

    const moveToNextStep = () => {
        setStep(2)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const errors: {
          first_name_error?: string;
          email_error_name?: string;
        } = {};
      
        // Check if `first_name` is empty
        if (isEmpty(formData.first_name)) {
          errors.first_name_error = "First name is required";
        } else if (!isAlpha(formData.first_name)) {
          // Check if `first_name` contains only letters
          errors.first_name_error = "First name should be letters only";
        }
      
        // Check if `email` is valid
        if (isEmpty(formData.email)) {
          errors.email_error_name = "Email is required";
        } else if (!isEmail(formData.email)) {
          errors.email_error_name = "Enter a valid email address";
        }
      
        // If there are errors, update the state
        if (Object.keys(errors).length > 0) {
          setFormData((prevData) => ({
            ...prevData,
            ...errors,
          }));
          return;
        }
      
        // Proceed to the next step if no errors
        setStep(2);
      };
      


    return (
        <section className="flex items-center p-4 md:p-12 shadow-lg flex-col rounded-lg bg-[#f8f7ee] text-black  w-full max-w-2xl min-h-[400px] self-center justify-items-center">
            <p className="font-sub mb-6">
                While we search, signup to keep in the loop on all things baby names!
            </p>
            <form onSubmit={handleSubmit} noValidate className="w-[100%] flex flex-col gap-4 font-sub">
                <div className="flex flex-col md:flex-row w-[100%] md:items-start justify-center gap-4">
                    <div className="flex flex-col md:flex-row justify-normal gap-4">
                        <label className="max-w-xs flex flex-col gap-2 font-sub font-[600] text-[14px] w-[215px]" htmlFor="first_name">
                            First Name
                            <input onChange={updateInputOnChange} onFocus={updateInputOnFocus} placeholder="Your first name" type="text" name="first_name" id="first_name" className="focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 rounded-full w-[100%] font-[400] border-[1px] border-gray-400 appearance-none font-sub text-[16px] xl:text-[18px]" />
                        </label>
                        <label className="max-w-xs flex flex-col gap-2 font-sub font-[600] text-[14px]  w-[215px]" htmlFor="email">
                            Email
                            <input onChange={updateInputOnChange} onFocus={updateInputOnFocus} placeholder="Your email" type="email" name="email" id="email" className="focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 font-[400] rounded-full w-[100%] border-[1px] border-gray-400 appearance-none font-sub text-[16px] xl:text-[18px]" />
                        </label>
                    </div>
                    <button type="submit" className="w-fit px-[1rem] h-[3rem] bg-cyan-500 rounded-full text-black md:self-end">
                        Save
                    </button>
                </div>
                <div className="flex flex-col gap-1 w-[100%] self-start justify-start">
                    <p className="text-sm text-red-700 font-sub">
                        {formData.first_name_error}
                    </p>
                    <p className="text-sm text-red-700 font-sub">
                        {formData.email_error_name}
                    </p>
                </div>
            </form>
            {
                delay ? 
                    <button className="outline-none self-center w-[100%] text-center text-sky-500 font-medium" onClick={moveToNextStep}>
                    No thanks, show me the names! </button>
                    : 
                        <p className="text-center inline">
                            Searching the galaxy of baby names, just a moment!
                        <img src="/worm.png" alt="Mother of Invention" className="w-5 inline animate-bounce" />
                        <img src="/berry.png" alt="Mother of Invention" className="w-4 inline animate-bounce" />
                        <img src="/apple.png" alt="Mother of Invention" className="w-4 inline animate-bounce" />
                    </p>
            }
        </section>
    )
}

export default UserEmail