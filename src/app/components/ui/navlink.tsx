'use client';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import {usePathname} from 'next/navigation';

export default function Navlink({
  path,
  label,
  textSize = 'md',
}: {
  path: string;
  label: string;
  textSize?: 'md' | 'lg';
}) {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={classNames(
        `font-bold uppercase text-stone-800`,
        pathName == path ? 'active-link' : '',
        textSize === 'md' && 'text-md',
        textSize === 'lg' && 'text-lg'
      )}
    >
      {label}
    </Link>
  );
}
