import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faMountain} from '@fortawesome/free-solid-svg-icons';
import {faTree} from '@fortawesome/free-solid-svg-icons';
import {faPersonHiking} from '@fortawesome/free-solid-svg-icons';

library.add(faPersonHiking, faMountain, faTree);

export default function Panel({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: 'person-hiking' | 'mountain' | 'tree';
}) {
  return (
    <div className='flex flex-col '>
      <div className='flex flex-col h-full'>
        <div className='flex min-h-[8rem] justify-center'>
          <FontAwesomeIcon className='h-16' icon={icon} />
        </div>
        <div className='p-4 '>
          <h1 className='tracking-wide leading-9 font-semibold text-lg'>
            {title}
          </h1>
          <p className='leading-7'>{content}</p>
        </div>
      </div>
    </div>
  );
}
