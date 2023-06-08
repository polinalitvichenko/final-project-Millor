'use client';
import Image from 'next/image';
import styles from './index.module.scss';

const Logo = () => {
  return (
    <Image 
      alt='Millor logo'
      className='styles.logoImg'
      height='111'
      width='260'
      src='/images/logo.svg'
title='AirBnb Logo'
    />
  )}

export default Logo