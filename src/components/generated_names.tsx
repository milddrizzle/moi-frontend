import AnimatedList from "./animate_list";
import { GoPlusCircle } from "react-icons/go";
import { FaRepeat } from "react-icons/fa6";
import AnimatedText from "./animated_text";
import { useEffect, useState } from "react";
import useRequestContext from "../hooks/use_request_context";
import formatDate from "../utils/format_date";


interface GeneratedNamesProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const GeneratedNames = ({ setStep }: GeneratedNamesProps) => {
    const { formData, setFormData, responseData, loading, setLoading } = useRequestContext()

    // hide state while printing
    const [showBtns, setShowBtns] = useState<boolean>(true)

    // list of all the arrays of names generated
    const [displayList, setDisplayList] = useState<Array<string[]>>([])

    // Update displayList when responseData changes
    useEffect(() => {
        if (!responseData || !responseData.names) return; // Ensure responseData exists
        setShowBtns(false); // Hide buttons while processing

        // Safely update displayList with the first 10 items in a new array
        setDisplayList((prevList) => [
        ...prevList,
            responseData.names.slice(0, 10), // Add a new sub-array with 10 names
            ]);
        }, [responseData]);


        // Show more names when the "Show More" button is clicked
        const showMore = () => {
        setShowBtns(false); // Hide buttons while fetching

        // Check if we have fetched all available names
        if (displayList.length * 10 >= responseData.names.length) {
        setLoading(true); //  Fetch new data
        return;
        }

        const nextBatch = responseData.names.slice(displayList.length * 10, displayList.length * 10 + 10); // Get the next batch of 10 names

        // Update displayList by pushing the new batch
        setDisplayList((prevList) => [
        ...prevList,
        nextBatch, // Push the next batch as a new sub-array
        ]);
  };


  // Handle the button visibility after animation delay
  useEffect(() => {
    // if we're still fetching data, don't show buttons
    if (loading) {
        setShowBtns(false)
        return
    }
    // Restore button visibility after animation delay
    const timeout = setTimeout(() => {
      setShowBtns(true);
    }, 5000);

    return () => clearTimeout(timeout); // Cleanup function to prevent memory leaks
  }, [showBtns]);



      
    const backToForm = () => {
        setFormData({
            gender: '',
            name_origin: 'No preference',
            meaning: 'No preference',
            due_date: '',
            not_pregnant: false,
            name_type: '',
            names_avoid: '',
            version: ''
        })
        setStep(0)
    }
    const [currentIndex, setCurrentIndex] = useState(0);

    let dueDate, item = ''

    // Get the formatted dates
    if (formData.due_date) {
        dueDate = formatDate(formData.due_date);

        // Create the string with the format you want
        item = `${responseData.zodiacSign} (${dueDate})`;
    }

    
    return (
        <section className="flex items-center p-4 md:p-12 shadow-lg font-main flex-col gap-6 rounded-lg bg-[#f8f7ee] text-black w-full max-w-2xl min-h-[400px]">
            {
                (displayList.length > 0 && item !== '') ? 
                <div className="flex flex-col w-[100%] gap-2">
                    <h1 className="text-[18px] text-black self-start font-bold">
                        🌟 Here's Your Baby's Astrological Sign:
                    </h1>
                    <AnimatedText
                    text={item}
                    onComplete={() => {
                        if (currentIndex < item.length - 1) {
                        setCurrentIndex((prev) => prev + 1);
                        }
                    }}
                    />
                </div> : <></>
            }
            {
                displayList.length > 0 ? (
                    <>
                    <h1 className="text-[18px] text-black self-start font-bold">
                        Behold! Enchanting baby names we've found just for you:
                    </h1>
                    {
                        displayList.map((list, index) => (
                            list.length > 0 ? (
                                <AnimatedList items={list} key={index} />
                            ) : null
                        ))
                    }
                    {
                        showBtns ? <div className="flex gap-3 sm:gap-4 w-[100%] flex-col sm:flex-row justify-center items-center">
                        <button 
                        className="w-fit px-[0.75rem] text-[0.875rem] h-[2rem] min-h-[2rem] bg-[#6b6ea5] rounded-full justify-center text-white flex gap-4 items-center font-[600]" 
                        onClick={showMore}
                        >
                        <GoPlusCircle className="w-4 h-4 text-white" />
                        Show me more
                        </button>
                        <button 
                        onClick={backToForm} 
                        className="w-fit px-[0.75rem] text-[0.875rem] h-[2rem] min-h-[2rem] bg-[#6b6ea5] rounded-full justify-center text-white flex gap-4 font-[600] items-center"
                        >
                        <FaRepeat className="w-4 h-4 text-white" />
                        Start Over
                        </button>
                    </div> : <p className="animate-bounce">
                        Loading more names now!
                    </p>
                    }
                    </>
                ) : (
                    <p>No names available</p>
                )
                }
        </section>
    )
}

export default GeneratedNames