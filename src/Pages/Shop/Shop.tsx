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
                    <span className='font-medium text-xl'>A Speed Ball boltban mindig pezseg az élet, ahogy az emberek rohannak be-ki.</span>
                    <span className='font-semibold text-xl'>Az illatok és színek kavalkádja tölti be a Speed Ball boltot.</span>
                    <span className='font-bold text-xl'>A polcokon sorakoznak az energiával teli italok és gyorsan fogyasztható ételek.</span>
                </p>

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
