'use client';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import React from 'react';

const UserMenu: React.FC = (): JSX.Element => {
  
  return (
    <div className="relative">
     <ul className="flex items-center gap-[53px]">
<li><a href="#"><FiSearch size={32}/></a></li>
<li><a href="#"><FiShoppingCart size={32}/></a></li>
<li><a href="#"><FiUser size={32}/></a></li></ul>
  </div>
  )
}

export default UserMenu