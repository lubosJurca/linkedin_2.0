import { useState } from 'react';

// MUI Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';


const LinkedInIconStyle = {
    color: "#0a66c2",
    fontSize: "40px"
  } ;
  
  const searchIconStyle = {
    color: "3c3d3e"
  }


  

const HeaderLeft = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <section className='flex items-center'>
        <LinkedInIcon style={LinkedInIconStyle} />
        <div className='flex items-center h-10 shrink cursor-pointer'>
          <SearchIcon style={searchIconStyle} className='absolute z-10' onClick={handleClick}/>
          <input type="text" placeholder='Search..' className={`bg-[#edf3f8] rounded ${isOpen ? "absolute" : "hidden"} sm:flex pl-7 py-1`}/>
        </div>
      </section>
  )
}

export default HeaderLeft