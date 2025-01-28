import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./pages/error_page"
import HomePage from "./pages/home_page";

const App = () => {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes> 
      </BrowserRouter>
  )
}

export default App;


