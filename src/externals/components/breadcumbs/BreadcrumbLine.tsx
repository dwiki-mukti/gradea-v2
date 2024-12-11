'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { pathToBreadcumbNavigations } from '@/externals/utils/frontend';
import { ChevronRightIcon } from '@heroicons/react/24/solid';



export default function BreadcrumbLine({ navigations }: { navigations?: typeBreadcumbProps }) {
    const router = usePathname();
    const controls = navigations?.length ? navigations : pathToBreadcumbNavigations(router);

    return (
        <section className="mb-0 bg-white border-y shadow">
            <div className='px-3'>
                <div className="flex text-xs capitalize py-2 font-semibold">
                    {controls?.map((control, indexControl) => {
                        return (
                            <div key={indexControl}>
                                {((indexControl + 1) < controls.length) ? (
                                    <div className='text-slate-500 flex items-center'>
                                        <Link href={String(control?.url)}>{control?.label}</Link>
                                        <ChevronRightIcon className="mx-1" />
                                    </div>
                                ) : (
                                    <div className='cursor-default text-slate-600'>{control?.label}</div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}