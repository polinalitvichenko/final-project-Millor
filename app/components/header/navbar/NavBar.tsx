'use client';
import React from 'react';

const NavBar: React.FC = (): JSX.Element => {
  return (
    <div className="relative">
      <ul className="flex items-center gap-[100px] text-2xl">
        <li>
          <a href="#">Каталог товаров</a>
        </li>
        <li>
          <a href="#">Блог</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
