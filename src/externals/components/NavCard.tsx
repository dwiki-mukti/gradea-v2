import { cn } from '@/externals/utils/frontend';
import Link from 'next/link';
import React, { ReactNode } from 'react'

export default function NavCard({
    navigations
}: {
    navigations: Array<{
        label: ReactNode;
        link: string;
        isActive?: boolean
    }>
}) {
    return (
        <div className='flex gap-4 text-sm capitalize'>
            {navigations.map((navigation, indexNavigation) => (
                <Link
                    key={indexNavigation}
                    href={navigation.isActive ? '#' : navigation.link}
                    className={cn('pb-3 pt-4 px-card-body border-b-2 border-transparent', (navigation.isActive ? 'border-primary text-primary font-semibold cursor-default' : 'hover:text-primary'))}
                >
                    {navigation.label}
                </Link>
            ))}
        </div>
    )
}
