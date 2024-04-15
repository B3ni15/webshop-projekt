import { FC } from 'react'

interface CardProps {
    title: string
    price: number
    image: string
    description: string
}

const Card: FC<CardProps> = ({
    title,
    price,
    image,
    description
}) => {
    const handleBuy = () => {
        // add the item to local storage if the item is not already in the cart
        // if the item is already in the cart, increase the quantity of the item

        const items = JSON.parse(localStorage.getItem('cart') || '[]')

        const item = items.find((item: any) => item.title === title)

        if (item) {
            item.quantity += 1
        } else {
            items.push({ title, price, quantity: 1 })
        }
    }

    return (
        <div className='w-fit h-fit rounded-md bg-white/5 flex flex-col p-2 items-center gap-5 place-self-center'>
            <img src={image} alt={title} className='w-[200px] h-[200px] object-cover rounded-md' />
            <div className="self-start">
                <h1 className='text-xl font-semibold text-white'>{title}</h1>
                <p className='text-sm text-white'>{description}</p>
                <p className='text-lg font-semibold text-white'>{price} Ft</p>
            </div>

            <div className="flex items-center gap-2 w-full max-lg:flex-col">
            <button type='button' className='bg-blue-500 rounded-md p-2 px-2 w-1/2 max-lg:w-full' onClick={() => handleBuy()}>Megveszem</button>
                <a href={`https://www.google.com/search?q=${title}`} target="__blank" className='bg-blue-500 rounded-md p-2 px-2 w-1/2 whitespace-nowrap text-center max-lg:w-full'>
                    További Információ
                </a>
            </div>
        </div>
    )
}

export default Card