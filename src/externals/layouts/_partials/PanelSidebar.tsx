'use client'

import SidebarItemPanel, { onClickSidenavHasChild } from '../_components/SidebarItemPanel'
import { ChevronLeftIcon, CubeIcon } from '@heroicons/react/24/solid'
import { ReactNode } from 'react';
import Link from 'next/link';

interface sidebarItem {
  label: string;
  ItemIcon: ReactNode;
  isActive?: boolean;
  path?: string;
  sidebarChilds?: { label?: string; path?: string; isActive?: boolean; }[];
}
export default function SidebarPanel({
  sidebarItems
}: {
  sidebarItems: sidebarItem[]
}) {
  return (
    <>
      <aside className="sidebar">
        <div className="text-center pb-8 pt-10">
          <img
            src={'/public/images/main-logo.png'}
            alt='logo-app'
            // width={160}
            // height={0}
            style={{ height: 'auto', width: '7rem' }}
            className='mx-auto'
          />
        </div>
        <div className='text-sm'>
          {sidebarItems.map((sidebarItem, indexSidebarItem) => (
            <SidebarItemPanel key={indexSidebarItem}{...sidebarItem} />
          ))}
        </div>
      </aside>
      <div
        className="sidebar-overlay"
        onClick={() => {
          /**
           * Hide sidebar on click overlay.
           */
          const sidebarEl = document.body.classList;
          if (!sidebarEl.contains('sidebar-collapse')) {
            sidebarEl.add('sidebar-collapse');
          }
        }}
      />
    </>
  )
}