import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <h1 className='text-center text-6xl'>404 Error</h1>
                  <Link to="/"> <h2 className='text-lg font-bold text-black text-center mt-2'>Back to Home</h2></Link>
                </div>
            </div>
        </div>
    )
}
