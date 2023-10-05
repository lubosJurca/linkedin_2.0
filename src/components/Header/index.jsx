
// components
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';


const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between border-b p-1 bg-white'>

      <HeaderLeft />

    <HeaderRight />
      
    </header>
  )
}

export default Header