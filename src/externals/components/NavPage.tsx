import { cn } from '@/externals/utils/frontend';
import Link from 'next/link';
import React from 'react'

export default function NavPage({
    navigations
}: {
    navigations: Array<{
        label: string;
        link: string;
        isActive?: boolean
    }>
}) {
    return (
        <div className='pb-1 mt-4 px-panel'>
            <div className='flex gap-4 text-sm capitalize'>
                {navigations.map((navigation, indexNavigation) => (
                    <Link
                        key={indexNavigation}
                        href={navigation.link}
                        className={cn('pb-1 border-b-2 border-transparent', (navigation.isActive ? 'border-black font-semibold' : 'hover:text-primary'))}
                    >
                        {navigation.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}
