import NavCard from '@/externals/components/NavCard';
import Table from '@/externals/components/Table';
import { HomeModernIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import React, { ReactNode } from 'react'
import EOfficePanelLayout from '../_layouts/EOfficePanelLayout';
import Button from '@/externals/components/Button';

export default function HomePage() {
    return (
        <section className='mt-4'>
            <div className="card">
                <div className='border-b flex pr-2'>
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
                    <div className='ml-auto flex items-center'>
                        <Button href='/vendor/data' className='btn-sm font-medium'>
                            <PlusCircleIcon className='h-4'/>
                            <span>Tambah Data</span>
                        </Button>
                    </div>
                </div>
                <div>
                    <Table
                        noPaginate={false}
                        noSearch={false}
                        path='/student-appreciation'
                        prototypeTable={[
                            {
                                title: 'nama',
                                keyData: 'name'
                            },
                            {
                                title: 'perusahaan',
                                keyData: 'company'
                            },
                            {
                                title: 'email',
                                keyData: 'email'
                            },
                            {
                                title: 'role',
                                keyData: 'role'
                            },
                            {
                                title: 'departemen',
                                keyData: 'department'
                            },
                            {
                                title: 'status',
                                keyData: 'status'
                            },
                        ]}
                        data={{
                            dataRows: [
                                { id: 1, name: 'Budi Santoso', company: 'SILOG', email: 'budi.santoso@company.com', role: 'SUPER ADMIN', department: 'IT', status: 'AKTIF' },
                                { id: 2, name: 'Ani Wijaya', company: 'SID', email: 'ani.wijaya@company.com', role: 'ADMIN OPERASIONAL', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 3, name: 'Chandra Kurniawan', company: 'VUDS', email: 'chandra.k@company.com', role: 'ADMIN VENDOR', department: 'Legal', status: 'AKTIF' },
                                { id: 4, name: 'Dewi Purnama', company: 'VUBA', email: 'dewi.purnama@company.com', role: 'PEMINTA BARANG', department: 'IT', status: 'NON AKTIF' },
                                { id: 5, name: 'Eko Prasetyo', company: 'SILOG', email: 'eko.prasetyo@company.com', role: 'APPROVER', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 6, name: 'Fani Ayu', company: 'SID', email: 'fani.ayu@company.com', role: 'SURVEYOR', department: 'Legal', status: 'AKTIF' },
                                { id: 7, name: 'Gita Maharani', company: 'VUDS', email: 'gita.maharani@company.com', role: 'SUPER ADMIN', department: 'IT', status: 'AKTIF' },
                                { id: 8, name: 'Hendra Gunawan', company: 'VUBA', email: 'hendra.gunawan@company.com', role: 'ADMIN OPERASIONAL', department: 'Pengadaan', status: 'NON AKTIF' },
                                { id: 9, name: 'Indra Permana', company: 'SILOG', email: 'indra.permana@company.com', role: 'ADMIN VENDOR', department: 'Legal', status: 'AKTIF' },
                                { id: 10, name: 'Julia Sari', company: 'SID', email: 'julia.sari@company.com', role: 'PEMINTA BARANG', department: 'IT', status: 'AKTIF' },
                                { id: 11, name: 'Kevin Hartanto', company: 'VUDS', email: 'kevin.hartanto@company.com', role: 'APPROVER', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 12, name: 'Lina Marlina', company: 'VUBA', email: 'lina.marlina@company.com', role: 'SURVEYOR', department: 'Legal', status: 'NON AKTIF' },
                                { id: 13, name: 'Mulyadi Pranoto', company: 'SILOG', email: 'mulyadi.pranoto@company.com', role: 'SUPER ADMIN', department: 'IT', status: 'AKTIF' },
                                { id: 14, name: 'Nina Kartika', company: 'SID', email: 'nina.kartika@company.com', role: 'ADMIN OPERASIONAL', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 15, name: 'Oscar Tanujaya', company: 'VUDS', email: 'oscar.tanujaya@company.com', role: 'ADMIN VENDOR', department: 'Legal', status: 'AKTIF' },
                                { id: 16, name: 'Putri Anggraeni', company: 'VUBA', email: 'putri.anggraeni@company.com', role: 'PEMINTA BARANG', department: 'IT', status: 'NON AKTIF' },
                                { id: 17, name: 'Ricky Setiawan', company: 'SILOG', email: 'ricky.setiawan@company.com', role: 'APPROVER', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 18, name: 'Siti Nurhaliza', company: 'SID', email: 'siti.nurhaliza@company.com', role: 'SURVEYOR', department: 'Legal', status: 'AKTIF' },
                                { id: 19, name: 'Taufik Hidayat', company: 'VUDS', email: 'taufik.hidayat@company.com', role: 'SUPER ADMIN', department: 'IT', status: 'AKTIF' },
                                { id: 20, name: 'Umi Kulsum', company: 'VUBA', email: 'umi.kulsum@company.com', role: 'ADMIN OPERASIONAL', department: 'Pengadaan', status: 'NON AKTIF' },
                                { id: 21, name: 'Vino Albertino', company: 'SILOG', email: 'vino.albertino@company.com', role: 'ADMIN VENDOR', department: 'Legal', status: 'AKTIF' },
                                { id: 22, name: 'Winda Oktavia', company: 'SID', email: 'winda.oktavia@company.com', role: 'PEMINTA BARANG', department: 'IT', status: 'AKTIF' },
                                { id: 23, name: 'Yoga Pranata', company: 'VUDS', email: 'yoga.pranata@company.com', role: 'APPROVER', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 24, name: 'Zara Amelia', company: 'VUBA', email: 'zara.amelia@company.com', role: 'SURVEYOR', department: 'Legal', status: 'NON AKTIF' },
                                { id: 25, name: 'Ahmad Fauzi', company: 'SILOG', email: 'ahmad.fauzi@company.com', role: 'SUPER ADMIN', department: 'IT', status: 'AKTIF' },
                                { id: 26, name: 'Bella Rahmawati', company: 'SID', email: 'bella.rahmawati@company.com', role: 'ADMIN OPERASIONAL', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 27, name: 'Citra Dewi', company: 'VUDS', email: 'citra.dewi@company.com', role: 'ADMIN VENDOR', department: 'Legal', status: 'AKTIF' },
                                { id: 28, name: 'Dimas Andika', company: 'VUBA', email: 'dimas.andika@company.com', role: 'PEMINTA BARANG', department: 'IT', status: 'NON AKTIF' },
                                { id: 29, name: 'Eka Pratama', company: 'SILOG', email: 'eka.pratama@company.com', role: 'APPROVER', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 30, name: 'Fitri Handayani', company: 'SID', email: 'fitri.handayani@company.com', role: 'SURVEYOR', department: 'Legal', status: 'AKTIF' },
                                { id: 31, name: 'Gandi Permana', company: 'VUDS', email: 'gandi.permana@company.com', role: 'SUPER ADMIN', department: 'IT', status: 'AKTIF' },
                                { id: 32, name: 'Hani Oktavia', company: 'VUBA', email: 'hani.oktavia@company.com', role: 'ADMIN OPERASIONAL', department: 'Pengadaan', status: 'NON AKTIF' },
                                { id: 33, name: 'Irfan Maulana', company: 'SILOG', email: 'irfan.maulana@company.com', role: 'ADMIN VENDOR', department: 'Legal', status: 'AKTIF' },
                                { id: 34, name: 'Jihan Nurhasanah', company: 'SID', email: 'jihan.nurhasanah@company.com', role: 'PEMINTA BARANG', department: 'IT', status: 'AKTIF' },
                                { id: 35, name: 'Karina Sari', company: 'VUDS', email: 'karina.sari@company.com', role: 'APPROVER', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 36, name: 'Lukman Hakim', company: 'VUBA', email: 'lukman.hakim@company.com', role: 'SURVEYOR', department: 'Legal', status: 'NON AKTIF' },
                                { id: 37, name: 'Mega Puspita', company: 'SILOG', email: 'mega.puspita@company.com', role: 'SUPER ADMIN', department: 'IT', status: 'AKTIF' },
                                { id: 38, name: 'Nanda Kurniawan', company: 'SID', email: 'nanda.kurniawan@company.com', role: 'ADMIN OPERASIONAL', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 39, name: 'Olivia Sutanto', company: 'VUDS', email: 'olivia.sutanto@company.com', role: 'ADMIN VENDOR', department: 'Legal', status: 'AKTIF' },
                                { id: 40, name: 'Pandu Wijaya', company: 'VUBA', email: 'pandu.wijaya@company.com', role: 'PEMINTA BARANG', department: 'IT', status: 'NON AKTIF' },
                                { id: 41, name: 'Qori Amalia', company: 'SILOG', email: 'qori.amalia@company.com', role: 'APPROVER', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 42, name: 'Rama Aditya', company: 'SID', email: 'rama.aditya@company.com', role: 'SURVEYOR', department: 'Legal', status: 'AKTIF' },
                                { id: 43, name: 'Sasa Nur', company: 'VUDS', email: 'sasa.nur@company.com', role: 'SUPER ADMIN', department: 'IT', status: 'AKTIF' },
                                { id: 44, name: 'Tegar Setiawan', company: 'VUBA', email: 'tegar.setiawan@company.com', role: 'ADMIN OPERASIONAL', department: 'Pengadaan', status: 'NON AKTIF' },
                                { id: 45, name: 'Umi Salamah', company: 'SILOG', email: 'umi.salamah@company.com', role: 'ADMIN VENDOR', department: 'Legal', status: 'AKTIF' },
                                { id: 46, name: 'Vicky Pradana', company: 'SID', email: 'vicky.pradana@company.com', role: 'PEMINTA BARANG', department: 'IT', status: 'AKTIF' },
                                { id: 47, name: 'Wahyu Saputra', company: 'VUDS', email: 'wahyu.saputra@company.com', role: 'APPROVER', department: 'Pengadaan', status: 'AKTIF' },
                                { id: 48, name: 'Xena Aulia', company: 'VUBA', email: 'xena.aulia@company.com', role: 'SURVEYOR', department: 'Legal', status: 'NON AKTIF' },
                                { id: 49, name: 'Yuni Astuti', company: 'SILOG', email: 'yuni.astuti@company.com', role: 'SUPER ADMIN', department: 'IT', status: 'AKTIF' },
                                { id: 50, name: 'Zidan Maulana', company: 'SID', email: 'zidan.maulana@company.com', role: 'ADMIN OPERASIONAL', department: 'Pengadaan', status: 'AKTIF' }
                            ],
                            // paginate: {
                            //     current_page: 1,
                            //     last_page: 5,
                            //     per_page: 10,
                            //     total: 50
                            // }
                        }}
                        actions={['edit', 'delete']}
                        type='striped'
                    />
                </div>
            </div>
        </section>
    )
}



HomePage.getLayout = function (page: ReactNode) {
    return <EOfficePanelLayout sidebarActive='vendor'>{page}</EOfficePanelLayout>;
};