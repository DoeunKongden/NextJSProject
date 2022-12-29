import React from 'react'
import Instagramming from './Instagramming'

function Instagram() {
    return (
        <div className='max-w-[1240px] mx-auto text-center py-24'>
            <p className='text-2xl font-bold'>Follow me on Instagram</p>
            <p className='pb-4'>@Capture</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                <Instagramming socialImg={'https://images.unsplash.com/photo-1489996833391-87afa2532240?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} />
                <Instagramming socialImg={'https://images.unsplash.com/photo-1421091242698-34f6ad7fc088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'} />
                <Instagramming socialImg={'https://images.unsplash.com/photo-1415394171664-b29caa4dca77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'} />
                <Instagramming socialImg={'https://images.unsplash.com/photo-1586919257548-66ec29b8c7ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} />
                <Instagramming socialImg={'https://images.unsplash.com/photo-1598997501691-0f7672774afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'} />
                <Instagramming socialImg={'https://images.unsplash.com/photo-1598997501691-0f7672774afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'}/>
            </div>
        </div>
    )
}

export default Instagram