'use client'

import React, { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation';
import { usePanelContext } from '../contexts/PanelContext';
import PanelSidebar from './_partials/PanelSidebar';
import PanelHeader from './_partials/PanelHeader';
import BreadcrumbStack from '../components/breadcumbs/BreadcrumbStack';

export default function PanelLayout({
    children
}: {
    children: ReactNode
}) {
    const { BreadcumbValue, setBreadcumbValue } = usePanelContext();
    const pathName = usePathname();

    useEffect(() => {
        return () => setBreadcumbValue([]);
    }, [pathName]);

    return (
        <div className="wrapper bg-slate-100" id='wrapper-panel'>{/* max-w-screen-2xl */}
            <div className="wrapper-content">
                <div><PanelSidebar /></div>
                <div className="container-fluid">
                    <div className='px-panel'>
                        <PanelHeader />
                        <div className='pt-1 pb-4'>
                            <BreadcrumbStack navigations={BreadcumbValue} />
                        </div>
                    </div>
                    <main className="pb-[2rem]">{children}</main>
                </div>
            </div>
        </div>
    )
}
