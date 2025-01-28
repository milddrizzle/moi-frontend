import { Link } from 'react-router-dom'

const ErrorPage = () => {
   return (
      <div className='flex items-center justify-center bg-white w-full h-screen lg:h-auto md:h-auto'>
         <Link to={'/'}>
            <img 
               src='/' 
               srcSet='/mobile_404-error.webp 300w,/tablet_404-error.webp 600w, /desktop_404-error.webp 1200w' 
               sizes='(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px' 
               alt="ERROR PAGE" 
               rel='preload' />
         </Link>
      </div>
   )
}

export default ErrorPage