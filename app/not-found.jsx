import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function notfound() {
    return (
        <div className='
        flex flex-col items-center justify-center h-screen'>
            <div className='text-6xl font-bold gradient-title'>404 Not Found</div>
            <div className='mt-2 text-xl mb-4'>The page you are looking for does not exist.</div>
            <Link href={'/'}>
                <Button >Return Home</Button>

            </Link>
        </div>
    )
}

export default notfound