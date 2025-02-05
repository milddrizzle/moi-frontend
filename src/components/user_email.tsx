import { useState } from "react"
import { isAlpha, isEmpty } from "validator";
import isEmail from "validator/lib/isEmail";
import useRequestContext from "../hooks/use_request_context";

interface UserEmailProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    step: number;
}

const UserEmail = ({ step, setStep }: UserEmailProps) => {
    const [userData, setUserData] = useState({
        first_name: '',
        email: '',
        first_name_error: '',
        email_error: ''
    })

    const { formData, setLoading } = useRequestContext()

    const updateInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.name === "first_name" ? setUserData({ ...userData, first_name_error: "", [event.target.name]: event.target.value }) : setUserData({ ...userData, email_error: "", [event.target.name]: event.target.value })
    }

    const updateInputOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.name === "first_name" ? setUserData({ ...userData, first_name_error: "", [event.target.name]: event.target.value }) : setUserData({ ...userData, email_error: "", [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const errors: {
          first_name_error?: string;
          email_error?: string;
        } = {};
      
        // Check if `first_name` is empty
        if (isEmpty(userData.first_name)) {
          errors.first_name_error = "First name is required";
        } else if (!isAlpha(userData.first_name)) {
          // Check if `first_name` contains only letters
          errors.first_name_error = "First name should be letters only";
        }
      
        // Check if `email` is valid
        if (isEmpty(userData.email)) {
          errors.email_error = "Email is required";
        } else if (!isEmail(userData.email)) {
          errors.email_error = "Enter a valid email address";
        }
      
        // If there are errors, update the state
        if (Object.keys(errors).length > 0) {
          setUserData((prevData) => ({
            ...prevData,
            ...errors,
          }));
          return;
        }

        setLoading(true) // make api request for streaming
        setStep(2) // move to different steps depending on whether request has been completed
        
        // save user name and email to db
        try {
            await fetch("http://localhost:3900/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: userData.first_name, email: userData.email, due_date: formData.due_date }),
            });

            // save to local storage too
            localStorage.setItem('saved_email', 'true')
        } catch (error) {
            console.error("Fetch error:", error);
        }
      };
      


    return (
        <section className="flex items-center p-4 md:p-12 shadow-lg flex-col rounded-lg bg-[#f8f7ee] text-black  w-full max-w-2xl min-h-[350px] self-center justify-items-center">
            <p className="font-sub mb-6">
                While we search, signup to keep in the loop on all things baby names!
            </p>
            <form onSubmit={handleSubmit} noValidate className="w-[100%] flex flex-col gap-4 font-sub">
                <div className="flex flex-col md:flex-row w-[100%] md:items-start justify-center gap-4">
                    <div className="flex flex-col md:flex-row justify-normal gap-4">
                        <label className="max-w-xs flex flex-col gap-2 font-sub font-[600] text-[14px] w-[215px]" htmlFor="first_name">
                            First Name
                            <input onChange={updateInputOnChange} onFocus={updateInputOnFocus} placeholder="Your first name" type="text" name="first_name" id="first_name" className="focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 rounded-full w-[100%] font-[400] border-[1px] border-gray-400 bg-[#f8f7ee] appearance-none font-sub text-[14px]" />
                        </label>
                        <label className="max-w-xs flex flex-col gap-2 font-sub font-[600] text-[14px]  w-[215px]" htmlFor="email">
                            Email
                            <input onChange={updateInputOnChange} onFocus={updateInputOnFocus} placeholder="Your email" type="email" name="email" id="email" className="focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 font-[400] rounded-full w-[100%] border-[1px] border-gray-400 bg-[#f8f7ee] appearance-none font-sub text-[14px]" />
                        </label>
                    </div>
                    <button type="submit" className="w-fit px-[1rem] h-[3rem] bg-[#6b6ea5] rounded-full self-center font-[700] text-white tracking-tight text-[14px] md:self-end">
                        Save
                    </button>
                </div>
                <div className="flex flex-col gap-1 w-[100%] self-start justify-start">
                    <p className="text-sm text-red-700 font-sub">
                        {userData.first_name_error}
                    </p>
                    <p className="text-sm text-red-700 font-sub">
                        {userData.email_error}
                    </p>
                </div>
            </form>
            <p className="text-center inline">
                Searching the galaxy of baby names, just a moment!
                <img src="/worm.png" alt="Mother of Invention" className="w-5 m-[1px] inline animate-bounce" />
                <img src="/berry.png" alt="Mother of Invention" className="w-4 m-[1px] inline animate-bounce" />
                <img src="/apple.png" alt="Mother of Invention" className="w-4 m-[1px] inline animate-bounce" />
            </p>
        </section>
    )
}

export default UserEmail