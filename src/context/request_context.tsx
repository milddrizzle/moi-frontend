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

export interface ResponseDataType {
  names: string[],
  zodiacSign: ''
}

// Define types for the context state
export interface RequestContextType {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  responseData: ResponseDataType
  setResponseData: React.Dispatch<React.SetStateAction<ResponseDataType>>
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

  // state to access response data from db
  const [responseData, setResponseData] = useState<ResponseDataType>({
    names: [''],
    zodiacSign: ''
  })

  // state to indicate loading state of request query
  const [loading, setLoading] = useState(false)

  const value = { formData, setFormData, responseData, setResponseData, loading, setLoading };

  return (
    <RequestContext.Provider value={value}>
      {children}
    </RequestContext.Provider>
  );
};

export default RequestProvider;
