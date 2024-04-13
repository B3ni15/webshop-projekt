import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const ShopLayout = () => {
  return (
    <main className='flex flex-col w-full h-full'>
        <Header />

        <main className="mt-[64px] p-2">
          <Outlet/>
        </main>
    </main>
  )
}

export default ShopLayout