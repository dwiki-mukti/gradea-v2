'use client'

import React, { useContext, useEffect, useState } from 'react'
import Dropdown from '@/externals/components/popups/Dropdown';
import { useGlobalContext } from '@/externals/contexts/GlobalContext';
import Confirm from '@/externals/components/popups/Confirm';
import { onLogout } from '@/externals/utils/frontend';
import { Bars3Icon, BellIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/solid';


export default function PanelHeader() {

  useEffect(() => {
    if (window.screen.width <= 1024) onClickSlider(true);
  }, []);

  return (
    <>
      <header className='bg-white'>
        <div className="header px-panel">
          <div className="flex items-center">
            <div
              className="header-icon-square -ml-2"
              onClick={() => { onClickSlider() }}>
              <Bars3Icon className="w-6 m-auto" />
            </div>
          </div>
          <div className="ml-auto flex items-center">
            {/* <Notification /> */}
            {/* <Link href={'/'} className="header-icon-square">
              <ComputerTower weight='regular' className='text-[26px] rotate-180' />
            </Link> */}
            <Profile />
          </div>
        </div>
      </header>
      {/* <BreadcrumbLine navigations={BreadcumbValue} /> */}
    </>
  )
}



function Notification() {
  const [ShowProfile, setShowProfile] = useState(false)
  return (
    <div className='relative'>
      <div className="header-icon-square" onClick={() => setShowProfile(true)}>
        <BellIcon className="w-[26px] mt-[1px]" />
      </div>
      <div className='text-black'>
        <Dropdown show={ShowProfile} toHide={setShowProfile} className='w-[20rem] right-0 text-center overflow-hidden'>
          panda
        </Dropdown>
      </div>
    </div>
  )
}




function Profile() {
  const { UserAuthed } = useGlobalContext();
  const [ShowProfile, setShowProfile] = useState(false)
  const [AlertLogout, setAlertLogout] = useState(false)
  return (
    <div className='relative'>
      <div className='flex items-center gap-2 [&:hover_*]:text-primary cursor-pointer' onClick={() => setShowProfile(true)}>
        <div className='text-right'>
          <div className='font-semibold leading-6 text-gray-700'>{UserAuthed?.name ?? 'Dwiki I. P. M'}</div>
          <div className='text-[10px] leading-[9px]'>{UserAuthed?.uuid ?? 'dwiki@gmail.com'}</div>
        </div>
        <div className="header-icon-square">
          <UserCircleIcon className="w-[2.5rem]" />
        </div>
      </div>
      <div className='text-black'>
        <Dropdown show={ShowProfile} toHide={setShowProfile} className='w-[20rem] right-0 text-center overflow-hidden'>
          <div className="py-4">
            <UserCircleIcon className='w-[4.5rem] mx-auto' />
            <div className="text-lg truncate mt-1">{UserAuthed?.name ?? 'Dwiki I. P. M'}</div>
            <div className="text-xs text-gray-600 mt-1">{UserAuthed?.profile_type ?? 'Admin'}</div>
          </div>
          <div
            className="py-3 border-t cursor-pointer text-red-600 hover:bg-red-600 hover:text-white"
            onClick={() => { setAlertLogout(true) }}
          >
            <div className="flex items-center justify-center gap-1">
              <PowerIcon className='w-4' />
              <span>Logout</span>
            </div>
          </div>
        </Dropdown>
        <Confirm
          question="Anda benar-benar ingin logout?"
          show={AlertLogout}
          toHide={() => { setAlertLogout(false) }}
          onApproved={() => {
            onLogout()
            setAlertLogout(false)
          }}
        />
      </div>
    </div>
  )
}






/**
 * Handle toggle sidebar on click icon slider.
 */
function onClickSlider(isCollapse = false) {
  const sidebarEl = document.body.classList;
  if (isCollapse) {
    if (!sidebarEl.contains('sidebar-collapse')) {
      sidebarEl.add('sidebar-collapse');
    }
  } else {
    if (!sidebarEl.contains('sidebar-collapse')) {
      sidebarEl.add('sidebar-collapse');
    } else {
      sidebarEl.remove('sidebar-collapse');
    }
  }

}