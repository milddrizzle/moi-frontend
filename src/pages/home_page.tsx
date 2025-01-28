import { useState } from "react"
import UserForm from "../components/user_form"
import UserEmail from "../components/user_email"
import Waiting from "../components/waiting"
import GeneratedNames from "../components/generated_names"
import { Link } from "react-router-dom"



const HomePage = () => {
  const [step, setStep] = useState<number>(0) 
  
  const allComponents = [
    <UserForm setStep={setStep} />,
    <UserEmail step={step} setStep={setStep} />,
    <Waiting step={step} setStep={setStep} />,
    <GeneratedNames setStep={setStep} />
  ]


  return (
    <main className="bg-[#6b6ea5] w-[100%] flex p-4 md:p-12 gap-4 items-center font-main flex-col text-white min-h-[100vh] justify-center">
      <img src="/logo.png" className="w-24 -translate-y-2" alt="Mother of Invention" />
      {
        allComponents[step]
      }
      <p className="capitalize font-sub font-medium flex items-center gap-0">
        <img src="/link_icon.png" alt="MOI" className="w-14 h-14" /> <Link to={'https://motherofinvention.com/'} target="_blank"  className="-translate-x-2 underline">Mother of Invention - Innovative Baby</Link>
      </p>
    </main>
  )
}

export default HomePage
