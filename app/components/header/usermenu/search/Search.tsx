'use client';

import React from 'react'
import {FiSearch} from 'react-icons/fi';

const Search: React.FC = ():JSX.Element => {

const [isOpen, setIsOpen] = React.useState(false)


const toggleOpen = React.useCallback(() => {
    setIsOpen(value => !value)
  }, [])

  return (
<div>

{isOpen ? (
<div className="flex flex-col items-center absolute right-[150px] top-[-16px] bg-white w-[1100px] px-[30px] py-[16px] shadow-[0px_5px_20px_rgba(157,157,157,0.25)]  rounded-[30px]">
<div className="flex justify-start w-[100%]">
        <button className="mr-[20px]">
          <FiSearch size={32} onClick={toggleOpen} className="text-neutral-300"/>
        </button>
          <input type="text" placeholder="Поиск" className="w-[90%] border-none focus:border-transparent focus:outline-none " />
</div>
<div className=""></div>
</div>) : (
         <FiSearch size={32} onClick={toggleOpen} className="relative"/>
        )}

</div>
)
}

export default Search