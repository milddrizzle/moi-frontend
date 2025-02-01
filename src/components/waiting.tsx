import { useEffect } from "react";
import useRequestContext from "../hooks/use_request_context";

interface WaitingProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    step: number;
}

const Waiting = ({ step, setStep }: WaitingProps) => {
    const { loading } = useRequestContext()

    // move to next screen when loading is set to false
    useEffect(() => {
        !loading && setStep(3)
    }, [loading])



    return (
        <section className="flex items-center p-4 md:p-12 shadow-lg flex-col gap-10 rounded-lg bg-[#f8f7ee] text-black  w-full max-w-2xl min-h-[400px] justify-center self-center">
            <p className="text-center inline">
                Searching the galaxy of baby names, just a moment!
                <img src="/worm.png" alt="Mother of Invention" className="w-5 inline animate-bounce" />
                <img src="/berry.png" alt="Mother of Invention" className="w-4 inline animate-bounce" />
                <img src="/apple.png" alt="Mother of Invention" className="w-4 inline animate-bounce" />
            </p>
        </section>
    )
}

export default Waiting