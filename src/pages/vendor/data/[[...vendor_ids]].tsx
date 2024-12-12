import Form from '@/externals/components/Form';
import NavCard from '@/externals/components/NavCard';
import EOfficePanelLayout from '@/pages/_layouts/EOfficePanelLayout';
import { HomeModernIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react'

export default function FormDataVendorPage() {
    const router = useRouter();
    const { vendor_ids } = router.query;
    const [StateForm, setStateForm] = useState<typeStateForm>({});

    useEffect(() => {
        if (vendor_ids?.[0]) {
            setStateForm((prev) => ({
                ...prev,
                values: {
                    id: 1,
                    name: 'Budi Santoso',
                    company: 'SILOG',
                    email: 'budi.santoso@company.com',
                    role: 'SUPER ADMIN',
                    department: 'IT',
                    status: 'AKTIF'
                },
            }))
        }
    }, [vendor_ids])


    return (
        <section className='mt-4'>
            <div className="grid sm:grid-cols-2">
                <div className="card">
                    <NavCard
                        navigations={[
                            {
                                label: (
                                    <div className='flex'>
                                        <HomeModernIcon className='h-4 mr-2' />
                                        <span>Daftar Vendor</span>
                                    </div>
                                ),
                                link: '/',
                                isActive: true
                            }
                        ]}
                    />
                    <div className='card-body pt-4'>
                        <Form
                            stateHandler={[StateForm, setStateForm]}
                            fields={[
                                { name: 'name' },
                                { name: 'company', parentProps: { className: 'sm:col-span-6 col-span-12' } },
                                { name: 'department', parentProps: { className: 'sm:col-span-6 col-span-12' } },
                                { name: 'email' },
                                { name: 'role', parentProps: { className: 'col-span-12' } },
                                { name: 'status', parentProps: { className: 'col-span-12' } },
                            ]}
                            onSubmit={() => {
                                router.push('/vendor')
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

FormDataVendorPage.getLayout = function (page: ReactNode) {
    return <EOfficePanelLayout sidebarActive='vendor'>{page}</EOfficePanelLayout>;
};