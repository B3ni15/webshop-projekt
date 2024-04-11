import NavOption from './NavOption'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {

  const data = [
    {
      title: "Röplabda",
      url: "/volleyball",
    },
    {
      title: "Foci",
      children: [
        {
          title: "Europa",
          url: "/football/europa",
        },
        {
          title: "America",
          url: "/football/america",
        },
        {
          title: "Asia",
          url: "/football/asia",
        },
        {
          title: "Africa",
          url: "/football/africa",
        }
      ]
    }
  ]

  return (
    <header className='w-full h-16 bg-white/5 fixed top z-10 backdrop-blur-md flex items-center justify-between p-7'>
      <img src="/rect24.png" alt="" className='w-14 h-12 aspect-square' />

      <div className='flex items-center gap-8'>
        {data.map((item, index) => (
          <NavOption key={index} {...item} />
        ))}

      </div>

      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} className='text-white' />
      </Link>
    </header>
  )
}

export default Header