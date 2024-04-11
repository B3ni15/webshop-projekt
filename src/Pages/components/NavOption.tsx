import React, { FC } from 'react'
import NavChildren from './NavChildren'

interface NavOptionProps {
    title: string
    children?: NavChildren[]
    url?: string
}

interface NavChildren {
    title: string
    children?: NavChildren[]
    url?: string
}

const NavOption: FC<NavOptionProps> = ({
    title,
    children,
    url
}) => {
    const [open, setOpen] = React.useState(false)
    return (
        <div className='flex gap-2 relative'>
            <p className='text-white' onClick={() => setOpen(!open)}>{title}</p>

            {open && children && children.map((child, index) => (
                <NavChildren key={index} {...child} position={String(index * 20)} />
            ))}
        </div>
    )
}

export default NavOption