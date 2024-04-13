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
        <div className='flex relative cursor-pointer'>
            <p className='text-white' onClick={() => setOpen(!open)}>{title}</p>

            <NavDropdown open={open} children={children as NavChildren[]} setOpen={setOpen} />
        </div>
    )
}

export default NavOption