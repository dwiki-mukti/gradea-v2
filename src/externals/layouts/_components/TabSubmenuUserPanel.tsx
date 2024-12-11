import React, { ReactNode } from 'react'
import TabSubmenuPanel from './TabSubmenuPanel';


interface typeTabSubmenuPanelProps {
    idActive?: string;
    rightElement?: ReactNode;
    userId: string;
}
export default function TabSubmenuUserPanel({ userId, ...props }: typeTabSubmenuPanelProps) {
    return (<TabSubmenuPanel {...props}
        menu={[
            {
                id: 'umum',
                path: `/panel/siswa/data/${userId}`,
                label: 'umum'
            },
            {
                id: 'presensi-harian',
                path: `/panel/pengguna/${userId}/presensi-harian`,
                label: 'absensi harian'
            },
            {
                id: 'pelanggaran',
                path: `/panel/pengguna/${userId}/pelanggaran`,
                label: 'pelanggaran'
            },
        ]}
    />)
}
