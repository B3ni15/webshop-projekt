import React, { FC } from 'react'
import NavDropdown from './NavDropdown'

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
    children
}) => {
    const [open, setOpen] = React.useState(false)

    return (
        <div className='flex relative cursor-pointer max-md:flex-col max-md:w-full max-md:items-center max-md:gap-2 group'>
            <p className='text-white group-hover:scale-105 transition-all' onClick={() => setOpen(!open)}>{title}</p>

            <NavDropdown open={open} children={children as NavChildren[]} setOpen={setOpen} />
        </div>
    )
}

export default NavOption