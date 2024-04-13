import NavOption from './NavOption'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {

  const data = [
    {
      title: 'Csapatsportok',
      children: [
        {
          title: 'Röplabda',
          url: '/shop/volleyball'
        },
        {
          title: 'Kosárlabda',
          url: '/shop/basketball'
        },
        {
          title: 'Kézilabda',
          url: '/shop/handball'
        },
        {
          title: 'Football',
          children: [
            {
              title: 'Európa',
              url: '/shop/football/europe'
            },
            {
              title: 'Amerika',
              url: '/shop/football/america'
            }
          ]
        }
      ]
    },
    {
      title: 'Ütőssportok',
      children: [
        {
          title: 'Golf',
          url: '/shop/golf'
        },
        {
          title: 'Baseball',
          url: '/shop/baseball'
        }, 
        {
          title: 'Tenis',
          url: '/shop/tenis'
        },
        {
          title: 'Squash',
          url: '/shop/squash'
        },
        {
          title: 'Pingpong',
          url: '/shop/pingpong'
        },
        {
          title: 'Krikett',
          url: '/shop/krikett'
        }
      ]
    },
    {
      title: 'Egyéb',
      children: [
        {
          title: 'Petanque',
          url: '/shop/petanque'
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