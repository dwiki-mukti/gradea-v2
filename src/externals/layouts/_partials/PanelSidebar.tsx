'use client'

import { ReactNode } from 'react';
import SidebarItemPanel from '../_components/SidebarItemPanel';

export interface typeSidebarItem {
  label: string;
  ItemIcon: ReactNode;
  isActive?: boolean;
  path?: string;
  sidebarChilds?: { label?: string; path?: string; isActive?: boolean; }[];
}
export default function SidebarPanel({
  sidebarItems
}: {
  sidebarItems: typeSidebarItem[]
}) {
  return (
    <>
      <aside className="sidebar">
        <div className="text-center pb-6 pt-10">
          <img
            src={'/public/images/main-logo.png'}
            alt='logo-app'
            className='mx-auto brand-logo'
          />
          <img
            src={'/public/images/main-logo-mini.png'}
            alt='logo-app'
            className='mx-auto brand-logo-mini'
          />
        </div>
        <div>
          {sidebarItems.map((sidebarItem, indexSidebarItem) => (
            <SidebarItemPanel key={indexSidebarItem} {...sidebarItem} />
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