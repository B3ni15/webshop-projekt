import React, { FC } from 'react'

interface NavChildrenProps {
    title: string
    children?: NavChildrenProps[]
    url?: string
    position?: string
}

const NavChildren: FC<NavChildrenProps> = ({
    title,
    children,
    url,
    position
}) => {
    return (
        <>
            <div className='bg-black absolute' style={{
                top: `${position}px`,
                left: '120%'
            }}>
                {title}
            </div>
        </>
    )
}

export default NavChildren