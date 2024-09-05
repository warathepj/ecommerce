import Link from 'next/link';
import ShoppingCart from './(icon)/ShoppingCart'

const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <img
                        src="https://warathepj.github.io/js-ai-gallery/public/image/buybuybuy.jpg"
                        alt="logo"
                        className="w-16"
                    />
                    <h1 className="text-2xl font-bold ml-2 text-yellow-600">BuyBuyBuy</h1>
                </div>
            </Link>
            <ShoppingCart />
        </div>
    )
}

export default Header