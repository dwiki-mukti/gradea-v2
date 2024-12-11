import Link from 'next/link'
import React, { ReactNode } from 'react'

interface typeTabSubmenuPanelProps {
    menu: Array<{
        label: string;
        path: string;
        id: string;
    }>;
    idActive?: string;
    rightElement?: ReactNode
}
export default function TabSubmenuPanel({ menu, idActive, rightElement }: typeTabSubmenuPanelProps) {
    return (
        <div className="flex items-center border-b">
            <div className='flex items-center'>
                {menu.map((res, index) => (
                    <Link href={res.path} key={index}>
                        <div className={(idActive == res.id) ? 'text-primary border-b-2 border-primary font-medium' : ''}>
                            <div className={`pt-6 pb-3 px-6 min-w-[5rem] capitalize`}>
                                {res.label}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='ml-auto pr-6'>{rightElement}</div>
        </div>
    )
}
