'use client';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const ProfileCard = () => {
  return (
    <div className="">
      <div>
        <div className="">
          <a href="#">
            <CgProfile size={119} className="bg-gray-100 text-gray-300 rounded-full" />
          </a>
        </div>
        <button>Изменить</button>
      </div>
      <div></div>
    </div>
  );
};

export default ProfileCard;
