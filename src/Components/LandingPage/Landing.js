import React from 'react'

export default function Landing({onRouteChange}) {
    return (
        <div className='container'>
            <button onClick={()=>onRouteChange('user')}>
                User
            </button>
            <button onClick={()=>onRouteChange('employee')}>
                Employee
            </button>
        </div>
    )
}
