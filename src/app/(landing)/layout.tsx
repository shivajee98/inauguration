import React from 'react'


const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-neutral-800 w-full h-full'> 
        { children }
        </div>
    )
}

export default LandingLayout
