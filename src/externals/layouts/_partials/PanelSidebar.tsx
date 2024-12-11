'use client'

import { usePathname } from 'next/navigation'
import SidebarItemPanel from '../_components/SidebarItemPanel'
import { ChartPieIcon } from '@heroicons/react/24/solid'


function SidebarPanel() {
  const path = usePathname()
  const prefix = path.split('/')

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
        <div className='text-sm text-white/80'>
          <SidebarItemPanel
            label='dashboard'
            ItemIcon={<ChartPieIcon className="w-6" />}
            isActive={['', undefined].includes(prefix[2]) || (prefix[2] == 'pengguna' && prefix[4] == 'presensi-harian')}
            path='/panel'
          />
          {/* <div className="sidebar-item sidebar-item-has-child">
            <div className={`sidebar-link`}>
              <div className="flex items-center gap-4">
                <Cube className="text-xl" />
                <div className="capitalize">Sidebar Has Child</div>
              </div>
              <div className="ml-auto">
                <div className="sidebar-child-arrow">
                  <CaretLeft className="text-sm" />
                </div>
              </div>
            </div >
            <div className="sidebar-child">
              <Link href={`#`} className={`sidebar-link`}>
                <span className="text-xl">-</span>
                <div className="capitalize">child 1</div>
              </Link>
              <Link href={`#`} className={`sidebar-link`}>
                <span className="text-xl">-</span>
                <div className="capitalize">child 2</div>
              </Link>
            </div>
          </div> */}
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




export default SidebarPanel