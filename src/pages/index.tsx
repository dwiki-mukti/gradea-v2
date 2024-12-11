import Table from '@/externals/components/Table';
import { formatTanggal, strTruncate } from '@/externals/utils/general';
import React from 'react'

export default function HomePage() {
    return (
        <section className='mt-4'>
            <div className="card">
                <div className="card-header">
                </div>

                <div className="card-body">
                    <Table
                        noPaginate={false}
                        noSearch={false}
                        path='/student-appreciation'
                        prototypeTable={[
                            {
                                title: 'tanggal',
                                keyData: (dataRow) => (formatTanggal(dataRow.date))
                            },
                            {
                                title: 'penghargaan',
                                keyData: (dataRow) => (strTruncate(dataRow.appreciation, 20))
                            },
                            {
                                title: 'poin',
                                keyData: 'point'
                            },
                            {
                                title: 'nama siswa',
                                keyData: (dataRow) => (strTruncate(dataRow.student_name, 20))
                            }
                        ]}
                        data={{
                            dataRows: []
                        }}
                        actions={'*'}
                        type='striped'
                    />
                </div>
            </div>
        </section>
    )
}
