'use client';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const ProfileCard = () => {
  return (
    <div className="flex gap-[20px] mt-[50px] pt-[35px] pl-[140px] pb-[31px] rounded-[20px] border border-solid border-[#E4E4E4] shadow-[0px_0px_50px_rgba(163,163,163,0.25)]">
      <div className="flex flex-col items-center gap-[20px]">
        <div className="">
          <a href="#">
            <CgProfile size={119} className="bg-gray-100 text-gray-300 rounded-full" />
          </a>
        </div>
        <div className="">
          <button className="bg-[#FFF7E1] pl-[25px] pt-[8px] pr-[24px] pb-[8px] rounded-[5px] border-[1px] border-solid border-[#F9B300] font-semibold text-[16px] leading-[19px] text-[#F9B300]">
            Изменить
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="font-black	text-[#222222] text-[40px] leading-[50px]">
          Username, здравствуйте!
        </h2>
        <div className="font-medium text-[#222222] text-[20px] leading-[24px]">e-mail</div>
        <div className="font-medium text-[#222222] text-[20px] leading-[24px]">phone</div>
        <div className="font-medium text-[#222222] text-[20px] leading-[24px]">password</div>
      </div>
    </div>
  );
};

export default ProfileCard;
