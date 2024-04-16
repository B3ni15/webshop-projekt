import { useEffect, useState } from "react"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'

interface CartItem {
  title: string
  price: number
  quantity: number
  image: string
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      setCart(JSON.parse(cart))
    }
  }, [])

  return (
    <main className="flex flex-col gap-10 w-full h-full items-center">
      <h1 className="text-[30px]">Kosár</h1>
      
      <div className="flex flex-col gap-5 bg-white/5 rounded-xl p-5 w-[60%] max-lg:w-[80%] max-md:w-[100%]">
        {
          cart.length > 0 && cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-black/60 p-3 rounded-xl">
              <div className="flex gap-5 items-center">
                <img src={item.image} alt={item.title} className="size-20 object-cover rounded-xl" />

                <p className="text-white font-bold text-[20px]">{item.title} <span className="font-normal text-[15px]">x{item.quantity}</span></p>
              </div>

              <div className="flex gap-5 items-center">
                <p className="text-white font-bold text-[20px]">{item.price * item.quantity} Ft</p>

                <button className="bg-red-500/60 p-2 rounded-xl w-10 h-10" onClick={() => {
                  const newCart = cart.filter((_, i) => i !== index)
                  setCart(newCart)
                  localStorage.setItem('cart', JSON.stringify(newCart))
                }}>
                  <FontAwesomeIcon icon={faTrashCan} className="text-white" />
                </button>
              </div>
            </div>
          ))
        }

        {
          cart.length === 0 && <p className="text-white text-[20px] text-center font-bold">A kosár üres</p>
        }
      </div>
      <Link to="/shop" className="flex gap-2 items-center justify-center p-3 px-6 rounded-full from-[#0085FF] to-[#000699] bg-gradient-to-r text-white">
        <img src="/kisicon.png" alt="Kisicon" className='w-6'/>
        <p className='font-bold'> Vásárlás Folytatása</p>
      </Link>
    </main>
  )
}

export default Cart