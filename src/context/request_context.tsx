import { createContext, useState, ReactNode } from "react";

// Define types for the formData
export interface FormDataType {
  gender: string;
  name_origin: string;
  meaning: string;
  due_date: string;
  not_pregnant: boolean;
  name_type: string;
  names_avoid: string;
  version: string;
}

// Define types for the context state
export interface RequestContextType {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  streamedData: string
  setStreamedData: React.Dispatch<React.SetStateAction<string>>
  zodiacSign: string
  setZodiacSign: React.Dispatch<React.SetStateAction<string>>
  loading: boolean
  setLoading: (loading: boolean) => void
}

// Create the context with a default value of undefined
export const RequestContext = createContext<RequestContextType | undefined>(undefined);

// Create the provider component
const RequestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  // This state holds the form data
  const [formData, setFormData] = useState<FormDataType>({
    gender: '',
    name_origin: 'No preference',
    meaning: 'No preference',
    due_date: '',
    not_pregnant: false,
    name_type: '',
    names_avoid: '',
    version: ''
  });

  const [streamedData, setStreamedData] = useState('')

  const [zodiacSign, setZodiacSign] = useState("")


  // state to indicate loading state of request query
  const [loading, setLoading] = useState(false)

  const value = { formData, setFormData, streamedData, setStreamedData, loading, setLoading, zodiacSign, setZodiacSign };

  return (
    <RequestContext.Provider value={value}>
      {children}
    </RequestContext.Provider>
  );
};

export default RequestProvider;
