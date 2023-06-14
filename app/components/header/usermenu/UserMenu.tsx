'use client';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import React from 'react';
import Search from './search/Search';

const UserMenu: React.FC = (): JSX.Element => {
  
  return (
    <div className="relative">
     <ul className="flex items-center gap-[53px]">
<li><button><Search/></button></li>
<li><button><FiShoppingCart size={32}/></button></li>
<li><button><FiUser size={32}/></button></li></ul>
  </div>
  )
}

export default UserMenu