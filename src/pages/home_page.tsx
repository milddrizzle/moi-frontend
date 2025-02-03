import { useEffect, useState } from "react"
import UserForm from "../components/user_form"
import UserEmail from "../components/user_email"
import Waiting from "../components/waiting"
import GeneratedNames from "../components/generated_names"
import { Link } from "react-router-dom"
import useRequestContext from "../hooks/use_request_context"

const HomePage = () => {
  const [step, setStep] = useState<number>(0) 
  const { loading, setLoading, setZodiacSign, setStreamedData, streamedData, formData, setIsComplete } = useRequestContext()

  const allComponents = [
    <UserForm setStep={setStep} />,
    <UserEmail step={step} setStep={setStep} />,
    <Waiting step={step} setStep={setStep} />,
    <GeneratedNames setStep={setStep} />
  ]

      // Method to send request only when the loading state becomes true
      useEffect(() => {
        // don't send request if we're already sending one
        if (!loading && streamedData.length < 1) return

        const queryParams = new URLSearchParams(formData as unknown as Record<string, string>).toString();
        const eventSource = new EventSource(`https://moi-backend.onrender.com/generate?${queryParams}`);

        setIsComplete("start")
        eventSource.onmessage = (event) => {
          setLoading(false)
          // Check for special messages 
          if (event.data === '[DONE]') {
            setIsComplete("finish")
            eventSource.close();
            return;
          }
    
          // Check for zodiac sign
          if (event.data.startsWith('ZODIAC:')) {
            const zodiac = event.data.replace('ZODIAC:', '').trim();
            setZodiacSign(zodiac);
          } else if (event.data.startsWith('ERROR:')) {
            eventSource.close();
          } else {
            // Append each chunk to the streamed data
            if (event.data !== "undefined") setStreamedData((prevData) => prevData + event.data);
          }
        };

    
        eventSource.onerror = (err) => {
          eventSource.close();
          setLoading(false)
          setIsComplete("finish")
        };
    
        // Cleanup on component unmount
        return () => {
          eventSource.close();
          setLoading(false)
          setIsComplete("finish")
        };
      }, [loading]);

  return (
    <main className="bg-[#6b6ea5] w-[100%] flex p-4 md:p-12 gap-4 items-center font-main flex-col text-white min-h-[100vh] justify-center">
      <img src="/logo.png" className="w-24 -translate-y-2" alt="Mother of Invention" />
      {
        allComponents[step]
      }
      <p className="capitalize font-sub font-medium flex items-center gap-0">
        <img src="/Favicon_moi.png" alt="moi" className="w-5 h-5" />&nbsp;<Link to={'https://motherofinvention.com/'} target="_blank"  className="-translate-x-2 underline">Mother of Invention - Innovative Baby Products</Link>
      </p>
    </main>
  )
}

export default HomePage
