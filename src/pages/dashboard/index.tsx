import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function HomePage() {
    const router = useRouter();
    useEffect(() => {
        router.push('/vendor');
    }, [])

    return (
        <div>Loading..</div>
    )
}
