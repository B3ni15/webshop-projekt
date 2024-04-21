import { Link, useLocation } from 'react-router-dom';
import '../../App.css';

const Shop = () => {
    const location = useLocation();

    const isShopPage = location.pathname.includes('/shop');

    return (
        <>
            <main className="w-full flex flex-col justify-center items-center gap-10 h-screen">
                <img src="/rect24.png" alt="Logo" />

                <p className='flex flex-col text-center'>
                    <span className='text-green-600 p-1'>A Speed Ball boltban mindig pezseg az élet, ahogy az emberek rohannak be-ki.</span>
                    <span className='text-sky-600 p-1'>Az illatok és színek kavalkádja tölti be a Speed Ball boltot.</span>
                    <span className='text-red-600 p-1'>A polcokon sorakoznak az energiával teli italok és gyorsan fogyasztható ételek.</span>
                </p>

                {/* Csak akkor jelenítjük meg a gombot, ha nem a /shop oldalon vagyunk */}
                {!isShopPage &&
                    <Link to="/shop" className="flex gap-2 items-center justify-center p-2 px-6 rounded-full from-[#0085FF] to-[#000699] bg-gradient-to-r text-white">
                        <img src="/kisicon.png" alt="Kisicon" className='w-6' />
                        <p className='font-bold'> Webshop</p>
                    </Link>}
            </main>
        </>
    );
}

export default Shop;
