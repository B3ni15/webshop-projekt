import React, { FC } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import { Link } from 'react-router-dom'

interface NavDropdownProps {
    open: boolean
    children: NavDropdownItem[]
    isSub?: boolean
    setOpen: (open: boolean) => void
}

interface NavDropdownItem {
    title: string
    url?: string
    children?: NavDropdownItem[]
}

const NavDropdown: FC<NavDropdownProps> = ({
    open,
    children,
    isSub,
    setOpen
}) => {
    const [openDropdown, setOpenDropdown] = React.useState(false)

    return (
        <>
            {
                open && (
                    <ClickAwayListener onClickAway={() => setOpen(false)}>
                        <div className='flex flex-col gap-1 bg-black/70 rounded-md p-2 absolute top-[120%] left-1/2 translate-x-[-50%] h-fit max-w-[250px] w-full backdrop-blur-md z-10' style={{
                            backgroundColor: isSub ? 'transparent' : '',
                            position: isSub ? 'relative' : 'absolute',
                        }}>
                            {
                                children.map((item, index) => {
                                    if (item.children) {
                                        return (
                                            <div key={index} className='relative'>
                                                <button
                                                    onClick={() => setOpenDropdown(!openDropdown)}
                                                    className='flex items-center justify-between w-full'
                                                >
                                                    {item.title}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className={`h-4 w-4 transform transition-all ${openDropdown ? 'rotate-180' : ''}`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                </button>
                                                <div className='ml-4'>
                                                    {openDropdown && <NavDropdown open={openDropdown} children={item.children} isSub setOpen={setOpenDropdown} />}
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <Link key={index} to={item.url as string} className='text-white hover:text-gray-300'>
                                                {item.title}
                                            </Link>
                                        )
                                    }
                                })
                            }
                        </div>
                    </ClickAwayListener>
                )
            }
        </>
    )
}

export default NavDropdown