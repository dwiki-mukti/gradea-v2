'use client'

import { pathToBreadcumbNavigations } from '@/externals/utils/frontend';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'



export default function BreadcrumbStack({ navigations }: { navigations?: typeBreadcumbProps }) {
    const router = usePathname();
    navigations = navigations?.length ? navigations : pathToBreadcumbNavigations(router);

    return (
        <div className='capitalize'>
            <div className="flex items-center text-xs">
                {navigations?.map((navigation, indexNavigation) => {
                    return (
                        <div key={indexNavigation}>
                            {((indexNavigation + 1) < navigations.length) ? (
                                <>
                                    <Link href={navigation.url}>{navigation?.label}</Link>
                                    <span className='mx-1'>/</span>
                                </>
                            ) : (
                                <div className="">{navigation?.label}</div>
                            )}
                        </div>
                    )
                })}
            </div >
            <div className="text-xl font-semibold mt-1">{(navigations.slice(-1).pop())?.label}</div>
        </div>
    )
}