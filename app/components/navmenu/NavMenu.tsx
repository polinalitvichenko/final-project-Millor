'use client';
import Container from '../container/Container';
import React from 'react';

const NavMenu = () => {
  return (
    <Container>
      <div>
        <ul className="flex items-center gap-[5px]">
          <li className="h-21 font-semibold text-[18px]">Главная</li>
          <li>
            <div className="w-[4px] h-[4px] bg-gray-800 rounded-full"></div>
          </li>
          <li className="h-21 font-semibold text-[18px]">Личный кабинет</li>
        </ul>
      </div>
    </Container>
  );
};

export default NavMenu;
