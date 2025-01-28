import { useContext } from "react";
import { RequestContext } from "../context/request_context";


const useRequestContext = () => {
    const context = useContext(RequestContext)

    if (!context) {
        throw new Error("Request context must be used within a RequestProvider")
    }

    return context
}


export default useRequestContext