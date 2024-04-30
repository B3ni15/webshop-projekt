import { FC, useRef, useState } from 'react'

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
    const [bought, setBought] = useState(false)
    const musicRef = useRef<HTMLAudioElement>(null)

    const handleBuy = () => {
        const items = JSON.parse(localStorage.getItem('cart') || '[]')

        const item = items.find((item: any) => item.title === title)

        if (item) {
            item.quantity += 1
        } else {
            items.push({ title, price, quantity: 1, image: image })
        }

        localStorage.setItem('cart', JSON.stringify(items))

        setBought(true)
        if (musicRef.current) {
            musicRef.current.volume = 0.2
            musicRef.current.play()
        }

        setTimeout(() => {
            setBought(false)

            if (musicRef.current) {
                musicRef.current.pause()
                musicRef.current.currentTime = 0
            }
        }, 2000)
    }

    // Ez a kettőt kell fixálni: items-center flex-col
    // Megcsinálni hogy amit megcsináltunk.

    return (
        <div className={`w-fit h-fit rounded-md bg-white/5 flex p-2 gap-5 place-self-center items-center flex-col max-md:flex-row`}>
            <img src={image} alt={title} className='w-[200px] h-[200px] object-cover rounded-md max-md:w-[100px] max-md:h-[100px]' />

            <div className="self-start">
                <h1 className='text-xl font-semibold text-white'>{title}</h1>
                <p className='text-sm text-white'>{description}</p>
                <p className='text-lg font-semibold text-white'>{price} Ft</p>
            </div>
    
            <div className="flex items-center gap-2 w-full max-lg:flex-col">
                <button type='button' className='bg-blue-500 rounded-md p-2 px-2 w-1/2 max-lg:w-full hover:bg-blue-400 transition-colors' onClick={() => handleBuy()}>
                    {
                        bought ? '✅' : 'Megveszem'
                    }
    
                    <audio ref={musicRef} src="/sound.mp3" />
                </button>
                <a href={`https://www.google.com/search?q=${title}`} target="__blank" className='bg-blue-500 rounded-md p-2 px-2 w-1/2 whitespace-nowrap text-center max-lg:w-full hover:bg-blue-400 transition-colors'>
                    Információ
                </a>
            </div>
        </div>
    )
}

export default Card