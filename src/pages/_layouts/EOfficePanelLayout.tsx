import PanelLayout from '@/externals/layouts/PanelLayout'
import React, { ReactNode } from 'react'
import { ChartPieIcon, DocumentCheckIcon, HomeModernIcon, LockClosedIcon, UsersIcon } from '@heroicons/react/24/solid';
import { PanelContextProvider } from '@/externals/contexts/PanelContext';

export default function EOfficePanelLayout({ children, sidebarActive }: {
    children?: ReactNode;
    sidebarActive?: string;
}) {
    return (
        <PanelContextProvider>
            <PanelLayout
                sidebarItems={[
                    {
                        label: 'Dashboard',
                        ItemIcon: <ChartPieIcon className="w-5" />,
                        path: '/dashboard'
                    },
                    {
                        label: 'Vendor',
                        ItemIcon: <HomeModernIcon className="w-5" />,
                        isActive: ['vendor', 'vendor-blacklist'].includes(sidebarActive ?? ''),
                        sidebarChilds: [
                            {
                                label: 'Daftar Vendor',
                                path: '/vendor',
                                isActive: sidebarActive == 'vendor',
                            },
                            {
                                label: 'Vendor Blacklist',
                                path: '/vendor/blacklist',
                                isActive: sidebarActive == 'vendor-blacklist',
                            },
                        ]
                    },
                    {
                        label: 'Pengajuan',
                        ItemIcon: <DocumentCheckIcon className="w-5" />,
                        sidebarChilds: [
                            {
                                label: 'Vendor Baru (10)',
                                path: '/approval/vendor/new',
                                isActive: sidebarActive == 'approval-new',
                            },
                            {
                                label: 'Blacklist',
                                path: '/approval/vendor/blacklist',
                                isActive: sidebarActive == 'approval-blacklist',
                            },
                            {
                                label: 'Perubahan Data',
                                path: '/approval/vendor/update',
                                isActive: sidebarActive == 'approval-update',
                            },
                        ]
                    },
                    {
                        label: 'Logout',
                        ItemIcon: <LockClosedIcon className="w-6" />,
                        path: '/auth/logout',
                        isActive: sidebarActive == 'logout',
                    },
                ]}>
                {children}
            </PanelLayout>
        </PanelContextProvider>
    )
}
