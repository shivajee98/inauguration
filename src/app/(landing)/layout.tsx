import React from 'react'


const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-neutral-800'> 
        { children }
        </div>
    )
}

export default LandingLayout
