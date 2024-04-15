import NavOption from './NavOption'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import data from '../../assets/NavOptions.json'
import { useEffect, useState } from 'react'
import { getCookie } from '../../utils' 

interface User {
  id: string
  username: string
  avatar: string
}

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState<User>()
  const [isLoaded, setIsLoaded] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let token = ""

    if (document.cookie.includes('token')) {
      setLoggedIn(true)

      token = getCookie('token')
      async function getUserInfo(token: string) {
        const response = await fetch(`http://213.136.90.151:2333/api/me?token=${token}`)

        return response;
      }

      const UserData = async () => {
        const res = await getUserInfo(token).then((res) => {
          return res.json()
        }).catch((err) => {
          console.error(err)
        })

        console.log(res.data)

        setUser(res.data)

        setIsLoaded(true)
      }

      UserData()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        setOpen(false)
      }
    })

    return () => {
      window.removeEventListener('resize', () => {
        if (window.innerWidth > 768) {
          setOpen(false)
        }
      })
    }
  }, [])

  return (
    <header className={`w-full h-16 bg-white/5 fixed top z-10 backdrop-blur-md flex items-center justify-between p-7 max-md:flex-col max-md:p-2 ${open ? 'h-[400px] !justify-start' : ''} transition-all`}>
      <img src="/rect24.png" alt="" className='w-14 h-12 aspect-square max-md:hidden' />

      <div className="hidden max-md:flex justify-between w-full items-center">
        <img src="/rect24.png" alt="" className='w-14 h-12 aspect-square' />
        <div className="hidden flex-col gap-1 max-w-[30px] bg-black w-full py-2 px-1 rounded-md max-md:flex h-fit" onClick={() => setOpen(!open)}>
          <div className="bg-white h-1 rounded-md"></div>
          <div className="bg-white h-1 rounded-md"></div>
          <div className="bg-white h-1 rounded-md"></div>
        </div>
      </div>

      <div className={`flex items-center gap-8 max-md:hidden max-md:w-full max-md:justify-center ${open ? '!flex flex-col !gap-3' : ''}`}>
        {data.map((item, index) => (
          <NavOption key={index} {...item} />
        ))}
      </div>

      <div className={`flex items-center gap-7 max-md:hidden ${open ? '!flex mt-auto' : ''}`}>
        <div className="flex items-center gap-3 ">
          {
            !isLoaded && (
              <p>Loading...</p>
            )
          }

          {
            loggedIn && isLoaded && (
              <>
              <img className="w-10 h-10 rounded-full" src={`https://cdn.discordapp.com/avatars/${user!.id}/${user!.avatar}.png`} alt="profilpic" />
                <p>{user!.username}</p>
              </>
            )
          }

          {
            !loggedIn && (
              <Link to="/login">
                <button className="text-white bg-transparent border border-white px-3 py-1 rounded-lg">Login</button>
              </Link>
            )
          }
        </div>

        <Link to="/shop/cart">
          <FontAwesomeIcon icon={faCartShopping} className='text-white' />
        </Link>
      </div>

    </header>
  )
}

export default Header