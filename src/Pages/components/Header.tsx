import NavOption from './NavOption'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import data from '../../assets/NavOptions.json'
import React, { useEffect } from 'react'

interface User {
  id: string
  username: string
  avatar: string
}

const Header = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [user, setUser] = React.useState<User>()
  const [isLoaded, setIsLoaded] = React.useState(false)

  function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

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

  return (
    <header className='w-full h-16 bg-white/5 fixed top z-10 backdrop-blur-md flex items-center justify-between p-7'>
      <img src="/rect24.png" alt="" className='w-14 h-12 aspect-square' />

      <div className='flex items-center gap-8'>
        {data.map((item, index) => (
          <NavOption key={index} {...item} />
        ))}

      </div>

      <div className="flex items-center gap-7">
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

        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} className='text-white' />
        </Link>
      </div>
    </header>
  )
}

export default Header