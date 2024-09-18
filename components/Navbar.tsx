'use client';

import Image from 'next/image';
import { memo } from 'react';

import ActiveUsers from './users/ActiveUsers';
import { NavbarProps } from '@/types/type';

const Navbar = ({ activeElement }: NavbarProps) => {
  // const isActive = (value: string | Array<ActiveElement>) => (activeElement && value.some((val) => val?.value === activeElement?.value)) || (Array.isArray(value) && value.some((val) => val?.value === activeElement?.value));
  return (
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white">
      <Image src="/assets/logo_light.svg" alt="PixelFlow logo" width={100} height={30} />
      <ActiveUsers />
    </nav>
  );
};

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
