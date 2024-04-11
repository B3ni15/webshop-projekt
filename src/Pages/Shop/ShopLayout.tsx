import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const ShopLayout = () => {
  return (
    <main className='flex flex-col w-full h-full'>
        <Header />
      
        <Outlet/>

        
    </main>
  )
}

export default ShopLayout