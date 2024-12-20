import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React, { Fragment, ReactNode } from 'react'

export default function SidebarItemPanel({
    label,
    ItemIcon,
    isActive,
    path,
    className,
    sidebarChilds,
}: {
    isActive?: boolean,
    label: string,
    ItemIcon?: ReactNode,
    path?: string,
    className?: string,
    sidebarChilds?: { label?: string; path?: string; isActive?: boolean; }[];
}) {
    return (
        <div
            className={`${sidebarChilds?.length ? `sidebar-item-has-child ${isActive ? 'active sidebar-item-has-child-open' : ''}` : `sidebar-item ${isActive ? 'active' : ''}`} ${className ?? ''}`}
        >
            <Link href={path ?? ''} className={`sidebar-link`} onClick={(e) => {
                if (sidebarChilds?.length) onClickSidenavHasChild(e)
            }}>
                <div className="flex items-center">
                    <div className='w-[2.5rem] flex items-center justify-center'>
                        {ItemIcon ? ItemIcon : (<span>-</span>)}
                    </div>
                    <div className="sidebar-label capitalize">{label}</div>
                </div>

                {sidebarChilds?.length && (
                    <div className="ml-auto">
                        <div className="sidebar-child-arrow w-[2.5rem]">
                            <ChevronLeftIcon className="w-3 mx-auto" />
                        </div>
                    </div>
                )}
            </Link>
            {sidebarChilds?.length && (
                <div className="sidebar-child">
                    {sidebarChilds.map((sidebarChild, indexSidebarChilds) => (
                        <Fragment key={indexSidebarChilds}>
                            <Link href={sidebarChild.path ?? '#'} className={`sidebar-link ${sidebarChild.isActive ? 'active' : ''}`}>
                                <div className="icon">{sidebarChild.label?.[0] ?? '?'}</div>
                                <div className="sidebar-label capitalize">{sidebarChild.label}</div>
                            </Link>
                        </Fragment>
                    ))}
                </div>
            )}
        </div>
    )
}








export function onClickSidenavHasChild(e: any) {
    e.preventDefault()
    const classList = (e.target as Element).closest('.sidebar-item-has-child')?.classList
    if (classList?.contains('sidebar-item-has-child-open')) {
        classList?.remove('sidebar-item-has-child-open')
    } else {
        classList?.add('sidebar-item-has-child-open')
    }
}